import { g as googleAuth } from '../../../chunks/google_lZpr-Xly.mjs';
import { s as sessionManager } from '../../../chunks/session_GqxQkylQ.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const session = sessionManager.get(cookies);
  if (!session || !session.accessToken) {
    return new Response(JSON.stringify({ error: "Unauthorized or missing token" }), { status: 401 });
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
    }
    const driveResponse = await googleAuth.uploadToDrive(session.accessToken, {
      name: file.name,
      type: file.type,
      buffer: Buffer.from(await file.arrayBuffer())
    });
    const n8nWebhookUrl = process.env.N8N_INGESTION_WEBHOOK || "http://localhost:5678/webhook/ingestion";
    console.log(`Triggering n8n ingestion for file: ${driveResponse.id}`);
    return new Response(JSON.stringify({
      success: true,
      fileId: driveResponse.id,
      url: driveResponse.webViewLink,
      message: "File uploaded and ingestion triggered"
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("Upload error:", e);
    return new Response(JSON.stringify({ error: "Upload failed" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
