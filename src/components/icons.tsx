import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const WorkflowIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="7" height="6" rx="1" />
    <rect x="14" y="14" width="7" height="6" rx="1" />
    <path d="M10 7h4a2 2 0 0 1 2 2v5" />
    <path d="M14 12l2 2 2-2" />
  </svg>
);

export const DocumentIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M15 3v5h5" />
    <path d="M9 12h7M9 16h5" />
  </svg>
);

export const PenIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 19l7-7a2.1 2.1 0 0 0-3-3l-7 7v3h3z" />
    <path d="M15 9l3 3" />
    <path d="M5 21h14" />
  </svg>
);

export const BotIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="8" width="14" height="10" rx="2" />
    <path d="M12 8V4M9 4h6" />
    <circle cx="9.5" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="13" r="1" fill="currentColor" stroke="none" />
    <path d="M9 16.5h6" />
  </svg>
);

export const FaceIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
    <path d="M9 9.5v1M15 9.5v1" />
    <path d="M9.5 14.5a3.5 3.5 0 0 0 5 0" />
  </svg>
);

export const ChartIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 15v-4M12 15V7M16 15v-6M20 15v-2" />
  </svg>
);

export const ArchiveIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="5" rx="1" />
    <path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
    <path d="M10 13h4" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BankIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 9l9-6 9 6" />
    <path d="M4 9h16M5 9v9M9 9v9M15 9v9M19 9v9" />
    <path d="M3 20h18" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const TruckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M1 7h13v9H1zM14 10h4l4 4v2h-8z" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);

export const GovIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 21h18M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6h6v6" />
    <path d="M12 12h.01" />
  </svg>
);

export const HeartIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
    <path d="M4 12h4l2-2 2 4 2-2h6" />
  </svg>
);

export const CompassIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </svg>
);

export const WrenchIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4.5 4.5 0 0 1 5.9 5.9L9 18H6v-3l8.7-8.7z" />
    <path d="M14 7l3 3" />
    <circle cx="6" cy="20" r="1" />
  </svg>
);

export const SupportIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M5.6 5.6l3.5 3.5M15 15l3.4 3.4M18.4 5.6L15 9M9 15l-3.4 3.4" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const LinkedinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const GlobeIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18z" />
  </svg>
);

export const TeamIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 5.5a3.5 3.5 0 0 1 0 5" />
    <path d="M17.5 14.5A6 6 0 0 1 21 20" />
  </svg>
);

export const SparkIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.9 5.6L20 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
  </svg>
);

export const AwardIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
  </svg>
);

export const LockIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

export const EyeIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const LayersIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </svg>
);

export const FolderIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

export const GearIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
  </svg>
);

export const TargetIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const SendIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 3L10 14M21 3l-7 18-3-8-8-3z" />
  </svg>
);

export const DownloadIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v12M7 10l5 5 5-5" />
    <path d="M4 21h16" />
  </svg>
);

export const XIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const ExternalIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 4h6v6M20 4l-9 9" />
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6" />
  </svg>
);

export const HandshakeIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 12l-4 3 3 4 4-2" />
    <path d="M16 12l4 3-3 4-4-2" />
    <path d="M8 12l4-4 4 4-4 4z" />
  </svg>
);

export const expertiseIcons: Record<string, (p: P) => React.ReactElement> = {
  "workflow-orchestration": WorkflowIcon,
  "intelligent-document-processing": DocumentIcon,
  "signature-electronique": PenIcon,
  "rpa": BotIcon,
  "reconnaissance-faciale": FaceIcon,
  "business-intelligence": ChartIcon,
  "enterprise-content-management": FolderIcon,
  "numerisation-archivage": ArchiveIcon,
};

export const industryIcons: Record<string, (p: P) => React.ReactElement> = {
  bancaire: BankIcon,
  telecom: PhoneIcon,
  assurance: ShieldIcon,
  sante: HeartIcon,
  "transport-logistique": TruckIcon,
  gouvernement: GovIcon,
};

export const serviceIcons: Record<string, (p: P) => React.ReactElement> = {
  "conseil-expertise": CompassIcon,
  "services-professionnels": WrenchIcon,
  "support-maintenance": SupportIcon,
};
