// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import {
//   sendContactConfirmationEmail,
//   sendContactAdminNotificationEmail,
// } from "@/lib/email"; // Adjust this path to where your email functions live

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       message,
//       subject = "general", // Matches the keys in our subjectLabels
//     } = body;

//     // 1. Basic Validation
//     if (!firstName || !email || !message || !phone) {
//       return NextResponse.json(
//         { error: "Please provide all required business contact details." },
//         { status: 400 },
//       );
//     }

//     // 2. Save to database
//     const contactEntry = await prisma.contact.create({
//       data: {
//         firstName,
//         lastName,
//         email,
//         phone,
//         subject,
//         message,
//       },
//     });

//     // 3. Send Emails
//     // We wrap these in a try/catch or handle them so that if an email fails,
//     // the user still knows their database entry was successful.
//     try {
//       // Send confirmation to the User
//       await sendContactConfirmationEmail({
//         name: `${firstName} ${lastName}`,
//         email: email,
//         subject: subject,
//         message: message,
//       });

//       // Send notification to the Admin
//       await sendContactAdminNotificationEmail({
//         id: contactEntry.id,
//         firstName,
//         lastName,
//         email,
//         phone,
//         subject,
//         message,
//         createdAt: contactEntry.createdAt,
//       });
//     } catch (emailError) {
//       // Log email error but don't fail the whole request
//       console.error("EMAIL_DISPATCH_FAILURE:", emailError);
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         message:
//           "Your inquiry has been logged. Our team will contact you shortly.",
//         id: contactEntry.id,
//       },
//       { status: 201 },
//     );
//   } catch (error) {
//     console.error("AIRMOB_CONTACT_ERROR:", error);
//     return NextResponse.json(
//       {
//         error:
//           "Operational error. Please try calling our headquarters directly.",
//       },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";
import {
  sendContactConfirmationEmail,
  sendContactAdminNotificationEmail,
} from "@/lib/email";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, subject } = body;

    if (!firstName || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Required fields missing." },
        { status: 400 },
      );
    }

    const contactEntry = await prisma.contact.create({
      data: { firstName, lastName, email, phone, message, subject },
    });

    try {
      await sendContactConfirmationEmail({
        name: `${firstName} ${lastName}`,
        email,
        subject,
        message,
      });

      // Send notification to the Admin
      await sendContactAdminNotificationEmail({
        id: contactEntry.id,
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        createdAt: contactEntry.createdAt,
      });
    } catch (e) {
      console.error("FORBLIZ_MAIL_FAIL:", e);
    }

    return NextResponse.json(
      { success: true, id: contactEntry.id },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Forbliz Command Center Error. Please call us." },
      { status: 500 },
    );
  }
}
