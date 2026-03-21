-- Tabla de tenants (clientes del SaaS)
CREATE TABLE IF NOT EXISTS tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  google_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Configuración del agente por tenant
CREATE TABLE IF NOT EXISTS agent_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  
  -- Agente
  agent_name TEXT DEFAULT 'Asistente',
  company_name TEXT NOT NULL,
  company_description TEXT,
  company_info JSONB DEFAULT '{}'::jsonb,
  tone TEXT DEFAULT 'formal',
  actions JSONB DEFAULT '["continuar","derivar","finalizar","encuesta"]'::jsonb,
  custom_prompt_additions TEXT,
  
  -- Base de conocimiento
  drive_folder_id TEXT,
  
  -- Carrier (Andreani)
  carrier_username TEXT,
  carrier_password TEXT,
  
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id)
);
