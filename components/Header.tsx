'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight, FileText, Download } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import { companyInfo } from '@/lib/companyInfo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [instituteDropdownOpen, setInstituteDropdownOpen] = useState(false);
  const [mobileInstituteOpen, setMobileInstituteOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const instituteDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
      if (instituteDropdownRef.current && !instituteDropdownRef.current.contains(target)) {
        setInstituteDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu & dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setInstituteDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      items: servicesData.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
    },
    {
      name: 'Institute',
      isInstitute: true,
    },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-[#DCE5F0] py-2.5' : 'bg-white border-[#DCE5F0] py-3.5'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1760B8] rounded-md"
            aria-label="ResearchPath — Clinical Services Home"
          >
            <div className="relative h-12 w-auto max-w-[280px] sm:max-w-[340px] flex items-center">
              <Image
                src="/images/logo-horizontal.png"
                alt="ResearchPath — Clinical Services"
                width={360}
                height={55}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={servicesDropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href!}
                      className={`inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.href!)
                          ? 'text-[#1760B8] bg-[#EAF4FF] font-semibold'
                          : 'text-[#17212F] hover:text-[#1760B8] hover:bg-slate-50'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#1760B8]' : 'text-slate-400'}`} />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-card border border-[#DCE5F0] py-2 px-1 divide-y divide-slate-100 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-1.5 text-xs font-semibold tracking-wider text-[#64748B] uppercase">
                            Clinical Services Directory
                          </div>
                          <div className="pt-1">
                            {link.items?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                                  pathname === item.href
                                    ? 'bg-[#EAF4FF] text-[#1760B8] font-semibold'
                                    : 'text-[#17212F] hover:bg-[#EAF4FF]/60 hover:text-[#1760B8]'
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          <div className="pt-1.5 px-3 pb-1">
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1760B8] hover:text-[#134e96]"
                            >
                              <span>View all clinical services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.isInstitute) {
                return (
                  <div
                    key={link.name}
                    ref={instituteDropdownRef}
                    className="relative"
                    onMouseEnter={() => setInstituteDropdownOpen(true)}
                    onMouseLeave={() => setInstituteDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setInstituteDropdownOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                        instituteDropdownOpen
                          ? 'text-[#1760B8] bg-[#EAF4FF] font-semibold'
                          : 'text-[#17212F] hover:text-[#1760B8] hover:bg-slate-50'
                      }`}
                      aria-expanded={instituteDropdownOpen}
                      aria-haspopup="true"
                      aria-label="Institute dropdown menu"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          instituteDropdownOpen ? 'rotate-180 text-[#1760B8]' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Institute Dropdown Menu */}
                    {instituteDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-[#DCE5F0] p-1.5 divide-y divide-slate-100 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#64748B] uppercase">
                            Institute Documentation
                          </div>
                          <div className="pt-1 space-y-1">
                            <a
                              href="/docs/ResearchPath-Institute-About.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setInstituteDropdownOpen(false)}
                              className="flex items-start gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors text-[#17212F] hover:bg-[#EAF4FF] hover:text-[#1760B8] group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#EAF4FF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1760B8] transition-colors">
                                <FileText className="w-4 h-4 text-[#1760B8] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm text-[#17212F] group-hover:text-[#1760B8]">
                                  About Us
                                </div>
                                <div className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                                  Open Introduction Slide PPT (PDF)
                                </div>
                              </div>
                            </a>

                            <a
                              href="/docs/ResearchPath-Brochure.pdf"
                              download="ResearchPath-Brochure.pdf"
                              onClick={() => setInstituteDropdownOpen(false)}
                              className="flex items-start gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors text-[#17212F] hover:bg-[#EAF4FF] hover:text-[#1760B8] group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#EAF4FF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1760B8] transition-colors">
                                <Download className="w-4 h-4 text-[#1760B8] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm text-[#17212F] group-hover:text-[#1760B8]">
                                  Download Brochure
                                </div>
                                <div className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                                  Save official brochure to your device
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={`inline-flex items-center px-3 xl:px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href!)
                      ? 'text-[#1760B8] bg-[#EAF4FF] font-semibold'
                      : 'text-[#17212F] hover:text-[#1760B8] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary text-sm !py-2.5 !px-5 shadow-sm"
              id="header-cta-button"
            >
              Discuss Your Requirements
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="btn-primary text-xs !py-2 !px-3"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17212F] hover:bg-slate-100 hover:text-[#1760B8] focus:outline-none focus:ring-2 focus:ring-[#1760B8]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DCE5F0] bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                pathname === '/' ? 'bg-[#EAF4FF] text-[#1760B8] font-semibold' : 'text-[#17212F] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                pathname === '/about' ? 'bg-[#EAF4FF] text-[#1760B8] font-semibold' : 'text-[#17212F] hover:bg-slate-50'
              }`}
            >
              About ResearchPath
            </Link>
            
            {/* Services Accordion */}
            <div className="pt-1 pb-1">
              <div className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#17365D]">
                <span>Services</span>
                <Link href="/services" className="text-xs text-[#1760B8] underline">
                  All Services
                </Link>
              </div>
              <div className="ml-3 pl-3 border-l-2 border-[#DCE5F0] space-y-1 my-1">
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={`block px-2 py-1.5 text-xs rounded ${
                      pathname === `/services/${s.slug}` ? 'bg-[#EAF4FF] text-[#1760B8] font-semibold' : 'text-slate-600 hover:text-[#1760B8]'
                    }`}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Institute Accordion */}
            <div className="pt-1 pb-1">
              <button
                type="button"
                onClick={() => setMobileInstituteOpen(!mobileInstituteOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#17365D] hover:bg-slate-50 rounded-lg"
              >
                <span>Institute</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileInstituteOpen ? 'rotate-180 text-[#1760B8]' : ''}`} />
              </button>
              {mobileInstituteOpen && (
                <div className="ml-3 pl-3 border-l-2 border-[#DCE5F0] space-y-1 my-1">
                  <a
                    href="/docs/ResearchPath-Institute-About.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-2.5 py-2 text-xs rounded-lg text-[#17212F] hover:bg-[#EAF4FF] hover:text-[#1760B8]"
                  >
                    <div>
                      <div className="font-semibold text-xs">About Us</div>
                      <div className="text-[10px] text-slate-500">View Introduction Slide PPT (PDF)</div>
                    </div>
                    <FileText className="w-3.5 h-3.5 text-[#1760B8] shrink-0" />
                  </a>
                  <a
                    href="/docs/ResearchPath-Brochure.pdf"
                    download="ResearchPath-Brochure.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-2.5 py-2 text-xs rounded-lg text-[#17212F] hover:bg-[#EAF4FF] hover:text-[#1760B8]"
                  >
                    <div>
                      <div className="font-semibold text-xs">Download Brochure</div>
                      <div className="text-[10px] text-slate-500">Save PDF to device</div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-[#1760B8] shrink-0" />
                  </a>
                </div>
              )}
            </div>
            <Link
              href="/insights"
              className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                pathname.startsWith('/insights') ? 'bg-[#EAF4FF] text-[#1760B8] font-semibold' : 'text-[#17212F] hover:bg-slate-50'
              }`}
            >
              Insights & Articles
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                pathname === '/contact' ? 'bg-[#EAF4FF] text-[#1760B8] font-semibold' : 'text-[#17212F] hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                className="btn-primary w-full text-center text-sm"
              >
                Discuss Your Requirements
              </Link>
              <div className="text-center text-xs text-slate-500 pt-1">
                Kharadi, Pune • <a href={`tel:${companyInfo.phoneTel}`} className="text-[#1760B8] font-medium">{companyInfo.phoneDisplay}</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
