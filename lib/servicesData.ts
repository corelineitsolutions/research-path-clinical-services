export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  badge: string;
  overview: string;
  intendedFor: string[];
  scopeOfSupport: string[];
  workflow: { step: number; title: string; description: string }[];
  deliverables: string[];
  qualityConsiderations: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'clinical-trial-operations',
    title: 'Clinical Trial Operations Support',
    shortDescription: 'Operational support for trial planning, site initiation, progress tracking, and day-to-day study workflow management.',
    iconName: 'Activity',
    badge: 'Operations',
    overview: 'Clinical trial operations demand rigorous coordination across multiple stakeholders, timelines, and regulatory guidelines. ResearchPath delivers structured operational support designed to assist sponsors, trial managers, and study teams in executing clinical studies efficiently, transparently, and in alignment with approved study protocols.',
    intendedFor: [
      'Pharmaceutical and biotechnology sponsors conducting phase I-IV trials',
      'Contract Research Organisations (CROs) seeking regional operational coordination',
      'Principal Investigators and hospital-based clinical trial units',
      'Academic medical centres managing investigator-initiated clinical studies'
    ],
    scopeOfSupport: [
      'Study startup timeline development and milestone tracking',
      'Site initiation visit logistics and documentation collation',
      'Daily operational liaison between study sponsors, sites, and vendors',
      'Essential trial documentation tracking and maintenance',
      'Study progress dashboards and enrollment reporting',
      'Routine study close-out administrative and archiving support'
    ],
    workflow: [
      { step: 1, title: 'Operational Assessment', description: 'Review trial protocol requirements, key milestones, timelines, and logistical dependencies.' },
      { step: 2, title: 'Execution Planning', description: 'Establish study communication matrices, document trackers, and milestone checkpoints.' },
      { step: 3, title: 'Active Coordination', description: 'Facilitate ongoing operational coordination across participating investigator sites and study stakeholders.' },
      { step: 4, title: 'Review & Reconciliation', description: 'Conduct periodic progress reviews, document audit readiness, and generate operational summaries.' }
    ],
    deliverables: [
      'Operational workflow checklists and trial progress trackers',
      'Site coordination meeting summaries and action logs',
      'Study milestone status reports for sponsor review',
      'Standardized operational handoff dossiers for study closeout'
    ],
    qualityConsiderations: [
      'Strict adherence to the approved study protocol without unilateral deviations',
      'Structured verification of all operational documentation before filing',
      'Timely escalation protocols for study roadblocks or deviations',
      'Confidentiality maintenance of all sponsor and study-specific information'
    ],
    faqs: [
      {
        question: 'Does ResearchPath guarantee clinical trial timelines or outcomes?',
        answer: 'ResearchPath provides operational and administrative coordination to support study execution; we do not guarantee patient clinical outcomes, regulatory approvals, or recruitment milestones, as these depend on independent scientific and regulatory factors.'
      },
      {
        question: 'Can your team support multi-centre trials in India?',
        answer: 'Yes, our operational coordination services can assist teams conducting clinical studies across multiple institutional investigator sites in India, focusing on standard operating documentation and progress tracking.'
      },
      {
        question: 'How do you handle sponsor communications?',
        answer: 'We establish dedicated communication channels, structured weekly or bi-weekly operational check-ins, and documented minutes with explicit action item ownership.'
      }
    ]
  },
  {
    slug: 'clinical-research-coordination',
    title: 'Clinical Research Coordination',
    shortDescription: 'Site-level coordination support to assist investigator teams with study documentation, subject appointment workflows, and query resolution.',
    iconName: 'Users',
    badge: 'Coordination',
    overview: 'Investigator sites require dedicated administrative and operational support to handle protocol complexities while maintaining the highest standard of patient safety and documentation precision. ResearchPath provides qualified clinical research coordination support to streamline site activities and ensure smooth protocol compliance.',
    intendedFor: [
      'Principal Investigators and Co-Investigators at hospital sites',
      'Institutional Ethics Committees (IECs) requiring organized submission packages',
      'Hospital research departments and clinical trial offices',
      'Sponsor study monitors seeking organized site documentation during monitoring visits'
    ],
    scopeOfSupport: [
      'Subject appointment scheduling and protocol visit timeline management',
      'Informed consent documentation support under investigator oversight',
      'Assistance with Case Report Form (CRF / eCRF) completion and query tracking',
      'Investigational product accountability log maintenance under site supervision',
      'Coordination of laboratory sample handling and courier logistics documentation',
      'Organization of site regulatory binders and Trial Master File (TMF) documents'
    ],
    workflow: [
      { step: 1, title: 'Protocol Immersion', description: 'Comprehensive site-level review of the trial protocol, visit schedules, and inclusion/exclusion criteria.' },
      { step: 2, title: 'Site Setup & Tools', description: 'Preparation of patient visit workbooks, source document templates, and appointment schedules.' },
      { step: 3, title: 'Study Visit Facilitation', description: 'Coordinating participant visits, supporting documentation completeness, and tracking lab requisitions.' },
      { step: 4, title: 'Query Resolution & Audit Readiness', description: 'Promptly resolving sponsor queries and ensuring site documentation is continuously audit-ready.' }
    ],
    deliverables: [
      'Accurate and contemporaneous site source document records',
      'Updated eCRF completion tracking logs and resolved query summaries',
      'Organized Investigator Site Files (ISF) maintained to protocol standards',
      'Study visit completion and follow-up tracking reports'
    ],
    qualityConsiderations: [
      'All activities are performed strictly under the delegation and supervision of the Principal Investigator',
      'Protection of participant rights, privacy, and informed consent verification',
      'Immediate escalation of adverse events or anomalies directly to the investigator',
      'Contemporaneous, attributable, legible, original, and accurate (ALCOA+) documentation practices'
    ],
    faqs: [
      {
        question: 'Who oversees the clinical research coordinator?',
        answer: 'The Principal Investigator holds ultimate medical and regulatory responsibility for the study. Our coordinators operate strictly within the investigator delegation log.'
      },
      {
        question: 'Do coordinators interact directly with study patients?',
        answer: 'Coordinators assist with logistics, appointment scheduling, and procedural explanations under investigator supervision, but medical assessments and informed consent decisions are always led by the investigator.'
      }
    ]
  },
  {
    slug: 'patient-recruitment-support',
    title: 'Patient Recruitment Support',
    shortDescription: 'Ethical, protocol-compliant strategies to assist study sites in identifying, informing, and engaging prospective study participants.',
    iconName: 'UserCheck',
    badge: 'Recruitment',
    overview: 'Achieving target patient enrollment remains one of clinical research’s greatest challenges. ResearchPath provides ethical, evidence-guided recruitment support designed to enhance awareness, optimize pre-screening workflows, and support retention through clear, empathetic patient engagement materials.',
    intendedFor: [
      'Sponsors and CROs experiencing slow study recruitment rates',
      'Investigator sites seeking structured pre-screening and patient engagement workflows',
      'Patient advocacy groups seeking clear, transparent study information',
      'Rare disease and oncology studies with specialized participant criteria'
    ],
    scopeOfSupport: [
      'Development of ethics-approved patient awareness and information materials',
      'Design of structured pre-screening questionnaires based on eligibility criteria',
      'Site-level outreach workflow optimization for referring clinicians',
      'Digital awareness campaign design (subject to Ethics Committee review)',
      'Patient education materials to reduce study dropout and improve visit adherence',
      'Enrollment funnel tracking and barrier identification analysis'
    ],
    workflow: [
      { step: 1, title: 'Eligibility Analysis', description: 'Analyze inclusion/exclusion criteria to identify key enrollment bottlenecks and target demographics.' },
      { step: 2, title: 'Strategy & Materials', description: 'Draft patient-centric, culturally appropriate materials for Ethics Committee review and approval.' },
      { step: 3, title: 'Multi-Channel Outreach', description: 'Implement approved outreach channels and equip site coordinators with screening tracking tools.' },
      { step: 4, title: 'Retention Optimization', description: 'Monitor participant retention rates and provide supportive appointment reminder systems.' }
    ],
    deliverables: [
      'Ethics-ready patient information sheets and recruitment briefs',
      'Standardized pre-screening eligibility checklists',
      'Weekly recruitment funnel metrics and site enrollment conversion rates',
      'Participant retention resources and visit schedule reminders'
    ],
    qualityConsiderations: [
      'Zero use of coercive, misleading, or unapproved recruitment messaging',
      'Mandatory review and clearance by the designated Institutional Ethics Committee before deployment',
      'Full respect for patient autonomy, informed decision-making, and privacy',
      'Transparent documentation of all pre-screening referrals and outcomes'
    ],
    faqs: [
      {
        question: 'Can you guarantee that a study will hit 100% of its enrollment target?',
        answer: 'No clinical organization can ethically guarantee enrollment numbers, as participation is entirely voluntary and dependent on protocol criteria. We optimize the recruitment framework and reach to maximize potential success.'
      },
      {
        question: 'Are all recruitment materials submitted to the Ethics Committee?',
        answer: 'Yes, every patient-facing document, brochure, digital post, or advertisement must receive explicit Institutional Ethics Committee approval before being made available to the public.'
      }
    ]
  },
  {
    slug: 'clinical-data-management',
    title: 'Clinical Data Management Support',
    shortDescription: 'Assisting research teams with data entry verification, electronic CRF tracking, validation checks, and query reconciliation.',
    iconName: 'Database',
    badge: 'Data Management',
    overview: 'Clinical research conclusions depend upon reliable, verifiable, and pristine data. ResearchPath supports research teams with structured clinical data management workflows, data discrepancy tracking, and rigorous quality checks to safeguard data integrity from collection through database lock.',
    intendedFor: [
      'Clinical trial sponsors preparing for regulatory dossier submissions',
      'CROs needing flexible data validation and query management support',
      'Academic registries and prospective observational research studies',
      'Investigator teams managing electronic data capture (EDC) systems'
    ],
    scopeOfSupport: [
      'Electronic Case Report Form (eCRF) completion tracking and backlog clearing',
      'Manual and programmatic data discrepancy generation and resolution tracking',
      'Source Data Verification (SDV) preparation support for clinical monitors',
      'Data entry quality audits and error-rate trend analysis',
      'Assistance with medical coding support tracking (MedDRA, WHO-DD conventions)',
      'Pre-database lock checklist execution and data completeness verification'
    ],
    workflow: [
      { step: 1, title: 'Data Management Plan Review', description: 'Review the protocol data management plan (DMP), edit checks, and validation rules.' },
      { step: 2, title: 'Ongoing Data Entry Support', description: 'Facilitate timely transcription of source documents into the validated EDC system.' },
      { step: 3, title: 'Discrepancy & Query Management', description: 'Identify data discrepancies, generate precise queries, and coordinate site clarification.' },
      { step: 4, title: 'Data Cleaning & Lock Readiness', description: 'Perform final data reconciliations, resolve outstanding queries, and prepare for formal lock.' }
    ],
    deliverables: [
      'EDC entry completeness and timeliness tracking reports',
      'Data query aging reports and resolution velocity metrics',
      'Data discrepancy log with audit trail references',
      'Pre-lock data completeness reconciliation certificate'
    ],
    qualityConsiderations: [
      'Strict adherence to ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate)',
      'Traceable electronic audit trails for all data entry and correction activities',
      'Protection of personal health information through strict de-identification standards',
      'No modification of site clinical data without verified investigator sign-off'
    ],
    faqs: [
      {
        question: 'Which Electronic Data Capture (EDC) systems do you work with?',
        answer: 'Our team is trained on industry-standard EDC platforms including Medidata Rave, Oracle InForm, REDCap, and regional web-based trial portals.'
      },
      {
        question: 'Do you provide blind data review services?',
        answer: 'We assist teams with the operational preparation of data listings and discrepancy trackers required for blinded review sessions prior to study unblinding.'
      }
    ]
  },
  {
    slug: 'site-feasibility',
    title: 'Site Feasibility & Selection Support',
    shortDescription: 'Objective evaluation of clinical trial investigator sites, assessing patient population, infrastructure, and investigative capacity.',
    iconName: 'Compass',
    badge: 'Feasibility',
    overview: 'Selecting the right investigative sites is fundamental to trial safety, recruitment velocity, and protocol compliance. ResearchPath conducts thorough site feasibility evaluations across India, assessing patient demographics, departmental infrastructure, equipment calibration, and investigator bandwidth.',
    intendedFor: [
      'Sponsors planning new clinical studies in India',
      'CROs expanding their qualified site networks across tier 1 and tier 2 medical hubs',
      'Investigator institutions seeking third-party assessment of their trial readiness',
      'Global biotech firms assessing country-specific investigative capabilities'
    ],
    scopeOfSupport: [
      'Customized site feasibility questionnaire design tailored to protocol parameters',
      'Site identification across diverse therapeutic areas and geographic clusters in India',
      'Infrastructure verification (pharmacy storage, -80°C freezers, emergency facilities)',
      'Investigator bandwidth assessment and competitive trial workload analysis',
      'Historical recruitment rate evaluation in relevant therapeutic areas',
      'Consolidated site feasibility scoring and recommendation reports'
    ],
    workflow: [
      { step: 1, title: 'Criteria Definition', description: 'Define must-have vs nice-to-have site requirements based on protocol complexities.' },
      { step: 2, title: 'Site Outreach & Screening', description: 'Distribute structured questionnaires to shortlisted investigators and clinical departments.' },
      { step: 3, title: 'Verification & Qualification', description: 'Evaluate site facilities, Ethics Committee meeting frequencies, and staff qualifications.' },
      { step: 4, title: 'Feasibility Dossier', description: 'Deliver a comparative site ranking report highlighting operational strengths and potential risks.' }
    ],
    deliverables: [
      'Comprehensive Site Feasibility Reports (SFR) with objective scoring criteria',
      'Institutional Ethics Committee roster and submission schedule summaries',
      'Site equipment and cold-chain capacity verification records',
      'Actionable site selection recommendations for trial sponsor review'
    ],
    qualityConsiderations: [
      'Impartial, evidence-based evaluations free from institutional bias',
      'Verification of documented investigator qualifications and current trial commitments',
      'Validation of claimed patient pool numbers through hospital registry sampling',
      'Confidentiality agreements executed prior to exchanging proprietary protocol synopses'
    ],
    faqs: [
      {
        question: 'How long does a typical site feasibility assessment take?',
        answer: 'A standard feasibility evaluation covering 5-15 potential sites in India typically takes between 2 to 4 weeks depending on protocol complexity and investigator responsiveness.'
      },
      {
        question: 'Do you conduct on-site qualification visits?',
        answer: 'We support both desk-based initial assessments and physical site inspection coordination depending on sponsor project requirements.'
      }
    ]
  },
  {
    slug: 'regulatory-documentation',
    title: 'Regulatory Documentation Support',
    shortDescription: 'Support in preparing, organizing, and reviewing clinical study documentation for Ethics Committees and regulatory submissions.',
    iconName: 'FileText',
    badge: 'Regulatory Support',
    overview: 'Navigating clinical regulatory pathways requires meticulous attention to documentation completeness, version control, and formatting standards. ResearchPath supports clinical teams with the drafting, compilation, and administrative review of essential regulatory dossiers for institutional ethics committees and Indian regulatory authorities.',
    intendedFor: [
      'Sponsors preparing Investigational New Drug (IND) or clinical trial applications',
      'Principal Investigators submitting proposals to Institutional Ethics Committees',
      'Biotech startups seeking structured documentation support for trial protocols',
      'Academic researchers seeking assistance with regulatory dossier organization'
    ],
    scopeOfSupport: [
      'Compilation of Institutional Ethics Committee (IEC) submission dossiers',
      'Informed Consent Form (ICF) formatting and local language translation coordination',
      'Subject Information Sheet (SIS) readability review and standardization',
      'Trial Master File (TMF) and Investigator Site File (ISF) documentation indexation',
      'Preparation of regulatory query response dossiers and formal amendment filings',
      'Annual safety report and trial status update documentation collation'
    ],
    workflow: [
      { step: 1, title: 'Document Gap Analysis', description: 'Audit current documentation against relevant submission checklists and local guidelines.' },
      { step: 2, title: 'Drafting & Formatting', description: 'Format and assemble required documents, verifying version numbers, dates, and cross-references.' },
      { step: 3, title: 'Multi-Tier Review', description: 'Conduct thorough administrative and typographical checks to ensure absolute dossier coherence.' },
      { step: 4, title: 'Dossier Collation & Tracking', description: 'Deliver clean, fully indexed submission binders and maintain submission tracking logs.' }
    ],
    deliverables: [
      'Fully indexed Ethics Committee submission packages',
      'Informed Consent Document (ICD) packages with certified vernacular translations',
      'Regulatory correspondence trackers with clear milestone dates',
      'Audit-ready regulatory documentation archive files'
    ],
    qualityConsiderations: [
      'Zero claims of regulatory approval guarantees; all submissions are subject to authority review',
      'Strict version control and traceable document history across all draft iterations',
      'Adherence to New Drugs and Clinical Trials Rules (NDCT) guidelines in India',
      'Complete confidentiality and secure handling of intellectual property and study synopses'
    ],
    faqs: [
      {
        question: 'Does ResearchPath act as the legal applicant for regulatory filings?',
        answer: 'ResearchPath provides documentation preparation, formatting, and administrative support. The official regulatory applicant remains the licensed trial sponsor or the designated Principal Investigator.'
      },
      {
        question: 'Do you guarantee clearance from the Ethics Committee?',
        answer: 'No organization can guarantee ethics clearance. Institutional Ethics Committees act independently to protect patient welfare and make autonomous decisions on all protocols.'
      }
    ]
  }
];
