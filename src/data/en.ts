import type { DetailPage, IndustryPage, HomeData, AboutData } from './types';

export const expertises: Record<string, DetailPage> = {
  "workflow-orchestration": { title: "Orchestrate your processes. Accelerate your performance.", description: "Connect your systems, automate your processes and coordinate your teams in intelligent, end-to-end workflows.", seoTitle: "Process orchestration & workflow in Algeria | CaptureDoc", seoDescription: "Orchestrate your workflows in Algeria: connect your systems, automate your processes and run your operations end to end.", heroImage: "/images/team-meeting.jpg", stages: [
    { t: "Design", d: "Model your processes" },
    { t: "Connect", d: "Make your systems talk" },
    { t: "Automate", d: "Cut manual tasks" },
    { t: "Stay in control", d: "Keep control of your processes" }
  ], challengeTitle: "When processes become too complex", challenges: [
    { t: "Fragmented processes", d: "Applications and teams working in silos." },
    { t: "Manual tasks", d: "Repetitive operations that slow your teams down." },
    { t: "Lack of visibility", d: "Processes that are hard to track step by step." },
    { t: "System sprawl", d: "Information scattered across multiple tools." },
    { t: "Operational delays", d: "Approvals that slow down your operations." },
    { t: "Rigid processes", d: "Workflows that can't adapt to new needs." }
  ], approachTitle: "Intelligence at the heart of your processes", approach: [
    { t: "Process modelling", d: "Design and standardize your business journeys." },
    { t: "End-to-end orchestration", d: "Connect steps, systems and teams." },
    { t: "Systems integration", d: "Link your applications and your data." },
    { t: "Business rules management", d: "Automate decisions based on your rules." },
    { t: "Task management", d: "Distribute and track actions efficiently." },
    { t: "Monitoring & steering", d: "Measure the performance of your journeys." }
  ], casesTitle: "Business processes reinvented through orchestration", cases: [
    { t: "Customer onboarding", d: "Orchestrate checks and approvals." },
    { t: "Approval workflows", d: "Streamline decision processes." },
    { t: "Request management", d: "Speed up request handling." },
    { t: "Case management", d: "One single process for every file." },
    { t: "Document processing", d: "Turn documents into actions." },
    { t: "Cross-application automation", d: "Connect your apps seamlessly." },
    { t: "HR processes", d: "Simplify employee journeys." },
    { t: "P2P processes", d: "Automate purchasing and approvals." }
  ], benefitTitle: "More than a workflow: an intelligent process", benefits: [
    { t: "Productivity", d: "Cut manual tasks." },
    { t: "Speed", d: "Accelerate process execution." },
    { t: "Reliability", d: "Standardize your operations." },
    { t: "Visibility", d: "Track your processes end to end." },
    { t: "Traceability", d: "Keep every step and decision." },
    { t: "Agility", d: "Evolve your business processes." }
  ], images: ["/images/team-meeting.jpg", "/images/circuit.jpg", "/images/keyboard.jpg", "/images/strategy.jpg", "/images/meeting.jpg", "/images/server-room.jpg"] },
  "intelligent-document-processing": { title: "Turn your documents into intelligent data", description: "Automate the capture, extraction and understanding of your documents with AI and Intelligent Document Processing.", seoTitle: "Intelligent Document Processing (IDP) & OCR in Algeria | CaptureDoc", seoDescription: "Automate document capture, OCR and data extraction in Algeria with CaptureDoc.", heroImage: "/images/lawyer-documents.jpg", stages: [
    { t: "Capture", d: "Capture all your documents" },
    { t: "Understand", d: "Identify key information" },
    { t: "Extract", d: "Turn documents into data" },
    { t: "Exploit", d: "Trigger the right actions" }
  ], challengeTitle: "When documents slow down your operations", challenges: [
    { t: "Document volumes", d: "Thousands of documents to process every day." },
    { t: "Manual processing", d: "Time-consuming data entry and checks." },
    { t: "Heterogeneous documents", d: "Multiple formats that are hard to use." },
    { t: "Unstructured data", d: "Important information that's hard to reach." },
    { t: "Error risks", d: "Entry and interpretation mistakes." },
    { t: "Processing delays", d: "Processes slowed by manual checks." }
  ], approachTitle: "Intelligence at the service of your documents", approach: [
    { t: "Intelligent capture", d: "Collect and prepare your documents." },
    { t: "Automatic classification", d: "Route every document to the right process." },
    { t: "Intelligent extraction", d: "Extract the relevant data." },
    { t: "Contextual understanding", d: "Interpret business information." },
    { t: "Process integration", d: "Feed data into existing systems." },
    { t: "Control & validation", d: "Make extracted information reliable." }
  ], casesTitle: "Documents turned into usable data", cases: [
    { t: "Onboarding & KYC", d: "Automate customer intake files." },
    { t: "Supplier invoices", d: "Automate invoice processing." },
    { t: "Credit applications", d: "Speed up application analysis." },
    { t: "Incoming mail", d: "Classify and distribute every letter." },
    { t: "Contracts & legal documents", d: "Exploit the content of your contracts." },
    { t: "Administrative documents", d: "Reduce manual processing." },
    { t: "Insurance files", d: "Speed up management operations." },
    { t: "Document control", d: "Strengthen data reliability." }
  ], benefitTitle: "Make your documents a source of value", benefits: [
    { t: "Productivity", d: "Reduce data entry work." },
    { t: "Speed", d: "Process your documents faster." },
    { t: "Reliability", d: "Limit human error." },
    { t: "Flexibility", d: "Adapt rules to your needs." },
    { t: "Automation", d: "Trigger the right actions." },
    { t: "Exploitation", d: "Put your data to work immediately." }
  ], images: ["/images/keyboard.jpg", "/images/circuit.jpg", "/images/server-room.jpg", "/images/cityscape.jpg", "/images/data-analysis.jpg", "/images/team-meeting.jpg"] },
  "signature-electronique": { title: "Sign faster. Stay in control.", description: "Digitize your approval and signature journeys with a secure electronic signature solution built for your business processes.", seoTitle: "Electronic signature in Algeria | CaptureDoc", seoDescription: "Digitize your signature journeys in Algeria with CaptureDoc: simple, secure and traceable processes.", heroImage: "/images/handshake.jpg", stages: [
    { t: "Prepare", d: "Prepare your documents" },
    { t: "Send", d: "Send for signature" },
    { t: "Sign", d: "Sign securely" },
    { t: "Archive", d: "Keep a reliable record" }
  ], challengeTitle: "When signatures slow down your business", challenges: [
    { t: "Paper processes", d: "Printing, scanning and mailing documents." },
    { t: "Long delays", d: "Approvals that take days or weeks." },
    { t: "Limited traceability", d: "Journeys that are hard to track." },
    { t: "Remote signers", d: "Signatories who aren't on site." },
    { t: "Legal compliance", d: "The need for legally sound signatures." },
    { t: "Archiving burden", d: "Signed documents to store and retrieve." }
  ], approachTitle: "A signature journey designed for your processes", approach: [
    { t: "Document preparation", d: "Prepare and configure your signature files." },
    { t: "Signature workflows", d: "Define orders, roles and reminders." },
    { t: "Strong authentication", d: "Verify the identity of every signer." },
    { t: "Legal evidence", d: "Secure proof files for every signature." },
    { t: "Process integration", d: "Connect signatures to your business tools." },
    { t: "Certified archiving", d: "Keep signed documents safe." }
  ], casesTitle: "Signature journeys for every department", cases: [
    { t: "Customer contracts", d: "Speed up contract signing." },
    { t: "HR documents", d: "Sign employment documents remotely." },
    { t: "Purchasing & procurement", d: "Approve orders and agreements." },
    { t: "Account opening", d: "Complete onboarding without paper." },
    { t: "Internal approvals", d: "Digitize validation workflows." },
    { t: "Legal documents", d: "Sign with legal evidence." },
    { t: "Supplier agreements", d: "Finalize contracts faster." },
    { t: "Regulatory documents", d: "Meet your compliance obligations." }
  ], benefitTitle: "A simpler, safer way to sign", benefits: [
    { t: "Speed", d: "Sign in minutes, not days." },
    { t: "Security", d: "Protected, verifiable signatures." },
    { t: "Compliance", d: "Legally valid signature processes." },
    { t: "Traceability", d: "Audit every step of the journey." },
    { t: "Experience", d: "Simple journeys for every signer." },
    { t: "Savings", d: "Cut printing and handling costs." }
  ], images: ["/images/writing-blue.jpg", "/images/lawyer-documents.jpg", "/images/handshake.jpg", "/images/cityscape.jpg", "/images/mobile-analytics.jpg", "/images/keyboard.jpg"] },
  "rpa": { title: "Automate the repetitive. Amplify the human.", description: "Deploy software robots that execute your repetitive tasks reliably, so your teams can focus on higher-value work.", seoTitle: "Robotic Process Automation (RPA) in Algeria | CaptureDoc", seoDescription: "Automate repetitive tasks in Algeria with CaptureDoc RPA: software robots integrated with your systems.", heroImage: "/images/keyboard.jpg", stages: [
    { t: "Identify", d: "Find the right processes" },
    { t: "Design", d: "Model the robot's actions" },
    { t: "Deploy", d: "Put your robots to work" },
    { t: "Monitor", d: "Measure and optimize" }
  ], challengeTitle: "When repetitive tasks consume your teams", challenges: [
    { t: "Repetitive tasks", d: "Copy-paste, entry and checks repeated all day." },
    { t: "High volumes", d: "Operations that exceed manual capacity." },
    { t: "Human error", d: "Mistakes caused by fatigue and repetition." },
    { t: "Disconnected systems", d: "Applications that don't talk to each other." },
    { t: "Operating costs", d: "Processes that are expensive to run manually." },
    { t: "Scalability limits", d: "Teams that can't absorb activity peaks." }
  ], approachTitle: "Software robots designed for your operations", approach: [
    { t: "Process analysis", d: "Identify automation opportunities." },
    { t: "Robot design", d: "Model reliable, resilient automations." },
    { t: "System integration", d: "Connect robots to your applications." },
    { t: "Orchestration", d: "Run and schedule your robot fleet." },
    { t: "Exception handling", d: "Route edge cases to your teams." },
    { t: "Supervision", d: "Monitor performance and compliance." }
  ], casesTitle: "Robots at work across your business", cases: [
    { t: "Data entry", d: "Automate form and record filling." },
    { t: "Invoice processing", d: "Extract, check and post invoices." },
    { t: "Report generation", d: "Produce and distribute reports." },
    { t: "System synchronization", d: "Keep your applications in sync." },
    { t: "Data migration", d: "Move data between systems reliably." },
    { t: "Compliance checks", d: "Apply controls automatically." },
    { t: "Order processing", d: "Handle orders end to end." },
    { t: "Peak management", d: "Absorb activity spikes on demand." }
  ], benefitTitle: "A digital workforce that never sleeps", benefits: [
    { t: "Productivity", d: "Execute tasks 24/7." },
    { t: "Accuracy", d: "Eliminate entry errors." },
    { t: "Speed", d: "Process in seconds, not hours." },
    { t: "Scalability", d: "Scale capacity instantly." },
    { t: "Compliance", d: "Consistent, auditable execution." },
    { t: "ROI", d: "Measurable gains in weeks." }
  ], images: ["/images/lawyer-documents.jpg", "/images/writing-blue.jpg", "/images/keyboard.jpg", "/images/server-room.jpg", "/images/mobile-analytics.jpg", "/images/data-analysis.jpg"] },
  "reconnaissance-faciale": { title: "Secure identity. Strengthen trust.", description: "Verify your users' identity with facial recognition and liveness detection built into your digital journeys.", seoTitle: "Facial recognition & liveness detection in Algeria | CaptureDoc", seoDescription: "Secure your digital journeys in Algeria with facial recognition and liveness detection.", heroImage: "/images/tech-concept.jpg", stages: [
    { t: "Capture", d: "Capture the user's face" },
    { t: "Verify", d: "Check liveness in real time" },
    { t: "Match", d: "Compare with reference identity" },
    { t: "Validate", d: "Confirm or reject securely" }
  ], challengeTitle: "When digital identity becomes critical", challenges: [
    { t: "Identity fraud", d: "Fake documents and impersonation attempts." },
    { t: "Remote verification", d: "Users who can't be verified on site." },
    { t: "KYC requirements", d: "Strong identity verification obligations." },
    { t: "User experience", d: "Verification that must stay simple." },
    { t: "Spoofing attacks", d: "Photos, videos and masks used to cheat." },
    { t: "Compliance", d: "Regulatory requirements to satisfy." }
  ], approachTitle: "Biometric verification built into your journeys", approach: [
    { t: "Face capture", d: "Guide users through simple capture." },
    { t: "Liveness detection", d: "Detect spoofing attempts in real time." },
    { t: "Document verification", d: "Check ID documents automatically." },
    { t: "Face matching", d: "Compare biometrics with ID photos." },
    { t: "Journey integration", d: "Embed verification in your workflows." },
    { t: "Audit & compliance", d: "Keep verifiable proof of each check." }
  ], casesTitle: "Identity verification for every journey", cases: [
    { t: "Digital onboarding", d: "Verify new customers remotely." },
    { t: "KYC compliance", d: "Meet identification obligations." },
    { t: "Secure access", d: "Authenticate users by face." },
    { t: "Account recovery", d: "Verify identity for sensitive actions." },
    { t: "Agent verification", d: "Confirm field agent identity." },
    { t: "Citizen services", d: "Secure public digital services." },
    { t: "Payment authorization", d: "Confirm high-value operations." },
    { t: "Anti-fraud", d: "Block identity spoofing attempts." }
  ], benefitTitle: "Trust every digital interaction", benefits: [
    { t: "Security", d: "Block impersonation and fraud." },
    { t: "Speed", d: "Verify identity in seconds." },
    { t: "Simplicity", d: "Frictionless user experience." },
    { t: "Compliance", d: "Meet KYC and regulatory needs." },
    { t: "Scalability", d: "Verify thousands of users remotely." },
    { t: "Trust", d: "Build confidence in your services." }
  ], images: ["/images/tech-concept.jpg", "/images/cityscape.jpg", "/images/server-room.jpg", "/images/handshake.jpg", "/images/mobile-analytics.jpg", "/images/circuit.jpg"] },
  "business-intelligence": { title: "Turn your data into decisions", description: "Reveal the value of your data with dashboards, indicators and analytics that steer your performance.", seoTitle: "Business Intelligence & Analytics in Algeria | CaptureDoc", seoDescription: "Turn your data into decisions in Algeria: dashboards, KPIs and analytics.", heroImage: "/images/data-analysis.jpg", stages: [
    { t: "Collect", d: "Gather your data sources" },
    { t: "Structure", d: "Model and prepare data" },
    { t: "Visualize", d: "Build clear dashboards" },
    { t: "Decide", d: "Act on real indicators" }
  ], challengeTitle: "When data stays locked away", challenges: [
    { t: "Scattered data", d: "Information spread across multiple systems." },
    { t: "Manual reporting", d: "Reports built slowly by hand." },
    { t: "No visibility", d: "Decisions made without reliable indicators." },
    { t: "Inconsistent data", d: "Different numbers across departments." },
    { t: "Slow analysis", d: "Insights that arrive too late." },
    { t: "Limited adoption", d: "Tools that teams don't use." }
  ], approachTitle: "Analytics designed for your business", approach: [
    { t: "Data audit", d: "Identify and qualify your sources." },
    { t: "Data modelling", d: "Structure reliable datasets." },
    { t: "Dashboard design", d: "Build readable, actionable views." },
    { t: "KPI definition", d: "Measure what really matters." },
    { t: "Self-service BI", d: "Empower teams to explore data." },
    { t: "Governance", d: "Secure quality and access." }
  ], casesTitle: "Data at work for your performance", cases: [
    { t: "Executive dashboards", d: "Steer your activity in real time." },
    { t: "Process analytics", d: "Measure workflow performance." },
    { t: "Financial reporting", d: "Automate financial indicators." },
    { t: "Operational monitoring", d: "Track operations daily." },
    { t: "Quality metrics", d: "Monitor service quality." },
    { t: "Predictive insights", d: "Anticipate trends and risks." },
    { t: "Document analytics", d: "Measure document flows." },
    { t: "Custom reports", d: "Answer any business question." }
  ], benefitTitle: "Decisions backed by evidence", benefits: [
    { t: "Visibility", d: "See your activity clearly." },
    { t: "Speed", d: "Decide faster with real-time data." },
    { t: "Alignment", d: "One version of the truth." },
    { t: "Performance", d: "Measure what drives results." },
    { t: "Anticipation", d: "Spot trends before they hit." },
    { t: "Autonomy", d: "Let teams answer their own questions." }
  ], images: ["/images/data-analysis.jpg", "/images/stock-market.jpg", "/images/mobile-analytics.jpg", "/images/data-analysis-2.jpg", "/images/server-room.jpg", "/images/meeting.jpg"] },
  "enterprise-content-management": { title: "Structure your content. Unlock your information.", description: "Centralize, organize and secure your enterprise content with an ECM/GED platform designed for your processes.", seoTitle: "Enterprise Content Management (ECM/GED) in Algeria | CaptureDoc", seoDescription: "Centralize and secure your enterprise content in Algeria: ECM/GED solutions by CaptureDoc.", heroImage: "/images/server-room.jpg", stages: [
    { t: "Centralize", d: "Bring content together" },
    { t: "Organize", d: "Classify and index" },
    { t: "Secure", d: "Control access and rights" },
    { t: "Exploit", d: "Find and reuse instantly" }
  ], challengeTitle: "When content becomes unmanageable", challenges: [
    { t: "Scattered content", d: "Documents spread across tools and drives." },
    { t: "Version chaos", d: "Multiple copies with no single truth." },
    { t: "Slow retrieval", d: "Information that's hard to find." },
    { t: "Access risks", d: "Sensitive content without control." },
    { t: "Compliance gaps", d: "Retention rules not enforced." },
    { t: "Collaboration friction", d: "Teams working on isolated copies." }
  ], approachTitle: "A content platform aligned with your processes", approach: [
    { t: "Content architecture", d: "Design your repository structure." },
    { t: "Capture & indexing", d: "Feed and classify content automatically." },
    { t: "Rights management", d: "Control access by role and context." },
    { t: "Lifecycle management", d: "Apply retention and archiving rules." },
    { t: "Process integration", d: "Link content to your workflows." },
    { t: "Search & retrieval", d: "Find any document instantly." }
  ], casesTitle: "Content under control, everywhere", cases: [
    { t: "Document repository", d: "One central, organized library." },
    { t: "Records management", d: "Compliant retention and archiving." },
    { t: "Collaborative work", d: "Share and co-edit securely." },
    { t: "Contract management", d: "Track contracts end to end." },
    { t: "Case files", d: "All case documents in one place." },
    { t: "HR records", d: "Secure employee documentation." },
    { t: "Compliance", d: "Meet regulatory obligations." },
    { t: "Knowledge base", d: "Capitalize on shared knowledge." }
  ], benefitTitle: "Your content, under control", benefits: [
    { t: "Organization", d: "A single, structured repository." },
    { t: "Security", d: "Controlled, audited access." },
    { t: "Speed", d: "Find documents in seconds." },
    { t: "Compliance", d: "Enforced retention policies." },
    { t: "Collaboration", d: "Teams working on the same truth." },
    { t: "Resilience", d: "Protected, durable content." }
  ], images: ["/images/lawyer-documents.jpg", "/images/server-room.jpg", "/images/meeting.jpg", "/images/handshake.jpg", "/images/data-analysis.jpg", "/images/writing-blue.jpg"] },
  "numerisation-archivage": { title: "From paper to digital heritage", description: "Digitize, index and archive your documents with an industrial service that turns your paper into usable digital assets.", seoTitle: "Digitization & archiving in Algeria | CaptureDoc", seoDescription: "Digitize and archive your documents in Algeria: industrial services by CaptureDoc.", heroImage: "/images/writing-blue.jpg", stages: [
    { t: "Collect", d: "Gather your documents" },
    { t: "Digitize", d: "Scan at industrial scale" },
    { t: "Index", d: "Classify and structure" },
    { t: "Archive", d: "Preserve for the long term" }
  ], challengeTitle: "When paper holds your organization back", challenges: [
    { t: "Paper archives", d: "Rooms of documents that are hard to use." },
    { t: "Degradation risk", d: "Paper that ages, gets lost or damaged." },
    { t: "Retrieval time", d: "Hours spent locating physical files." },
    { t: "Space costs", d: "Premises dedicated to storage." },
    { t: "Regulatory retention", d: "Obligations to preserve for years." },
    { t: "Remote access", d: "Documents unavailable to remote teams." }
  ], approachTitle: "Industrial digitization, end to end", approach: [
    { t: "Collection & preparation", d: "Gather, sort and prepare documents." },
    { t: "High-volume scanning", d: "Digitize with industrial equipment." },
    { t: "OCR & indexing", d: "Make every page searchable." },
    { t: "Quality control", d: "Verify every digitized file." },
    { t: "Secure archiving", d: "Store with long-term guarantees." },
    { t: "Return or destruction", d: "Handle originals per your rules." }
  ], casesTitle: "Digitization for every archive", cases: [
    { t: "Administrative archives", d: "Digitize institutional records." },
    { t: "HR files", d: "Preserve employee documents digitally." },
    { t: "Financial records", d: "Archive invoices and statements." },
    { t: "Medical records", d: "Digitize patient files securely." },
    { t: "Legal documents", d: "Preserve contracts and deeds." },
    { t: "Technical archives", d: "Digitize plans and schematics." },
    { t: "Customer files", d: "Make client records accessible." },
    { t: "Historical archives", d: "Preserve documentary heritage." }
  ], benefitTitle: "A digital heritage that lasts", benefits: [
    { t: "Preservation", d: "Protect documents from time." },
    { t: "Accessibility", d: "Access archives from anywhere." },
    { t: "Space", d: "Free your premises." },
    { t: "Compliance", d: "Meet retention obligations." },
    { t: "Security", d: "Controlled, backed-up archives." },
    { t: "Value", d: "Turn archives into assets." }
  ], images: ["/images/lawyer-documents.jpg", "/images/server-room.jpg", "/images/meeting.jpg", "/images/handshake.jpg", "/images/data-analysis.jpg", "/images/writing-blue.jpg"] }
};

