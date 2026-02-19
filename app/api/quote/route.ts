import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  sendQuoteAdminNotificationEmail,
  sendQuoteConfirmationEmail,
} from "@/lib/email"; // Ensure this matches your file structure

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Extract data from the Shadcn form body
    const {
      fullName,
      email,
      companyName,
      phone,
      serviceCategory,
      location,
      tonnage,
      startDate,
      requirements,
    } = body;

    // 2. Validation
    if (!fullName || !email || !serviceCategory || !requirements) {
      return NextResponse.json(
        { error: "Missing required technical parameters." },
        { status: 400 },
      );
    }

    // 3. Save to Database using the QuoteRequest model
    const rfqEntry = await prisma.quoteRequest.create({
      data: {
        fullName,
        email,
        companyName,
        phone,
        serviceCategory,
        location,
        tonnage: tonnage || "N/A",
        startDate,
        requirements,
      },
    });

    // 4. Dispatch Confirmation Email
    try {
      await sendQuoteConfirmationEmail({
        name: fullName,
        email: email,
        category: serviceCategory,
        location: location,
      });

      await sendQuoteAdminNotificationEmail({
        id: rfqEntry.id,
        fullName: rfqEntry.fullName,
        email: rfqEntry.email,
        companyName: rfqEntry.companyName || "N/A",
        phone: rfqEntry.phone,
        serviceCategory: rfqEntry.serviceCategory,
        location: rfqEntry.location,
        tonnage: rfqEntry.tonnage || "N/A",
        startDate: rfqEntry.startDate,
        requirements: rfqEntry.requirements,
        createdAt: rfqEntry.createdAt,
      });
    } catch (emailError) {
      // We log the error but still return success because the DB entry was saved
      console.error("RFQ_EMAIL_FAILURE:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project initiation data logged.",
        id: rfqEntry.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("FORBLIZ_RFQ_ERROR:", error);
    return NextResponse.json(
      { error: "Critical failure in project initiation logging." },
      { status: 500 },
    );
  }
}
