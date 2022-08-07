const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

// SCOPES allows you to set access levels 
// This is set to readonly for now because you don't have access rights to update the calendar yourself
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// Credentials are those values required to get access to your calendar
// If you see “process.env” this meansthe value is in the “config.json” file
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://charl1980.github.io/meet"],
  javascript_origins: ["https://charl1980.github.io", "http://localhost:3000"],
};

const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// First step in the OAuth process is to generate a URL so users can log in with Google and be authorized to see your calendar
module.exports.getAuthURL = async () => {

  // Scopes array passed to the `scope` option
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};