# Integración del Sistema: Dashboard MVP — Agente IA SaaS

Este documento explica cómo las distintas partes de la arquitectura interactúan entre sí.

## 1. Despliegue (Infraestructura)
Todo el sistema está pensado para desplegarse en **Coolify**.
- **Astro Dashboard**: Se construye usando el `Dockerfile` optimizado y corre sobre Node.js exponiendo el puerto 4321.
- **PostgreSQL**: Se levanta mediante `docker-compose.yml` e inicializa automáticamente su esquema con `db/init.sql`.

## 2. Autenticación y Usuarios
- El usuario ingresa a `/login` y es redirigido mediante `/api/auth/google` a la pantalla de consentimiento.
- Google devuelve un código a `/api/auth/callback`, el backend de Astro lo intercambia por tokens (incluyendo scope de Google Drive) y crea una sesión JWT en las cookies.
- Si el tenant no existe en la base de datos, se crea un registro en la tabla `tenants` y uno por defecto en `agent_config`.

## 3. Configuración del Agente
- En la vista `/config`, el componente React `AgentConfigForm` hace un `GET /api/agent/config` para cargar los datos actuales.
- Al guardar, hace un `PUT /api/agent/config` actualizando la tabla `agent_config`.
- Esta tabla contiene información crucial: tono, rol, instrucciones extra, acciones, etc.

## 4. Ingesta de Conocimiento (Knowledge Base)
- En `/knowledge`, el usuario usa `FileUploader` para subir un archivo.
- El archivo va a `/api/files/upload`. El servidor de Astro usa los tokens de Google OAuth del usuario para **subir el archivo directamente a una carpeta en el Google Drive del tenant**.
- Una vez subido a Drive, Astro hace un **POST al Webhook de Ingesta de n8n** enviando el `tenant_id` y el `file_id`.
- **n8n** recibe el webhook, descarga el archivo de Drive, procesa el texto (chunking), genera los embeddings (Gemini/OpenAI) y los guarda en la tabla de PGVector de PostgreSQL asociándolos al `tenant_id`.

## 5. Ejecución del Chat (Flujo Principal n8n)
- Cuando un usuario final chatea con el agente, el flujo principal de n8n se dispara.
- **n8n hace un GET a `/api/agent/prompt?tenant_id=...`** en el Dashboard de Astro.
- Astro usa la función `buildSystemPrompt()` (en `lib/prompt-builder.ts`) para combinar la configuración de la BD (datos de la empresa, tono, rol) en un único gran System Prompt dinámico.
- n8n inyecta este System Prompt en el Agente RAG.
- Cuando el Agente necesita información, consulta PGVector aplicando un filtro estricto por `metadata->>'tenant_id'` para asegurar el aislamiento de datos.
