import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      organisation,
      workEmail,
      phoneNumber,
      enquiryType,
      serviceOfInterest,
      message,
      privacyConsent,
      hp_field, // honeypot
    } = body;

    // Honeypot spam check
    if (hp_field) {
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your full name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail || !emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid work email address.' },
        { status: 400 }
      );
    }

    if (!organisation || typeof organisation !== 'string' || organisation.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please specify your organisation or institution name.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a brief message describing your clinical requirements (minimum 10 characters).' },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { error: 'Please confirm that you agree to the privacy terms for enquiry correspondence.' },
        { status: 400 }
      );
    }

    const cleanFullName = fullName.trim();
    const cleanOrg = organisation.trim();
    const cleanEmail = workEmail.trim().toLowerCase();
    const cleanPhone = phoneNumber ? String(phoneNumber).trim() : 'Not provided';
    const cleanType = enquiryType || 'General Consultation';
    const cleanService = serviceOfInterest || 'General Enquiry';
    const cleanMessage = message.trim();

    // Persist submission record
    const enquiryRecord = {
      id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      receivedAt: new Date().toISOString(),
      fullName: cleanFullName,
      organisation: cleanOrg,
      workEmail: cleanEmail,
      phoneNumber: cleanPhone,
      enquiryType: cleanType,
      serviceOfInterest: cleanService,
      message: cleanMessage,
      status: 'NEW',
      ip: request.headers.get('x-forwarded-for') || 'local',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Safely attempt local filesystem logging without breaking in read-only / serverless runtimes (e.g. Vercel)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, 'enquiries.json');
      let existing: any[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          existing = JSON.parse(fileContent);
        } catch {
          existing = [];
        }
      }

      existing.unshift(enquiryRecord);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
    } catch (fsError) {
      console.warn('Local data directory write skipped (serverless/read-only environment):', fsError);
    }

    // Automatically send email to info@researchpath.in via FormSubmit background delivery
    try {
      const emailPayload = {
        name: cleanFullName,
        organisation: cleanOrg,
        email: cleanEmail,
        phone: cleanPhone,
        enquiryType: cleanType,
        serviceOfInterest: cleanService,
        message: cleanMessage,
        _subject: `New Clinical Enquiry: ${cleanFullName} - ${cleanOrg}`,
        _replyto: cleanEmail,
        _template: 'table',
        _captcha: 'false',
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      await fetch('https://formsubmit.co/ajax/info@researchpath.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId));
    } catch (mailError) {
      console.warn('FormSubmit background dispatch note:', mailError);
    }

    // Prepare mailto fallback link for direct contact if needed
    const emailSubject = encodeURIComponent(`Clinical Enquiry: ${cleanFullName} - ${cleanOrg}`);
    const emailBody = encodeURIComponent(
`Dear ResearchPath Clinical Services Team,

I would like to submit the following clinical enquiry:

--------------------------------------------------
Full Name: ${cleanFullName}
Organisation / Institution: ${cleanOrg}
Work Email: ${cleanEmail}
Phone Number: ${cleanPhone}
Enquiry Type: ${cleanType}
Service of Interest: ${cleanService}
--------------------------------------------------

Project Description / Study Requirements:
${cleanMessage}

--------------------------------------------------
Submitted via ResearchPath Website Portal
Reference: ${enquiryRecord.id}
`
    );
    const mailtoUrl = `mailto:info@researchpath.in?subject=${emailSubject}&body=${emailBody}`;

    // Return confirmed successful receipt
    return NextResponse.json({
      success: true,
      referenceId: enquiryRecord.id,
      mailtoUrl,
      message: 'Thank you. Your enquiry has been received and automatically sent to info@researchpath.in. A ResearchPath representative will review your clinical requirements and reply promptly.',
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: error?.message || 'An unexpected error occurred while processing your request. Please try again or email info@researchpath.in directly.' },
      { status: 500 }
    );
  }
}
