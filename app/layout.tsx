import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { companyInfo } from '@/lib/companyInfo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://researchpath.in'),
  title: {
    default: `${companyInfo.fullName} | Clinical Research Services Pune`,
    template: `%s | ${companyInfo.name} Clinical Services`,
  },
  description: 'ResearchPath delivers dependable clinical trial operations support, clinical research coordination, site feasibility, and data management services in Pune, Maharashtra, India.',
  keywords: [
    'clinical services Pune',
    'clinical research services India',
    'clinical trial operations support',
    'clinical research coordination',
    'site feasibility Pune',
    'clinical data management support',
    'patient recruitment support India',
    'regulatory documentation support',
    'ResearchPath',
    'ResearchPath clinical services'
  ],
  authors: [{ name: 'ResearchPath Clinical Services' }],
  creator: 'ResearchPath',
  publisher: 'ResearchPath',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: `${companyInfo.fullName} | Clinical Services Pune`,
    description: 'Supporting better clinical research through quality-driven services, operational rigor, and collaborative partnership.',
    url: 'https://researchpath.in',
    siteName: 'ResearchPath Clinical Services',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'ResearchPath Clinical Services — Pune, India',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ResearchPath',
    alternateName: 'ResearchPath Clinical Services',
    url: 'https://researchpath.in',
    logo: 'https://researchpath.in/images/logo-horizontal.png',
    image: 'https://researchpath.in/images/hero-bg.jpg',
    description: 'Professional clinical trial operations support, clinical research coordination, and data management services in Pune, India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '406, B Wing, City Vista',
      addressLocality: 'Kharadi',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
      addressLocalityName: 'Pune'
    },
    telephone: companyInfo.phone,
    email: companyInfo.email,
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:30',
    priceRange: '$$',
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-[#17212F] antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
