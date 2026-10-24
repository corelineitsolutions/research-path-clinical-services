# ResearchPath — Clinical Services Website

An independent, production-ready website built for **ResearchPath — Clinical Services**, based in Kharadi, Pune, Maharashtra, India.

---

## 🌟 Brand & Overview

- **Company Name**: ResearchPath
- **Descriptor**: Clinical Services
- **Location**: 406, B Wing, City Vista, Kharadi, Pune, Maharashtra, India
- **Direct Contact**: +91 91464 52014
- **Email**: info@researchpath.in
- **Identity**: Dedicated exclusively to clinical research services, trial operations support, site coordination, data management, and feasibility evaluations.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom clinical brand tokens
- **Icons**: Lucide React
- **Typography**: Inter & Plus Jakarta Sans (Google Fonts)
- **Deployment Ready**: Optimized for Vercel, Node.js server, or containerized environments

---

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts       # Secure contact form API & persistence
│   ├── about/page.tsx             # Corporate overview, mission & vision
│   ├── contact/page.tsx           # Contact details, office hub & inquiry form
│   ├── cookie-policy/page.tsx     # Cookie policy & user consent details
│   ├── globals.css                # Global styles, variables & accessibility
│   ├── insights/                  # Blog listing & dynamic article pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── layout.tsx                 # Root layout, JSON-LD schema & metadata
│   ├── not-found.tsx              # Custom 404 error page
│   ├── page.tsx                   # Homepage with all required sections
│   ├── privacy-policy/page.tsx    # Privacy policy & data protection
│   ├── quality-compliance/        # ALCOA+ & quality oversight frameworks
│   ├── robots.ts                  # Search crawler directives
│   ├── services/                  # Services directory & dynamic detail pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── sitemap.ts                 # Dynamic XML sitemap generator
│   └── terms-of-use/page.tsx      # Terms of use & legal agreement
├── components/
│   ├── ContactForm.tsx            # Interactive form with validation & honeypot
│   ├── CookieBanner.tsx           # Responsive cookie consent banner
│   ├── Footer.tsx                 # Deep navy branded footer
│   ├── Header.tsx                 # Responsive navigation & mobile drawer
│   └── HeroSection.tsx            # Proportional hero banner with contrast panel
├── lib/
│   ├── companyInfo.ts             # Centralized corporate constants
│   ├── insightsData.ts            # Original clinical research articles
│   └── servicesData.ts            # Verified clinical service scopes & workflows
├── public/
│   └── images/                    # Processed transparent logos & hero assets
├── data/
│   └── enquiries.json             # Persistent local inquiry storage
└── tailwind.config.js             # Brand color tokens & custom utility rules
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🛡️ License

Copyright &copy; 2026 ResearchPath Clinical Services. All rights reserved.
