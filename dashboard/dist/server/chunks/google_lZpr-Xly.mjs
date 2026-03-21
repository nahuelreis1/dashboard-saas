const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "mock_client_id";
process.env.GOOGLE_CLIENT_SECRET || "mock_client_secret";
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:4321/api/auth/callback";
const googleAuth = {
  getAuthUrl: () => {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/drive.file"
    ];
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "code",
      scope: scopes.join(" "),
      access_type: "offline",
      prompt: "consent"
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  },
  exchangeCodeForTokens: async (code) => {
    console.log("Exchanging code for tokens:", code);
    return {
      access_token: "mock_access_token_" + Date.now(),
      refresh_token: "mock_refresh_token",
      expires_in: 3600,
      id_token: "mock_id_token",
      user: {
        id: "12345",
        email: "user@example.com",
        name: "Demo User"
      }
    };
  },
  uploadToDrive: async (accessToken, fileData) => {
    console.log(`Simulating upload of ${fileData.name} to Google Drive`);
    return {
      id: "drive_file_id_" + Math.random().toString(36).substring(7),
      webViewLink: `https://drive.google.com/file/d/mock/view`
    };
  }
};

export { googleAuth as g };