export const industries: Record<string, IndustryPage> = {
  "bancaire": { title: "Reinvent your banking journeys with intelligence and automation", description: "Digitize customer files, automate KYC, secure your controls and accelerate electronic signature end to end.", seoTitle: "CaptureDoc | Banking Digitalization — AI & KYC | Algeria", seoDescription: "Digitize customer files, automate KYC and accelerate e-signature for banking journeys in Algeria.", hero: [
    { t: "Digitalization", s: "Digitize your customer files", d: "Capture, scan and structure documents automatically to speed up customer journeys and operations." },
    { t: "Intelligent KYC", s: "Identify identity with ease", d: "Automate ID document verification and strengthen identification with AI." },
    { t: "Compliance & security", s: "Secure your customer journeys", d: "Automate controls and ensure traceability of operations." },
    { t: "Electronic signature", s: "Complete journeys digitally", d: "Get documents signed securely and with legal evidence." }
  ], challenges: [
    { t: "Manual processes", s: "", d: "Time-consuming operations that mobilize your teams." },
    { t: "Complex files", s: "", d: "Large volumes of documents to collect and check." },
    { t: "KYC & compliance", s: "", d: "Growing requirements demanding more rigor and traceability." },
    { t: "Fraud risks", s: "", d: "Journeys that must balance speed and security." },
    { t: "Processing delays", s: "", d: "Processes that slow down customer onboarding." },
    { t: "Customer experience", s: "", d: "Journeys still too long and fragmented." }
  ], innovationTitle: "A simpler journey for your customer. A smarter process for your bank.", useCasesTitle: "Concrete use cases to simplify, secure and accelerate your operations.", useCases: [
    { t: "Onboarding & KYC", s: "Speed up customer intake", d: "Digitize document collection and verify customer identity remotely." },
    { t: "Account opening", s: "Simplify account opening", d: "Automate file assembly and validation." },
    { t: "Credit & financing", s: "Speed up request handling", d: "Cut delays through automatic extraction of supporting documents." },
    { t: "Customer file management", s: "One customer file, one vision", d: "Centralize customer documents and information." },
    { t: "Strengthen your controls", s: "Reduce risks", d: "Improve traceability and detect anomalies." },
    { t: "Contracting & signature", s: "Sign without breaking the journey", d: "Let customers complete their formalities remotely." }
  ], images: ["/images/lawyer-documents.jpg", "/images/online-payment.jpg", "/images/real-estate-agent.jpg", "/images/server-room.jpg", "/images/keyboard.jpg", "/images/cityscape.jpg"], caseStudy: "banking" },
  "telecom": { title: "Accelerate your telecom operations with intelligence and automation", description: "Automate your processes, simplify onboarding, secure identities and improve your customer experience.", seoTitle: "CaptureDoc | Telecom Automation — Onboarding & AI | Algeria", seoDescription: "Automate onboarding, secure identities and accelerate telecom service activation in Algeria.", hero: [
    { t: "Digitalization", s: "Accelerate customer acquisition", d: "Digitize document collection and automate customer file assembly." },
    { t: "Intelligent KYC", s: "Secure your customer journeys", d: "Verify identities with AI and strengthen liveness detection." },
    { t: "Orchestration", s: "Accelerate service activation", d: "Orchestrate processes and cut delays between subscription and activation." },
    { t: "Electronic signature", s: "Complete journeys digitally", d: "Simplify contract validation and signing." }
  ], challenges: [
    { t: "Massive volumes", s: "", d: "Millions of operations and documents to process." },
    { t: "Customer acquisition", s: "", d: "Journeys that must be fast and seamless." },
    { t: "Fraud & security", s: "", d: "Growing risks requiring stronger controls." },
    { t: "Fragmented processes", s: "", d: "Multiple systems and applications to connect." },
    { t: "Activation delays", s: "", d: "Processes that can slow down service delivery." },
    { t: "Demanding customers", s: "", d: "Ever more demanding, connected customers." }
  ], innovationTitle: "Faster operations. Smoother journeys. Better-served customers.", useCasesTitle: "Concrete use cases to accelerate your operations and improve customer experience.", useCases: [
    { t: "Customer onboarding", s: "Accelerate customer intake", d: "Digitize files and automate customer information verification." },
    { t: "Subscription", s: "Simplify subscription", d: "Automate collection, control and validation steps." },
    { t: "Service activation", s: "Accelerate service delivery", d: "Orchestrate services to cut activation delays." },
    { t: "Contract management", s: "Simplify the customer lifecycle", d: "Centralize documents and automate processes." },
    { t: "Fraud prevention", s: "Strengthen your controls", d: "Detect anomalies more effectively with AI." },
    { t: "Electronic signature", s: "Sign without breaking the journey", d: "Digitize contracting to finalize your offers." }
  ], images: ["/images/server-room.jpg", "/images/online-payment.jpg", "/images/lawyer-documents.jpg", "/images/circuit.jpg", "/images/cityscape.jpg", "/images/mobile-analytics.jpg"], caseStudy: "telecom" },
  "assurance": { title: "Reinvent your insurance journeys with intelligence and automation", description: "Digitize files, accelerate claims handling, automate controls and streamline your customer journeys.", seoTitle: "CaptureDoc | Insurance Digitalization — Claims & AI | Algeria", seoDescription: "Digitize files, accelerate claims handling and automate controls for smoother customer journeys in Algeria.", hero: [
    { t: "Digitalization", s: "Digitize your insurance files", d: "Capture, extract and structure information automatically." },
    { t: "Intelligent underwriting", s: "Simplify underwriting", d: "Automate information collection and analysis." },
    { t: "Claims management", s: "Accelerate claims handling", d: "Automate collection, analysis and control of supporting documents." },
    { t: "Electronic signature", s: "Complete journeys digitally", d: "Streamline document exchange and signing." }
  ], challenges: [
    { t: "Manual processes", s: "", d: "Time-consuming operations that mobilize your teams." },
    { t: "Document volumes", s: "", d: "Files rich in documents and supporting evidence." },
    { t: "Claims management", s: "", d: "Delays that directly impact customer satisfaction." },
    { t: "Controls & compliance", s: "", d: "Essential checks to secure operations." },
    { t: "Multiple touchpoints", s: "", d: "Journeys fragmented across customers, agencies and teams." },
    { t: "Customer expectations", s: "", d: "Policyholders expecting simple, smooth processes." }
  ], innovationTitle: "Smoother journeys. Faster decisions. A better customer experience.", useCasesTitle: "Concrete use cases to simplify, secure and accelerate your operations.", useCases: [
    { t: "Customer onboarding", s: "Accelerate customer intake", d: "Digitize information collection and automate underwriting." },
    { t: "Claims management", s: "Speed up settlement", d: "Automate document collection and analysis." },
    { t: "Contract management", s: "Simplify the contract lifecycle", d: "Centralize documents and automate validations." },
    { t: "Customer file management", s: "A complete view of the customer", d: "Centralize documents and information." },
    { t: "Fraud prevention", s: "Strengthen your controls", d: "Detect anomalies and risky behaviors more effectively." },
    { t: "Electronic signature", s: "Sign without breaking the journey", d: "Digitize contractual processes with e-signature." }
  ], images: ["/images/writing-blue.jpg", "/images/lawyer-documents.jpg", "/images/real-estate.jpg", "/images/server-room.jpg", "/images/meeting.jpg", "/images/mobile-analytics.jpg"], caseStudy: "insurance" },
  "sante": { title: "Digitize your healthcare journeys with intelligence and automation", description: "Digitize procedures, simplify file handling and improve citizen experience while strengthening security and traceability.", seoTitle: "CaptureDoc | Healthcare Digitalization — Records & AI | Algeria", seoDescription: "Digitize patient files, automate administrative processes and secure health data in Algeria.", hero: [
    { t: "Digitalization", s: "Digitize your records", d: "Turn medical and administrative documents into structured information." },
    { t: "Intelligent processing", s: "Automate processes", d: "Reduce manual tasks with AI and automation." },
    { t: "Security & compliance", s: "Protect sensitive data", d: "Strengthen security, traceability and control of health information." },
    { t: "Patient experience", s: "Simplify every step", d: "Streamline administrative procedures for a better experience." }
  ], challenges: [
    { t: "Large files", s: "", d: "A huge quantity of medical and administrative documents." },
    { t: "Manual tasks", s: "", d: "Teams tied up by repetitive tasks." },
    { t: "Scattered information", s: "", d: "Data spread across multiple systems and services." },
    { t: "Sensitive data", s: "", d: "Sensitive data requiring a high level of protection." },
    { t: "Access & controls", s: "", d: "Strong requirements on information access and processing." },
    { t: "Patient experience", s: "", d: "Administrative journeys that must be simpler and smoother." }
  ], innovationTitle: "Smarter processes. Better-used information.", useCasesTitle: "Concrete use cases to simplify processes and improve the experience of professionals and patients.", useCases: [
    { t: "Digital records", s: "Simplified access to information", d: "Centralize and structure documents for easier access." },
    { t: "Admission & intake", s: "Streamline administrative journeys", d: "Digitize information collection and automate files." },
    { t: "Medical records", s: "Make your information valuable", d: "Capture and structure medical documents automatically." },
    { t: "Document processing", s: "Accelerate file handling", d: "Automate extraction and control of required information." },
    { t: "Administration", s: "Free your teams from repetitive tasks", d: "Automate high-volume administrative processes." },
    { t: "Records & archiving", s: "Secure your documentary heritage", d: "Centralize, protect and preserve documents." }
  ], images: ["/images/lawyer-documents.jpg", "/images/keyboard.jpg", "/images/server-room.jpg", "/images/circuit.jpg", "/images/mobile-analytics.jpg", "/images/cityscape.jpg"], caseStudy: "health" },
  "transport-logistique": { title: "Optimize your flows with intelligence and automation", description: "Digitize documents, automate operations and streamline processes to gain speed, visibility and efficiency.", seoTitle: "CaptureDoc | Transport & Logistics Digitalization | Algeria", seoDescription: "Digitize documents, automate operations and gain traceability across your logistics chain in Algeria.", hero: [
    { t: "Digitalization", s: "Digitize your document flows", d: "Automatically turn documents and information into usable data." },
    { t: "Automation", s: "Accelerate your operations", d: "Automate document and request processing." },
    { t: "Orchestration", s: "Connect your processes", d: "Coordinate systems, teams and operations along the logistics chain." },
    { t: "Traceability", s: "Keep control of your flows", d: "Centralize information and ensure full traceability of operations." }
  ], challenges: [
    { t: "Document volumes", s: "", d: "A multitude of documents to process daily." },
    { t: "Repetitive tasks", s: "", d: "Repetitive operations that slow down teams." },
    { t: "Fragmented systems", s: "", d: "Multiple applications and actors to synchronize." },
    { t: "Flow visibility", s: "", d: "Essential visibility on every step of operations." },
    { t: "Operational delays", s: "", d: "Every delay can impact the whole chain." },
    { t: "Customer expectations", s: "", d: "Growing expectations for speed and visibility." }
  ], innovationTitle: "Smoother operations. Better visibility. Durable performance.", useCasesTitle: "Concrete use cases to automate your operations and improve performance.", useCases: [
    { t: "Transport documents", s: "Automate document processing", d: "Extract and structure information from documents automatically." },
    { t: "Order management", s: "Accelerate order processing", d: "Automate collection, control and transmission of information." },
    { t: "Billing", s: "Simplify invoicing processes", d: "Automate document processing and reduce manual work." },
    { t: "Operations tracking", s: "Gain visibility", d: "Automate document processing and steer your operations." },
    { t: "Contract management", s: "Master your commitments", d: "Centralize and secure contractual documents." },
    { t: "Operations automation", s: "Free your teams", d: "Automate repetitive tasks and high-volume processes." }
  ], images: ["/images/lawyer-documents.jpg", "/images/keyboard.jpg", "/images/circuit.jpg", "/images/server-room.jpg", "/images/strategy.jpg", "/images/team-meeting.jpg"], caseStudy: "logistics" },
  "gouvernement": { title: "Reinvent public services with intelligence and automation", description: "Digitize procedures, simplify file handling and improve citizen experience while strengthening security and traceability.", seoTitle: "CaptureDoc | Public Sector Digitalization | Algeria", seoDescription: "Digitize administrative procedures, accelerate file handling and improve citizen experience securely in Algeria.", hero: [
    { t: "Digitalization", s: "Digitize your procedures", d: "Turn paper documents and procedures into simple, accessible digital journeys." },
    { t: "Intelligent processing", s: "Automate your files", d: "Extract and structure information to accelerate administrative processing." },
    { t: "Security & compliance", s: "Strengthen your controls", d: "Secure processes and ensure better traceability of operations." },
    { t: "Citizen experience", s: "Simplify the citizen experience", d: "Offer faster, smoother procedures accessible to all." }
  ], challenges: [
    { t: "Administrative processes", s: "", d: "Procedures still largely dependent on paper." },
    { t: "Document volumes", s: "", d: "Thousands of files to process and archive." },
    { t: "Processing delays", s: "", d: "Complex processes that slow down procedures." },
    { t: "Controls & traceability", s: "", d: "Strong requirements for tracking and control." },
    { t: "Data security", s: "", d: "Sensitive information to protect." },
    { t: "Citizen experience", s: "", d: "Citizens expecting simpler, faster procedures." }
  ], innovationTitle: "Simpler procedures. Smoother services. Better-served citizens.", useCasesTitle: "Concrete use cases to modernize administration and improve the citizen experience.", useCases: [
    { t: "Digital procedures", s: "Simplify administrative formalities", d: "Digitize procedures and automate file processing." },
    { t: "File management", s: "Accelerate file handling", d: "Automate collection, control and tracking of administrative files." },
    { t: "Citizen relationship", s: "Improve request handling", d: "Automate reception and tracking of citizen requests." },
    { t: "Archiving", s: "Preserve administrative heritage", d: "Centralize and secure administrative documents." },
    { t: "Internal workflows", s: "Streamline internal processes", d: "Automate validations and internal exchanges." },
    { t: "Electronic signature", s: "Finalize digitally", d: "Enable secure signing of administrative documents." }
  ], images: ["/images/writing-blue.jpg", "/images/lawyer-documents.jpg", "/images/team-meeting.jpg", "/images/circuit.jpg", "/images/server-room.jpg", "/images/protocol-event.jpg"], caseStudy: "gov" }
};

