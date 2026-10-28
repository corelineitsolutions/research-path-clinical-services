'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Lock, Mail } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import Link from 'next/link';

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    workEmail: '',
    phoneNumber: '',
    enquiryType: 'Clinical Study Support',
    serviceOfInterest: defaultService || 'General Operational Inquiry',
    message: '',
    privacyConsent: false,
    hp_field: '', // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
    referenceId?: string;
    mailtoUrl?: string;
  }>({ type: 'idle' });

  const enquiryTypes = [
    'Clinical Study Support',
    'Investigator Site Feasibility',
    'Trial Coordination Services',
    'Data Management Workflow',
    'Regulatory Documentation Review',
    'General Partnership & Information',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatus({ type: 'error', message: 'Please enter your full name.' });
      return;
    }

    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid work email address.' });
      return;
    }

    if (!formData.organisation.trim()) {
      setStatus({ type: 'error', message: 'Please enter your organisation or institution name.' });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Please provide at least 10 characters in your message to help us understand your study scope.' });
      return;
    }

    if (!formData.privacyConsent) {
      setStatus({ type: 'error', message: 'Please confirm agreement with the privacy acknowledgement.' });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle' });

    // Generate fallback mailto URL in case of network obstacles
    const emailSubject = encodeURIComponent(`Clinical Enquiry: ${formData.fullName.trim()} - ${formData.organisation.trim()}`);
    const emailBody = encodeURIComponent(
`Dear ResearchPath Clinical Services Team,

I would like to submit the following clinical enquiry:

--------------------------------------------------
Full Name: ${formData.fullName.trim()}
Organisation / Institution: ${formData.organisation.trim()}
Work Email: ${formData.workEmail.trim()}
Phone Number: ${formData.phoneNumber.trim() || 'Not provided'}
Enquiry Type: ${formData.enquiryType}
Service of Interest: ${formData.serviceOfInterest}
--------------------------------------------------

Project Description / Study Requirements:
${formData.message.trim()}

--------------------------------------------------
Submitted via ResearchPath Website Portal
`
    );
    const computedMailto = `mailto:info@researchpath.in?subject=${emailSubject}&body=${emailBody}`;

    try {
      let isSuccess = false;
      let refId = '';
      let successMsg = '';
      let serverMailto = '';

      // 1. Primary: Submit through backend API route
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          isSuccess = true;
          refId = data.referenceId;
          successMsg = data.message;
          serverMailto = data.mailtoUrl;
        } else {
          console.warn('API returned non-200:', data);
        }
      } catch (apiErr) {
        console.warn('Backend API request error, proceeding to browser dispatch fallback:', apiErr);
      }

      // 2. Secondary: If backend API was unreachable (e.g. static host), dispatch directly to FormSubmit
      if (!isSuccess) {
        try {
          const fsRes = await fetch('https://formsubmit.co/ajax/info@researchpath.in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              name: formData.fullName.trim(),
              organisation: formData.organisation.trim(),
              email: formData.workEmail.trim(),
              phone: formData.phoneNumber.trim() || 'Not provided',
              enquiryType: formData.enquiryType,
              serviceOfInterest: formData.serviceOfInterest,
              message: formData.message.trim(),
              _subject: `New Clinical Enquiry: ${formData.fullName.trim()} - ${formData.organisation.trim()}`,
              _replyto: formData.workEmail.trim(),
              _template: 'table',
              _captcha: 'false',
            }),
          });

          if (fsRes.ok) {
            isSuccess = true;
            refId = `ENQ-${Date.now().toString().slice(-6)}`;
            successMsg = 'Thank you. Your enquiry has been automatically transmitted to info@researchpath.in. A ResearchPath representative will review your clinical requirements and reply promptly.';
          }
        } catch (fsErr) {
          console.warn('Direct FormSubmit error:', fsErr);
        }
      }

      if (isSuccess) {
        setStatus({
          type: 'success',
          message: successMsg || 'Thank you. Your enquiry has been automatically transmitted to info@researchpath.in. A representative will review your clinical requirements and reply promptly.',
          referenceId: refId || `ENQ-${Date.now().toString().slice(-6)}`,
          mailtoUrl: serverMailto || computedMailto,
        });

        // Reset form fields
        setFormData({
          fullName: '',
          organisation: '',
          workEmail: '',
          phoneNumber: '',
          enquiryType: 'Clinical Study Support',
          serviceOfInterest: defaultService || 'General Operational Inquiry',
          message: '',
          privacyConsent: false,
          hp_field: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Unable to reach the automatic email dispatch server due to a network restriction. Please click below to send your enquiry directly to info@researchpath.in.',
          mailtoUrl: computedMailto,
        });
      }
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err?.message || 'We encountered an unexpected issue. Please click below to send your enquiry directly to info@researchpath.in.',
        mailtoUrl: computedMailto,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-[#DCE5F0] p-6 sm:p-8 lg:p-10">
      <div className="border-b border-[#DCE5F0] pb-6 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1760B8] mb-1">
          <ShieldCheck className="w-4 h-4 text-[#2F80ED]" />
          <span>Professional Inquiry Portal</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#17365D]">
          Discuss Your Clinical Requirements
        </h3>
        <p className="text-sm text-[#64748B] mt-1.5 leading-relaxed">
          Provide your study parameters or operational needs below. Our clinical operations team will review your specifications and contact you directly.
        </p>
      </div>

      {/* Clinical Data Disclaimer Alert */}
      <div className="bg-[#EAF4FF]/70 border border-[#DCE5F0] rounded-xl p-3.5 mb-6 text-xs text-[#17365D] flex items-start gap-2.5">
        <Lock className="w-4 h-4 text-[#1760B8] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-[#1760B8]">Important Notice:</strong> This portal is dedicated strictly to organizational, sponsor, and investigator inquiries. Please do not submit patient-identifying health information (PHI) or personal medical records through this form.
        </p>
      </div>

      {status.type === 'success' ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-emerald-900">Enquiry Transmitted to info@researchpath.in</h4>
            <p className="text-sm text-emerald-800 mt-2 max-w-md mx-auto leading-relaxed">
              {status.message}
            </p>
            {status.referenceId && (
              <div className="mt-4 inline-block bg-white border border-emerald-300 px-4 py-2 rounded-lg text-xs font-mono font-medium text-emerald-800">
                Reference ID: <span className="font-bold">{status.referenceId}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-500">
            For urgent protocol coordination, you may also reach our Pune office directly at{' '}
            <a href="tel:+919146452014" className="text-[#1760B8] font-semibold underline">
              +91 91464 52014
            </a>{' '}
            or email{' '}
            <a href="mailto:info@researchpath.in" className="text-[#1760B8] font-semibold underline">
              info@researchpath.in
            </a>.
          </p>
          <button
            type="button"
            onClick={() => setStatus({ type: 'idle' })}
            className="btn-secondary !text-xs !py-2 !px-4 mt-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this field</label>
            <input
              type="text"
              id="hp_field"
              tabIndex={-1}
              value={formData.hp_field}
              onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
              autoComplete="off"
            />
          </div>

          {status.type === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-red-800 text-sm animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-red-900">Submission Notice</p>
                <p className="text-xs text-red-700 mt-0.5 leading-relaxed">{status.message}</p>
                {status.mailtoUrl && (
                  <div className="mt-3">
                    <a
                      href={status.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1760B8] hover:bg-[#134e96] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send directly to info@researchpath.in</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Dr. / Mr. / Ms. Full Name"
                className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] placeholder-slate-400 focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              />
            </div>

            {/* Organisation */}
            <div>
              <label htmlFor="organisation" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
                Organisation / Institution <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="organisation"
                required
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                placeholder="Sponsor / CRO / Hospital / Institute"
                className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] placeholder-slate-400 focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                required
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] placeholder-slate-400 focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] placeholder-slate-400 focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Enquiry Type */}
            <div>
              <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
                Enquiry Type
              </label>
              <select
                id="enquiryType"
                value={formData.enquiryType}
                onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] bg-white focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Service of Interest */}
            <div>
              <label htmlFor="serviceOfInterest" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
                Service of Interest
              </label>
              <select
                id="serviceOfInterest"
                value={formData.serviceOfInterest}
                onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] bg-white focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors"
              >
                <option value="General Operational Inquiry">General Operational Inquiry</option>
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#17365D] uppercase tracking-wider mb-1.5">
              Project Description / Study Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Outline your therapeutic area, anticipated study timelines, required services, or specific investigator site coordination needs..."
              className="w-full px-4 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#17212F] placeholder-slate-400 focus:border-[#1760B8] focus:ring-1 focus:ring-[#1760B8] transition-colors resize-y"
            ></textarea>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start gap-3 pt-1">
            <input
              type="checkbox"
              id="privacyConsent"
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-[#DCE5F0] text-[#1760B8] focus:ring-[#1760B8]"
            />
            <label htmlFor="privacyConsent" className="text-xs text-slate-600 leading-relaxed">
              I acknowledge that the information provided will be used by ResearchPath solely to assess and respond to this professional enquiry, in accordance with the{' '}
              <Link href="/privacy-policy" className="text-[#1760B8] underline hover:text-[#134e96]">
                Privacy Policy
              </Link>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full !py-3.5 flex items-center justify-center gap-2 text-sm shadow-md"
              id="submit-enquiry-button"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Clinical Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
