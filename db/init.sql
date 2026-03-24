-- Tabla de tenants
CREATE TABLE IF NOT EXISTS tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  google_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  avatar_url TEXT,
  google_access_token TEXT,
  google_refresh_token TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Configuración del agente por tenant
CREATE TABLE IF NOT EXISTS agent_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  
  -- Agente (Cerebro)
  agent_name TEXT DEFAULT 'Asistente',
  company_name TEXT NOT NULL,
  agent_role TEXT,
  tone TEXT DEFAULT 'formal',
  format_rules TEXT,
  company_info TEXT,
  branches_info TEXT,
  verification_protocol TEXT,
  general_rules TEXT,
  
  -- Base de conocimiento
  drive_folder_id TEXT,
  
  -- Carrier (Andreani)
  carrier_username TEXT,
  carrier_password TEXT,
  
  -- Canales de despliegue
  channel TEXT DEFAULT 'zenvia',
  channel_status TEXT DEFAULT 'pending',
  wa_phone_number_id TEXT,
  wa_access_token TEXT,
  webhook_url TEXT,
  
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id)
);

-- Tabla de Aprovisionamiento (Pedidos B2B)
CREATE TABLE IF NOT EXISTS provisioning_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  type TEXT NOT NULL,        -- 'woocommerce', 'shopify', 'meli', 'channel_zenvia', 'channel_whatsapp'
  credentials JSONB,         -- datos encriptados del cliente
  status TEXT DEFAULT 'pending', -- 'pending', 'active', 'error'
  admin_notes TEXT,
  requested_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

-- Tabla para Analytics (Chat Histories dummy for MVP structure)
CREATE TABLE IF NOT EXISTS n8n_chat_histories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  session_id TEXT NOT NULL,
  phone_number TEXT,
  message TEXT,
  response TEXT,
  action TEXT DEFAULT 'continuar', -- continuar, derivar, finalizar, encuesta
  created_at TIMESTAMPTZ DEFAULT NOW()
);