export const services: Record<string, DetailPage> = {
  "conseil-expertise": { title: "Turn your challenges into solutions", description: "Benefit from business and technology expertise to identify opportunities, define the right strategy and build solutions aligned with your objectives.", seoTitle: "Digital transformation consulting in Algeria | CaptureDoc", seoDescription: "Consulting & expertise in Algeria: CaptureDoc helps you analyze your processes, define your strategy and secure your technology choices.", heroImage: "/images/strategy.jpg", stages: [
    { t: "Understand", d: "Understand your challenges" },
    { t: "Analyze", d: "Identify opportunities" },
    { t: "Design", d: "Build the right solution" },
    { t: "Decide", d: "Move forward with a clear vision" }
  ], challengeTitle: "When the right questions must come before the right technologies", challenges: [
    { t: "Complex needs", d: "Business challenges requiring deep analysis." },
    { t: "Technology choices", d: "Many possible technologies and approaches." },
    { t: "Processes to optimize", d: "Automation opportunities that are hard to identify." },
    { t: "Existing systems", d: "An environment to factor into every decision." },
    { t: "Investments to secure", d: "Choices that must deliver real business value." },
    { t: "Long-term vision", d: "Solutions that must evolve with the organization." }
  ], approachTitle: "Expertise at the service of your decisions", approach: [
    { t: "Audit & diagnosis", d: "Analyze your processes and identify improvement areas." },
    { t: "Feasibility study", d: "Evaluate the solutions considered." },
    { t: "Functional consulting", d: "Translate your challenges into structured needs." },
    { t: "Technology consulting", d: "Identify the right technologies." },
    { t: "Architecture & strategy", d: "Define a coherent trajectory." },
    { t: "Roadmap & support", d: "Prioritize initiatives and move to action." }
  ], casesTitle: "Expertise for every strategic decision", cases: [
    { t: "Audit & diagnosis", d: "Analyze the existing situation and opportunities." },
    { t: "Business & Process Consulting", d: "Simplify your business processes." },
    { t: "Studies & scoping", d: "Structure your needs and projects." },
    { t: "Architecture & urbanization", d: "Design evolvable architectures." },
    { t: "Technology consulting", d: "Identify relevant technologies." },
    { t: "Proof of Concept", d: "Validate an approach before scaling." },
    { t: "Transformation roadmap", d: "Build a progressive trajectory." },
    { t: "Decision support", d: "Secure your technology and business choices." }
  ], benefitTitle: "Better vision for better decisions", benefits: [
    { t: "Clarity", d: "Turn problems into precise objectives." },
    { t: "Relevance", d: "Align technology with business needs." },
    { t: "Control", d: "Reduce risks before committing." },
    { t: "Agility", d: "Build an evolvable trajectory." },
    { t: "Value", d: "Focus investments on impact." },
    { t: "Confidence", d: "Rely on proven expertise." }
  ], images: ["/images/team-meeting.jpg", "/images/circuit.jpg", "/images/keyboard.jpg", "/images/server-room.jpg", "/images/data-analysis.jpg", "/images/meeting.jpg"] },
  "services-professionnels": { title: "From idea to deployment", description: "Rely on certified experts to design, integrate and deploy your document transformation and automation solutions.", seoTitle: "Professional services for digital transformation in Algeria | CaptureDoc", seoDescription: "Professional services in Algeria: CaptureDoc designs, deploys and evolves your solutions to secure your technology projects.", heroImage: "/images/team-meeting.jpg", stages: [
    { t: "Design", d: "Build the right solution" },
    { t: "Integrate", d: "Connect your systems" },
    { t: "Deploy", d: "Launch with confidence" },
    { t: "Evolve", d: "Continuously improve" }
  ], challengeTitle: "When delivery makes the difference", challenges: [
    { t: "Complex projects", d: "Implementations requiring deep expertise." },
    { t: "System integration", d: "New solutions to connect with your environment." },
    { t: "Delays & risks", d: "Projects that must be delivered on time." },
    { t: "Team enablement", d: "Users to train and bring on board." },
    { t: "Evolving needs", d: "Solutions that must adapt over time." },
    { t: "Operational continuity", d: "Transitions that must not disrupt business." }
  ], approachTitle: "Certified experts at every step", approach: [
    { t: "Solution design", d: "Build solutions tailored to your context." },
    { t: "Configuration", d: "Set up platforms to your requirements." },
    { t: "Systems integration", d: "Connect solutions to your IS." },
    { t: "Testing & validation", d: "Secure every step before go-live." },
    { t: "Training", d: "Transfer skills to your teams." },
    { t: "Ongoing support", d: "Support you after deployment." }
  ], casesTitle: "Services for every stage of your project", cases: [
    { t: "Project scoping", d: "Frame your implementation." },
    { t: "Solution design", d: "Architect your solution." },
    { t: "Platform configuration", d: "Set up your tools." },
    { t: "Custom development", d: "Extend solutions to your needs." },
    { t: "Data migration", d: "Move your content securely." },
    { t: "System integration", d: "Connect your applications." },
    { t: "Training & enablement", d: "Make your teams autonomous." },
    { t: "Go-live support", d: "Secure your launch." }
  ], benefitTitle: "Projects delivered with confidence", benefits: [
    { t: "Expertise", d: "Certified specialists on your side." },
    { t: "Reliability", d: "Proven delivery methodology." },
    { t: "Integration", d: "Solutions connected to your IS." },
    { t: "Adoption", d: "Teams trained and autonomous." },
    { t: "Security", d: "Controlled deployments." },
    { t: "Durability", d: "Solutions that evolve with you." }
  ], images: ["/images/team-meeting.jpg", "/images/circuit.jpg", "/images/keyboard.jpg", "/images/server-room.jpg", "/images/data-analysis.jpg", "/images/meeting.jpg"] },
  "support-maintenance": { title: "Keep your solutions performing", description: "Ensure the availability, security and durable evolution of your solutions with support and maintenance close to your teams.", seoTitle: "Solution support & maintenance in Algeria | CaptureDoc", seoDescription: "Support & maintenance in Algeria: CaptureDoc ensures the availability, security and durable evolution of your solutions.", heroImage: "/images/server-room.jpg", stages: [
    { t: "Monitor", d: "Watch your platforms" },
    { t: "Respond", d: "Resolve incidents fast" },
    { t: "Maintain", d: "Keep systems up to date" },
    { t: "Improve", d: "Evolve continuously" }
  ], challengeTitle: "When continuity becomes critical", challenges: [
    { t: "Availability", d: "Solutions that must run every day." },
    { t: "Incidents", d: "Issues that must be resolved quickly." },
    { t: "Evolving platforms", d: "Systems to keep current." },
    { t: "Security", d: "Vulnerabilities and patches to manage." },
    { t: "Changing needs", d: "Adjustments as your business evolves." },
    { t: "Internal capacity", d: "Teams that can't cover everything." }
  ], approachTitle: "Support designed for your operations", approach: [
    { t: "Supervision", d: "Monitor the health of your solutions." },
    { t: "Incident management", d: "Diagnose and resolve quickly." },
    { t: "Preventive maintenance", d: "Anticipate issues before they hit." },
    { t: "Updates & upgrades", d: "Keep platforms current." },
    { t: "Functional support", d: "Answer your teams' questions." },
    { t: "Continuous improvement", d: "Optimize your solutions over time." }
  ], casesTitle: "Support for every need", cases: [
    { t: "Technical support", d: "Expert help when you need it." },
    { t: "Incident management", d: "Fast diagnosis and resolution." },
    { t: "Platform monitoring", d: "Watch performance continuously." },
    { t: "Updates management", d: "Keep solutions current." },
    { t: "Security maintenance", d: "Apply patches and controls." },
    { t: "Functional support", d: "Assist your users daily." },
    { t: "Performance optimization", d: "Improve speed and reliability." },
    { t: "Evolution services", d: "Adapt solutions to new needs." }
  ], benefitTitle: "Peace of mind, every day", benefits: [
    { t: "Availability", d: "Solutions that keep running." },
    { t: "Responsiveness", d: "Fast answers to incidents." },
    { t: "Security", d: "Patched, monitored platforms." },
    { t: "Continuity", d: "Uninterrupted operations." },
    { t: "Proximity", d: "Support close to your teams." },
    { t: "Durability", d: "Solutions that stay performant." }
  ], images: ["/images/team-meeting.jpg", "/images/circuit.jpg", "/images/keyboard.jpg", "/images/server-room.jpg", "/images/data-analysis.jpg", "/images/meeting.jpg"] }
};

