// lib/sendEmail.ts — MailerSend email utility

interface EmailOptions {
    subject: string;
    html: string;
    toEmail?: string;   // customer email (optional, for customer confirmation)
    toName?: string;
}

export async function sendStudioEmail({ subject, html, toEmail, toName }: EmailOptions) {
    const apiKey = process.env.MAILERSEND_API_KEY;
    const studioEmail = process.env.STUDIO_EMAIL || "smilingnailswiesbaden@gmail.com";

    if (!apiKey) {
        console.error("[MailerSend] MAILERSEND_API_KEY not set");
        return;
    }

    // Use verified domain (smilingstudio.de once DNS records are set up + verified in MailerSend)
    // Fallback: test domain while verification is in progress
    const fromEmail = process.env.MAILERSEND_FROM_EMAIL || "noreply@test-r83ql3py59mgzw1j.mlsender.net";

    // Build recipient list
    const toList = [{ email: studioEmail, name: "Smiling Studio" }];
    // Also send copy to customer if email provided
    if (toEmail && toEmail !== studioEmail) {
        toList.push({ email: toEmail, name: toName || "Kunde" });
    }

    const body = {
        from: { email: fromEmail, name: "Smiling Studio Buchung" },
        to: toList,
        subject,
        html,
    };

    try {
        const res = await fetch("https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
        });

        if (res.ok) {
            console.log("[MailerSend] Email sent successfully to:", toList.map(t => t.email).join(", "));
        } else {
            const err = await res.text();
            console.error("[MailerSend] Error response:", res.status, err);
        }
    } catch (e) {
        console.error("[MailerSend] Fetch error:", e);
    }
}

export function buildBookingEmail(appointment: {
    name: string;
    phone: string;
    email: string;
    date: string;
    timeSlot: string;
    services: string;
    totalMins: number;
    remarkNote?: string | null;
    status?: string;
}, subject: string) {
    const services = JSON.parse(appointment.services) as { name: string; duration: number; price: number | string }[];

    const serviceRows = services
        .map((s) => `<tr><td style="padding:4px 8px">${s.name}</td><td style="padding:4px 8px">${s.duration} Min</td><td style="padding:4px 8px">${s.price}€</td></tr>`)
        .join("");

    const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;padding:32px;border-radius:12px">
      <div style="background:linear-gradient(135deg,#5c4033,#8b6355);padding:24px;border-radius:8px;text-align:center;margin-bottom:24px">
        <h1 style="color:#fff;margin:0;font-size:22px">Smiling Studio – ${subject}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:16px">
        <tr><td style="padding:8px;font-weight:bold;width:140px">Name:</td><td>${appointment.name}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Telefon:</td><td>${appointment.phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">E-Mail:</td><td>${appointment.email}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Datum:</td><td>${appointment.date}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Uhrzeit:</td><td>${appointment.timeSlot} Uhr</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Gesamtdauer:</td><td>${appointment.totalMins} Minuten</td></tr>
        ${appointment.remarkNote ? `<tr><td style="padding:8px;font-weight:bold">Bemerkung:</td><td>${appointment.remarkNote}</td></tr>` : ""}
      </table>
      <h3 style="color:#5c4033;margin-bottom:8px">Gewählte Dienstleistungen:</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px;border:1px solid #eee">
        <thead><tr style="background:#f5ebe0"><th style="padding:6px 8px;text-align:left">Behandlung</th><th style="padding:6px 8px">Dauer</th><th style="padding:6px 8px">Preis</th></tr></thead>
        <tbody>${serviceRows}</tbody>
      </table>
      <p style="margin-top:24px;color:#888;font-size:12px">Diese E-Mail wurde automatisch generiert von der Online-Buchung auf smilingstudio.de</p>
    </div>`;

    return html;
}
