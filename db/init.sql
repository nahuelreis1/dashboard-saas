-- =============================================================================
-- SaaS Dashboard for AI Agents - Initial Schema
-- =============================================================================
-- Description: Multi-tenant schema for managing AI agent configurations.
-- Stack: Astro (SSR), PostgreSQL (Postgres 18+), n8n, Coolify.
-- Author: Database Expert Subagent
-- =============================================================================

-- 1. EXTENSIONS
-- Required for random UUID generation and crypto functions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. SCHEMAS
-- Following postgresql-best-practices:
-- public: tables and views
-- private: internal logic (triggers, etc.)
CREATE SCHEMA IF NOT EXISTS private;

-- 3. HELPER FUNCTIONS
-- Standard trigger function for updating updated_at timestamp
CREATE OR REPLACE FUNCTION private.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. TABLES

-- Tenants Table: Stores primary account information (Auth metadata)
-- Using identity pattern and UUIDs for multi-tenant isolation
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    google_id TEXT UNIQUE NOT NULL, -- External ID from OAuth provider
    email TEXT NOT NULL,
    name TEXT,
    avatar_url TEXT,
    drive_folder_id TEXT, -- For n8n ingestion/storage
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Agent Config Table: Stores specific configuration for each tenant's agent
CREATE TABLE IF NOT EXISTS agent_config (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    
    -- Agent Personality & Identity
    agent_name TEXT DEFAULT 'Asistente',
    company_name TEXT NOT NULL,
    company_description TEXT,
    company_info JSONB DEFAULT '{}'::jsonb,
    
    -- Interaction Params
    tone TEXT DEFAULT 'formal' CHECK (tone IN ('formal', 'casual', 'friendly', 'direct')),
    language TEXT DEFAULT 'es',
    actions JSONB DEFAULT '["continuar", "derivar", "finalizar", "encuesta"]'::jsonb,
    teams JSONB DEFAULT '[]'::jsonb,
    
    -- E-commerce & Logistics Integration
    ecommerce_type TEXT,
    ecommerce_credentials JSONB DEFAULT '{}'::jsonb,
    carrier_type TEXT,
    carrier_credentials JSONB DEFAULT '{}'::jsonb,
    
    -- LLM & n8n Pipeline
    llm_model TEXT DEFAULT 'gemini-flash',
    llm_temperature FLOAT DEFAULT 0.3 CHECK (llm_temperature >= 0 AND llm_temperature <= 2),
    n8n_webhook_url TEXT,
    n8n_ingestion_webhook TEXT,
    custom_prompt_additions TEXT,
    
    -- Metadata
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. INDEXES
-- Optimizing common queries for multi-tenant access
CREATE INDEX IF NOT EXISTS agent_config_tenant_id_idx ON agent_config(tenant_id);
CREATE INDEX IF NOT EXISTS tenants_email_idx ON tenants(email);

-- 6. TRIGGERS
-- Auto-update the updated_at column on agent_config changes
CREATE TRIGGER agent_config_updated_at_trg
    BEFORE UPDATE ON agent_config
    FOR EACH ROW
    EXECUTE FUNCTION private.set_updated_at();

-- 7. SECURITY (Row-Level Security)
-- Ensuring strict tenant isolation
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_config ENABLE ROW LEVEL SECURITY;

-- Note: Policies below assume a standard Supabase-like Auth context (auth.uid())
-- If using a custom SSR connection with service role, these can be bypassed or adjusted.

-- Tenants: Users can only see their own tenant record
-- Policy for individual users (mapping google_id or sub to ID if needed)
-- CREATE POLICY tenant_access_policy ON tenants
--     FOR ALL USING (auth.uid()::text = google_id);

-- Agent Config: Users can only see configurations for their tenant
-- CREATE POLICY agent_config_access_policy ON agent_config
--     FOR ALL USING (
--         EXISTS (
--             SELECT 1 FROM tenants 
--             WHERE tenants.id = agent_config.tenant_id 
--             AND tenants.google_id = auth.uid()::text
--         )
--     );

-- 8. COMMENTS (Self-documentation)
COMMENT ON TABLE tenants IS 'Stores unique tenant accounts linked to Google Auth.';
COMMENT ON TABLE agent_config IS 'Centralized AI agent configuration per tenant for n8n/Astro ingestion.';
COMMENT ON COLUMN agent_config.company_info IS 'Rich metadata for the AI agent to understand business context.';
COMMENT ON COLUMN agent_config.n8n_webhook_url IS 'Primary n8n execution hook for chat interactions.';
