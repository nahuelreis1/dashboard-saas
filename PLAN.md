# PLAN: Dashboard MVP — Agente IA SaaS

## Arquitectura y Stack
- **Frontend / Backend**: Astro + React islands (Node adapter SSR)
- **Base de Datos**: PostgreSQL (alojada en Coolify)
- **Autenticación**: Google OAuth 2.0 (scopes de Drive)
- **Infraestructura**: Docker / Coolify
- **Automatización**: n8n (Ingesta y Flujo principal)
- **Almacenamiento**: Google Drive (carpeta por tenant)

## Fases de Implementación

### 1. Base de Datos (`experto-db`)
- Crear esquema de tablas (`tenants` y `agent_config`).
- Generar script de inicialización (`db/init.sql`) para levantar la base de datos en Docker/Coolify.

### 2. Infraestructura (`experto-infra`)
- Crear `Dockerfile` optimizado para Astro Node SSR.
- Crear `docker-compose.yml` que incluya el dashboard Astro y la base de datos PostgreSQL.

### 3. Frontend / Backend Base (`experto-frontend` & `experto-backend`)
- Inicializar proyecto Astro con integración de React y Tailwind.
- Configurar el adapter SSR de Node.
- Crear layouts y páginas base (Index, Login, Dashboard, Config, Knowledge).
- Crear componentes React (AgentConfigForm, FileUploader, etc).
- Implementar Endpoints de API (`/api/auth/*`, `/api/agent/*`, `/api/files/*`).
- Lógica de autenticación con Google y manejo de sesiones.
- Conexión a DB y `prompt-builder`.

### 4. Automatización (`experto-automatizacion`)
- Documentar webhooks esperados para n8n (ingesta de archivos de Drive y chat).

### 5. Integración
- Asegurar variables de entorno y conexión Astro -> PostgreSQL.
- Verificación cruzada entre endpoints y UI.
