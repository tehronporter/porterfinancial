/**
 * Structured site copy, transcribed from
 * docs/Porter Finance & Operations Overview.pdf.
 * Keeping content here keeps page JSX clean and easy to update.
 */

export type IconName =
  | "clarity"
  | "reporting"
  | "decisions"
  | "audit"
  | "operations"
  | "controller"
  | "cleanup"
  | "budgeting"
  | "compliance"
  | "discovery"
  | "assessment"
  | "implementation"
  | "partnership";

/* ---------------------------------------------------------------- Target clients */

export const TARGET_CLIENTS = [
  {
    title: "Nonprofits",
    description:
      "Organizations seeking stronger financial oversight, grant compliance, budgeting, and reporting.",
  },
  {
    title: "Associations",
    description:
      "Membership-based organizations needing financial leadership, operational efficiency, and strategic planning support.",
  },
  {
    title: "Educational Organizations",
    description:
      "Schools, educational nonprofits, workforce development organizations, and education-focused associations.",
  },
  {
    title: "Mission-Driven Businesses",
    description:
      "Purpose-driven organizations preparing for growth, operational improvements, or increased financial complexity.",
  },
] as const;

/* ---------------------------------------------------------------- Trust / experience */

export const LEADERSHIP_ORGS = [
  "Peace Corps",
  "Oregon Education Association",
  "REACH Community Development",
  "National School Boards Association",
] as const;

export const CORE_EXPERTISE = [
  "Nonprofit Accounting",
  "Financial Reporting",
  "Grants Management",
  "Budget Development",
  "Forecasting",
  "Audit Readiness",
  "Compliance Oversight",
  "Internal Controls",
  "Financial Systems",
  "Operational Improvement",
  "Board Reporting",
] as const;

/* ---------------------------------------------------------------- Results / outcomes */

export const RESULTS: { title: string; description: string; icon: IconName }[] =
  [
    {
      title: "Financial Clarity",
      description:
        "Understand your organization's financial position with confidence.",
      icon: "clarity",
    },
    {
      title: "Stronger Reporting",
      description:
        "Provide leadership teams and boards with meaningful financial insight.",
      icon: "reporting",
    },
    {
      title: "Better Strategic Decisions",
      description:
        "Use budgeting and forecasting to support organizational growth.",
      icon: "decisions",
    },
    {
      title: "Audit Readiness",
      description:
        "Prepare for audits, grant reviews, and compliance requirements with confidence.",
      icon: "audit",
    },
    {
      title: "Operational Excellence",
      description:
        "Improve processes, accountability, and organizational efficiency.",
      icon: "operations",
    },
  ];

/* ---------------------------------------------------------------- Services */

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  description: string;
  keyAreas: string[];
  idealFor: string;
};

export const SERVICES: Service[] = [
  {
    slug: "fractional-controller",
    title: "Fractional Controller Services",
    icon: "controller",
    description:
      "Executive-level financial leadership and oversight for organizations that need ongoing strategic support.",
    keyAreas: [
      "Financial Oversight",
      "Reporting Review",
      "Budget Analysis",
      "Cash Flow Monitoring",
      "Internal Controls",
      "Leadership Reporting",
      "Process Improvement",
    ],
    idealFor:
      "Organizations needing ongoing strategic finance leadership without a full-time hire.",
  },
  {
    slug: "financial-cleanup",
    title: "Financial Cleanup & Reporting Optimization",
    icon: "cleanup",
    description:
      "Improve reporting accuracy, strengthen controls, and create reliable financial systems.",
    keyAreas: [
      "Financial Review",
      "Reconciliation Cleanup",
      "Reporting Improvements",
      "Process Documentation",
      "Control Recommendations",
    ],
    idealFor:
      "Organizations with inconsistent reporting that need cleaner, more reliable numbers.",
  },
  {
    slug: "budgeting-forecasting",
    title: "Budgeting & Forecasting",
    icon: "budgeting",
    description:
      "Build financial plans that support confident decision-making and sustainable growth.",
    keyAreas: [
      "Budget Development",
      "Forecast Models",
      "Cash Planning",
      "Strategic Planning Support",
      "Leadership Presentations",
    ],
    idealFor:
      "Organizations planning growth, new programs, or initiatives, or preparing for board review.",
  },
  {
    slug: "audit-readiness",
    title: "Audit Readiness & Compliance Review",
    icon: "compliance",
    description:
      "Reduce risk and prepare for successful audits and compliance reviews.",
    keyAreas: [
      "Compliance Assessment",
      "Internal Controls Review",
      "Documentation Review",
      "Audit Preparation",
      "Risk Mitigation Planning",
    ],
    idealFor:
      "Organizations preparing for audits, grant reviews, or compliance reviews.",
  },
];

/* ---------------------------------------------------------------- Why choose us */

export const WHY_CHOOSE_US = [
  "15+ Years of Leadership Experience",
  "Controller-Level Expertise",
  "Nonprofit & Association Specialization",
  "Grants & Compliance Knowledge",
  "Audit Readiness Experience",
  "Board Reporting Support",
  "Strategic Planning Guidance",
  "Finance & Operations Perspective",
] as const;

/* ---------------------------------------------------------------- Approach */

export const APPROACH: {
  step: string;
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understand the organization's goals, challenges, and priorities.",
    icon: "discovery",
  },
  {
    step: "02",
    title: "Assessment",
    description:
      "Evaluate opportunities for improvement and identify key recommendations.",
    icon: "assessment",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Support financial improvements, reporting enhancements, budgeting initiatives, and operational efficiencies.",
    icon: "implementation",
  },
  {
    step: "04",
    title: "Partnership",
    description:
      "Provide ongoing guidance that strengthens long-term organizational success.",
    icon: "partnership",
  },
];

/* ---------------------------------------------------------------- About */

export const ABOUT_BIO = [
  "Monique Porter is a finance and operations executive with more than fifteen years of experience helping nonprofits, associations, educational organizations, and community development organizations strengthen financial management and operational performance.",
  "Throughout her career, she has led financial oversight, budgeting, compliance initiatives, operational improvements, reporting systems, and strategic planning efforts for organizations facing growth, audit requirements, grant compliance challenges, and complex financial environments.",
  "Monique is recognized for combining strategic insight with practical execution, helping organizations build stronger financial foundations while improving operational effectiveness.",
] as const;

export const SPECIALIZATIONS = [
  "Nonprofit Finance",
  "Grants Management",
  "Financial Reporting",
  "Budget Development",
  "Forecasting",
  "Compliance Management",
  "Internal Controls",
  "Audit Preparation",
  "Financial Systems",
  "Operations Management",
  "Strategic Planning",
] as const;

/* ---------------------------------------------------------------- Contact form options */

export const ORGANIZATION_TYPES = [
  "Nonprofit",
  "Association",
  "Educational Organization",
  "Mission-Driven Business",
  "Other",
] as const;

export const TEAM_SIZES = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
] as const;