export const home: HomeData = {
  ticker: ["120 projects", "Since 2010", "14 countries", "5 Awards", "Master VAD (Value-Added Distributor) MENA Tungsten Automation", "15 Partners"],
  expertiseCards: [
    { t: "Process orchestration & workflow", d: "Connect your processes, applications and teams in intelligent, fluid journeys.", slug: "workflow-orchestration" },
    { t: "Intelligent Document Processing (IDP/OCR)", d: "Use AI to understand, extract and automatically turn your documents into data.", slug: "intelligent-document-processing" },
    { t: "Electronic signature", d: "Accelerate your end-to-end journeys with a simple, secure and reliable e-signature.", slug: "signature-electronique" },
    { t: "Robotic Process Automation (RPA)", d: "Entrust repetitive tasks to software robots and focus your teams on what matters.", slug: "rpa" },
    { t: "Facial recognition & liveness detection", d: "Secure your digital journeys with intelligent, reliable biometric authentication.", slug: "reconnaissance-faciale" },
    { t: "Business Intelligence & Analytics", d: "Make your data talk to reveal trends, inform decisions and anticipate opportunities.", slug: "business-intelligence" },
    { t: "Enterprise Content Management (ECM/GED)", d: "Turn your content into intelligent, accessible, secure and usable assets.", slug: "enterprise-content-management" },
    { t: "Digitization & archiving", d: "Move from paper documents to digital heritage with intelligent, durable document management.", slug: "numerisation-archivage" }
  ],
  countries: [
    { id: "algeria", name: "Algeria", role: "HQ & delivery center", details: "CaptureDoc headquarters — our main center of expertise, at the heart of our regional and international reach." },
    { id: "tunisia", name: "Tunisia", role: "", details: "An active presence serving our partners, businesses and local organizations." },
    { id: "egypt", name: "Egypt", role: "", details: "A presence developed through our partners around digital transformation projects, AI-based business process automation and Electronic Document Management in B2B and B2G." },
    { id: "senegal", name: "Senegal", role: "", details: "An active presence serving our partners, businesses and local organizations." },
    { id: "congo", name: "Congo-Brazzaville", role: "", details: "A presence developed through our partners around digital transformation, AI-based process automation and EDM projects in B2B and B2G." },
    { id: "drc", name: "Democratic Republic of the Congo", role: "", details: "A presence developed through our partners around digital transformation, AI-based process automation and EDM projects in B2B and B2G." },
    { id: "saudi", name: "Saudi Arabia", role: "", details: "A presence developed through our partners around digital transformation, AI-based process automation and EDM projects in B2B and B2G." },
    { id: "uae", name: "United Arab Emirates", role: "", details: "Projects delivered in 2024 and 2025 through our partners around digital transformation, AI-based process automation and EDM in B2B." },
    { id: "jordan", name: "Jordan", role: "", details: "A presence in the Levant serving digitalization and process optimization projects." },
    { id: "uk", name: "United Kingdom", role: "", details: "A presence serving digitalization projects and technology partnerships." },
    { id: "france", name: "France", role: "", details: "A presence serving digitalization projects and technology partnerships." },
    { id: "germany", name: "Germany", role: "", details: "A presence serving digitalization projects and technology partnerships." },
    { id: "portugal", name: "Portugal", role: "", details: "A presence serving digitalization projects and technology partnerships." },
    { id: "nigeria", name: "Nigeria", role: "", details: "A presence developed through our partners around digital transformation and business process automation projects." }
  ],
  cases: [
    {
      logo: "/clients/ooredoo.png", badge: "telecom",
      quote: "We chose Kofax because it gave us the flexibility to cover the end-to-end capture and activation process from a single platform.",
      stats: [{ v: "3,200+h", l: "customers served" }, { v: "4.0X", l: "faster diagnostics" }, { v: "6X", l: "faster case handling" }],
      person: "Imad Sousou", personTitle: "CTO at Ooredoo Algeria", personImage: "/images/imad-sousou.png",
      pdf: "https://www.tungstenautomation.fr/-/media/files/case-studies/fr/cs_ooredoo_fr.pdf"
    },
    {
      logo: "/clients/societe-generale.png", badge: "banking",
      quote: "With CaptureDoc, Société Générale Algérie transformed its customer onboarding — from 30 days to 15 minutes — with AI-powered Tungsten solutions, saving over 1,600 person-days a year.",
      stats: [{ v: "30d → 15min", l: "customer onboarding" }, { v: "1,600+", l: "person-days saved / year" }, { v: "AI", l: "Tungsten solutions" }],
      person: "Tewfik Medani", personTitle: "CIO, Société Générale Algérie", personImage: "/images/tewfik-medani.png",
      pdf: "https://www.tungstenautomation.fr/case-studies/societe-generale-algerie-reduces-customer-onboarding-from-weeks-to-15-minutes"
    }
  ],
  awards: [
    { title: "Most innovative software", provider: "Wacom", details: "Germany 2023" },
    { title: "AI onboarding excellence", provider: "Kofax", details: "California 2022" },
    { title: "Solution of the year", provider: "Kofax", details: "California 2019" },
    { title: "Best mobile capture", provider: "Kofax", details: "Florida 2016" }
  ],
  teamCards: [
    { t: "Master VAD Distributor & reference technologies", d: "As Master VAD (Value-Added Distributor) for the MENA region of Tungsten Automation and Xerox DocuShare, we bring cutting-edge AI, intelligent capture and document management technologies within reach of enterprises — recognized as market leaders by Gartner and IDC." },
    { t: "Data sovereignty & compliance", d: "Our solutions can be deployed fully on-premise, giving our clients total control over their data and infrastructure. They are designed to meet local security, confidentiality and archiving requirements, including compliance with law 18-07 and AGCE certification requirements." },
    { t: "Certified expertise & regional reach", d: "Founded in 2010, CaptureDoc capitalizes on over 15 years of experience in digitalization and process automation. Our team of 50+ certified experts now supports more than 50 major accounts across 13 countries, bringing technology expertise, consulting and local support." }
  ],
  faq: [
    { q: "What solutions does CaptureDoc offer?", a: "CaptureDoc designs and deploys document transformation solutions: document capture, Intelligent Document Processing (OCR), electronic signature, RPA process automation, facial recognition, Business Intelligence, ECM/EDM, as well as digitization and archiving services. Every solution is adapted to your business tools and your organization." },
    { q: "Which sectors does CaptureDoc serve?", a: "We support the banking, telecommunications, insurance, healthcare, transport and logistics sectors, as well as public administrations and agencies. Our consulting teams analyze your business processes to build solutions specific to each sector." },
    { q: "Does my data stay in Algeria under my control?", a: "Yes. Our solutions can be deployed fully on-premise, guaranteeing total control over your data and infrastructure. They are designed to meet local security, confidentiality and archiving requirements, in compliance with law 18-07 and AGCE certification requirements." },
    { q: "How does a project with CaptureDoc work?", a: "We start with a diagnostic and consulting phase to identify your priority challenges, then we configure and deploy the chosen solutions, integrating with your existing systems and training your teams. Our certified experts then provide local support and durable support/maintenance." }
  ]
};

export const about: AboutData = {
  pillars: [
    { t: "Proximity", d: "We listen to your challenges to build, by your side, solutions that truly make a difference." },
    { t: "Useful innovation", d: "We turn the most relevant technologies into simple, reliable and concrete answers." },
    { t: "High standards", d: "Every project is carried out with rigor, security and a constant focus on durable impact." },
    { t: "Team spirit", d: "Our experts share their know-how to move your teams and organizations forward." }
  ],
  timeline: [
    { t: "2010 — The beginning", d: "CaptureDoc was born with an ambition: put digitalization technologies at the service of enterprises and their business processes." },
    { t: "An expanding expertise", d: "Over the years, our expertise grew from document capture to content management, process automation and data intelligence." },
    { t: "A continuous transformation", d: "Technology evolution naturally led us to new fields such as AI, facial recognition, intelligent document processing and advanced automation." },
    { t: "Today", d: "CaptureDoc supports organizations across several sectors and countries, with an approach combining reference technologies, local expertise and close support." }
  ],
  stats: ["15 years in business", "13+ countries", "50+ experts"]
};
