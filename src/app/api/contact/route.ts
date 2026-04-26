import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Të gjitha fushat janë të detyrueshme." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "InfoMat <noreply@infomat.app>",
      to: ["info@infomat.app"],
      replyTo: email,
      subject: `[InfoMat Contact] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#3b82f6">Mesazh i ri nga InfoMat.app</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:100px">Emri:</td><td style="padding:8px 0;color:#111">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email:</td><td style="padding:8px 0;color:#111">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Subjekti:</td><td style="padding:8px 0;color:#111">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p style="color:#374151;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Dërgimi dështoi. Provo sërish." }, { status: 500 });
  }
}
