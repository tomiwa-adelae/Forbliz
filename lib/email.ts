import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_PUBLIC_KEY!,
  apiSecret: process.env.MAILJET_API_PRIVATE_KEY!,
});

const FORBLIZ_AMBER = "#f59e0b"; // Forbliz Brand Color
const FORBLIZ_DARK = "#020806"; // Deep Industrial Black

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  tenders: "Tenders & Bidding",
  logistics: "Mobilization & Logistics",
  rental: "Equipment Rental",
  technical: "Technical Engineering",
};

export async function sendContactConfirmationEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const firstName = data.name.split(" ")[0];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; font-family: 'Arial', sans-serif; }
        .header { background-color: ${FORBLIZ_DARK}; padding: 40px; text-align: center; border-bottom: 4px solid ${FORBLIZ_AMBER}; }
        .content { padding: 40px; color: #1a1a1a; line-height: 1.6; }
        .highlight { background-color: #fffbeb; border-left: 4px solid ${FORBLIZ_AMBER}; padding: 20px; margin: 20px 0; font-style: italic; }
        .footer { background-color: #f4f4f5; padding: 20px; text-align: center; font-size: 12px; color: #71717a; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 4px; font-style: italic;">FORBLIZ</h1>
          <p style="color: ${FORBLIZ_AMBER}; margin: 5px 0 0; font-size: 10px; text-transform: uppercase; letter-spacing: 2px;">Heavy Equipment & Industrial Services</p>
        </div>
        <div class="content">
          <h2>Inquiry Logged Successfully</h2>
          <p>Hello ${firstName},</p>
          <p>We have received your request regarding <strong>${subjectLabel}</strong>. Our operations team is currently reviewing your project requirements.</p>
          <div class="highlight">"${data.message}"</div>
          <p><strong>Next Steps:</strong> A Forbliz technical consultant will reach out to you within 24 hours to discuss mobilization or provide a preliminary quote.</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} FORBLIZ GLOBAL RESOURCES LTD.</p>
          <p>Operational Excellence • Site Integrity • Zero Downtime</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL_ADDRESS!,
          Name: "Forbliz Operations",
        },
        To: [{ Email: data.email, Name: data.name }],
        Subject: `FORBLIZ: Acknowledgement of Inquiry [${subjectLabel}]`,
        HTMLPart: htmlContent,
      },
    ],
  });
}

// Admin Notification follows the same logic, just swapping colors and the name to "Forbliz Command Center"

export async function sendContactAdminNotificationEmail(data: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date;
}) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
      <div style="background-color: ${FORBLIZ_AMBER}; color: white; padding: 20px; text-align: center;">
        <h2>New Business Inquiry</h2>
      </div>
      <div style="padding: 20px; border: 1px solid #eee;">
        <p><strong>Ref ID:</strong> ${data.id}</p>
        <p><strong>Category:</strong> ${subjectLabel}</p>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Submitted:</strong> ${data.createdAt.toLocaleString()}</p>
        
        <h3>Message</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</div>
        
        <div style="margin-top: 25px;">
           <a href="mailto:${data.email}?subject=RE: FORBLIZ Inquiry - ${subjectLabel}" 
              style="background-color: ${FORBLIZ_DARK}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
              Reply to Client
           </a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: "Forbliz Web Portal",
          },
          To: [
            { Email: process.env.ADMIN_EMAIL_ADDRESS!, Name: "Forbliz Admin" },
          ],
          Subject: `[NEW INQUIRY] ${subjectLabel} from ${data.firstName} ${data.lastName}`,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Admin Notification Error:", error);
    return { success: false };
  }
}

// Add these to your existing email file

export async function sendQuoteConfirmationEmail(data: {
  name: string;
  email: string;
  category: string;
  location: string;
}) {
  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
      <div style="background-color: ${FORBLIZ_DARK}; padding: 30px; text-align: center; border-bottom: 4px solid ${FORBLIZ_AMBER};">
        <h1 style="color: white; margin: 0; letter-spacing: 2px;">FORBLIZ RFQ</h1>
      </div>
      <div style="padding: 40px; color: #334155;">
        <h2 style="color: #0f172a;">Request Logged: ${data.category}</h2>
        <p>Hello ${data.name.split(" ")[0]},</p>
        <p>Thank you for submitting your project parameters for <b>${data.location}</b>. Our technical team is now calculating the mobilization requirements.</p>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid ${FORBLIZ_AMBER};">
           <p style="margin: 0; font-size: 14px;">Our site engineers typically complete technical reviews within 48 hours.</p>
        </div>
        <p>Regards,<br/><b>Forbliz Operations Team</b></p>
      </div>
    </div>
  `;

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL_ADDRESS!,
          Name: "Forbliz RFQ Team",
        },
        To: [{ Email: data.email, Name: data.name }],
        Subject: `FORBLIZ: Project Initiation Received [${data.category}]`,
        HTMLPart: htmlContent,
      },
    ],
  });
}

export async function sendQuoteAdminNotificationEmail(data: {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  serviceCategory: string;
  location: string;
  tonnage?: string;
  startDate: string;
  requirements: string;
  createdAt: Date;
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.5;">
      <div style="border: 2px solid ${FORBLIZ_AMBER}; border-radius: 12px; overflow: hidden; max-width: 700px;">
        <div style="background-color: ${FORBLIZ_DARK}; color: ${FORBLIZ_AMBER}; padding: 25px; text-align: center;">
          <h2 style="margin: 0; text-transform: uppercase; letter-spacing: 2px;">New RFQ Package Received</h2>
          <p style="color: white; font-size: 12px; margin-top: 5px;">Ref ID: ${data.id}</p>
        </div>

        <div style="padding: 30px;">
          <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; color: ${FORBLIZ_DARK};">Project Overview</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Category:</td>
              <td style="padding: 8px 0;">${data.serviceCategory.toUpperCase()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Location:</td>
              <td style="padding: 8px 0;">${data.location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Est. Tonnage:</td>
              <td style="padding: 8px 0;">${data.tonnage || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Start Date:</td>
              <td style="padding: 8px 0;">${data.startDate}</td>
            </tr>
          </table>

          <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-top: 30px; color: ${FORBLIZ_DARK};">Lead Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${data.fullName}</p>
          <p style="margin: 5px 0;"><strong>Company:</strong> ${data.companyName}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>

          <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-top: 30px; color: ${FORBLIZ_DARK};">Technical Requirements</h3>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; font-family: monospace; white-space: pre-wrap;">${data.requirements}</div>

          <div style="margin-top: 40px; text-align: center;">
            <a href="mailto:${data.email}?subject=RE: Forbliz RFQ - ${data.serviceCategory} at ${data.location}" 
               style="background-color: ${FORBLIZ_DARK}; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              Contact Lead for Clarification
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL_ADDRESS!,
          Name: "Forbliz RFQ System",
        },
        To: [
          {
            Email: process.env.ADMIN_EMAIL_ADDRESS!,
            Name: "Forbliz Operations",
          },
        ],
        Subject: `[ACTION REQUIRED] New RFQ: ${data.serviceCategory} at ${data.location}`,
        HTMLPart: htmlContent,
      },
    ],
  });
}
