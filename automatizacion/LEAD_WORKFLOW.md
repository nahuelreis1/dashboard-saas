# Workflow n8n: Recepción de Leads (Formulario de Onboarding)

Cuando un cliente completa el formulario de la Landing Page de AGENTino, se dispara una petición POST al webhook de n8n. Este flujo procesa los datos y los guarda en Google Sheets.

## 1. Nodo Webhook (Trigger)
- **Method:** `POST`
- **Path:** `agentino-lead` (ej: `https://n8n.tudominio.com/webhook/agentino-lead`)
- **Respond:** `Immediately`
- **Response Code:** `200`
- **Response Body:** `{"status": "success"}`

El body del webhook llegará con este formato JSON:
```json
{
  "empresa": "Acme Corp",
  "email": "ceo@acme.com",
  "interests": ["ventas", "zenvia", "whatsapp"],
  "description": "Necesitamos un bot que responda preguntas de stock."
}
```

## 2. Nodo Google Sheets
- **Operation:** `Append Row`
- **Spreadsheet:** Selecciona tu hoja "AGENTino Leads"
- **Sheet:** `Leads`
- Mapea las columnas:
  - **Fecha:** `={{ $now }}`
  - **Empresa:** `={{ $json.body.empresa }}`
  - **Email:** `={{ $json.body.email }}`
  - **Intereses:** `={{ $json.body.interests.join(', ') }}`
  - **Caso de Uso:** `={{ $json.body.description }}`

## 3. (Opcional) Nodo Telegram / Slack
Para recibir una alerta inmediata en tu celular cada vez que alguien solicita un agente:
- **Chat ID:** Tu ID
- **Text:** `🚀 ¡Nuevo Lead AGENTino!\nEmpresa: {{ $json.body.empresa }}\nEmail: {{ $json.body.email }}\nUso: {{ $json.body.description }}`
