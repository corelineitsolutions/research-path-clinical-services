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

    // Persist submission to secure local data storage
    const enquiryRecord = {
      id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      organisation: organisation.trim(),
      workEmail: workEmail.trim().toLowerCase(),
      phoneNumber: phoneNumber ? String(phoneNumber).trim() : 'Not provided',
      enquiryType: enquiryType || 'General Consultation',
      serviceOfInterest: serviceOfInterest || 'General Enquiry',
      message: message.trim(),
      status: 'NEW',
      ip: request.headers.get('x-forwarded-for') || 'local',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

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
      } catch (e) {
        existing = [];
      }
    }

    existing.unshift(enquiryRecord);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');

    // Return confirmed successful receipt
    return NextResponse.json({
      success: true,
      referenceId: enquiryRecord.id,
      message: 'Thank you. Your enquiry has been received and securely logged. A ResearchPath representative will review your clinical requirements and reply promptly.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected server error occurred while processing your request. Please email info@researchpath.in directly.' },
      { status: 500 }
    );
  }
}
