const nodemailer = require("nodemailer");
const { google } = require("googleapis");
import { render } from "@react-email/render";
import TechlancerrEventEmail from "@/components/contactus/EmailTemplate";
import { NextResponse } from "next/server";

// Replace these values with your OAuth2 credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// Create a new OAuth2 client with your credentials
const OAuth2 = google.auth.OAuth2;
const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// Set the refresh token
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

// Get an access token using the OAuth2 client
const accessToken = await oAuth2Client.getAccessToken();

// Create a Nodemailer transporter using OAuth2
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "techlancerr@iub.edu.pk",
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken.token,
  },
});

const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

const sheetId = process.env.SHEET_ID;
const sheetRange = "Sheet1";

export async function POST(req) {
  try {
    const { name, email, message, phone } = await req.json();

    const emailHtml = render(
      <TechlancerrEventEmail sname={name} smessage={message} />
    );

    const mailOptions = {
      from: "TechLancerr <techlancerr@iub.edu.pk>",
      to: email,
      subject: "Thank you for reaching out!",
      html: emailHtml,
    };

    const values = [[new Date().toISOString(), name, email, phone, message]];

    // Write data to spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: sheetRange,
      valueInputOption: "USER_ENTERED",
      resource: {
        values,
      },
    });

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
