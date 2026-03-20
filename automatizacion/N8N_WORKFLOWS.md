# Configuración de Flujos n8n - Dashboard MVP SaaS

Este documento detalla la configuración técnica de los dos flujos principales de n8n requeridos para el MVP del Dashboard SaaS de agentes IA.

## Requisitos Previos

### 1. Credenciales en n8n
- **Google Drive OAuth2 API**: Para descargar archivos de Knowledge Base.
- **OpenAI API / Gemini API**: Para Embeddings y Modelos de Lenguaje.
- **Postgres API**: Conexión a la base de datos de Supabase/PostgreSQL con extensión `pgvector`.

### 2. Estructura de Base de Datos (PGVector)
Se asume una tabla `embeddings` con la siguiente estructura mínima:
```sql
CREATE TABLE IF NOT EXISTS documents (
  id uuid primary key default gen_random_uuid(),
  content text,
  metadata jsonb,
  embedding vector(1536) -- 1536 para OpenAI, 768 para Gemini
);
```
> **Nota de Multitenancy**: El `tenant_id` se almacenará dentro de la columna `metadata`.

---

## 1. Flujo de Ingesta (Vectorización)
Este flujo se activa cuando el Dashboard sube un archivo a Drive y notifica a n8n para procesarlo.

### Nodo 1: Webhook Trigger
- **Método**: POST
- **Path**: `/webhook/ingesta`
- **Payload Esperado**:
  ```json
  {
    "tenant_id": "uuid-del-cliente",
    "file_id": "google-drive-file-id"
  }
  ```

### Nodo 2: Google Drive (Download File)
- **Action**: Download a File
- **File ID**: `{{ $json.file_id }}`
- **Output**: Binario (data)

### Nodo 3: Default Data Loader
- **Input**: Binario (data)
- **Mode**: PDF, Text, or Auto-detect.

### Nodo 4: Recursive Character Text Splitter
- **Chunk Size**: 1000
- **Chunk Overlap**: 200

### Nodo 5: OpenAI Embeddings (o Gemini)
- **Model**: `text-embedding-3-small` (OpenAI) o `embedding-001` (Gemini).

### Nodo 6: Postgres Vector Store (Insert)
- **Table**: `documents`
- **Metadata**:
  - `tenant_id`: `{{ $node["Webhook"].json["tenant_id"] }}`
  - `source`: `{{ $node["Webhook"].json["file_id"] }}`
- **Operation**: Insert chunks with their respective embeddings.

---

## 2. Flujo Principal (Chat con el Agente)
Este flujo maneja la interacción del usuario final con el agente, aplicando RAG y System Prompts dinámicos.

### Nodo 1: Webhook / Chat Trigger
- **Trigger**: Webhook POST `/webhook/chat` o Chat Trigger (n8n native).
- **Parámetros**: `query` (pregunta del usuario) y `tenant_id`.

### Nodo 2: HTTP Request (Fetch System Prompt)
- **Método**: GET
- **URL**: `https://tu-dashboard.com/api/agent/prompt?tenant_id={{ $json.tenant_id }}`
- **Auth**: Header con API Key si es necesario.
- **Respuesta Esperada**: `{ "system_prompt": "Eres un experto en..." }`

### Nodo 3: AI Agent Node (LangChain)
- **Model**: OpenAI (GPT-4o) o Gemini (1.5 Pro).
- **Prompt Type**: Define Agent with System Message.
- **System Message**: `{{ $node["HTTP Request"].json.system_prompt }}`
- **Tools**: Vector Store Retrieval.

### Nodo 4: Tool - Vector Store Retrieval (PGVector)
- **Connection**: Postgres.
- **Table**: `documents`.
- **Filtering (CRÍTICO)**:
  - En el campo de "Filter", inyectar el `tenant_id` para aislar los datos:
  - `metadata->>'tenant_id' = '{{ $node["Webhook"].json["tenant_id"] }}'`
- **Top K**: 4 (cantidad de fragmentos relevantes a recuperar).

---

## Seguridad y Multitenancy
1. **Aislamiento de Datos**: Cada consulta al Vector Store DEBE incluir el filtro de `tenant_id` en la metadata para evitar que un agente responda con información de otro cliente.
2. **Prompts Dinámicos**: Al centralizar el prompt en el Dashboard, n8n actúa como motor de ejecución puro, permitiendo al usuario cambiar el comportamiento del agente sin modificar el workflow de n8n.
3. **Manejo de Errores**: Se recomienda añadir nodos de "Error Trigger" para notificar al Dashboard vía Webhook si la vectorización falla (ej: archivo corrupto o cuota de API excedida).
