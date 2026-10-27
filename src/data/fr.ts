import type { DetailPage, IndustryPage, HomeData, AboutData } from './types';

export const expertises: Record<string, DetailPage> = {
  "workflow-orchestration": { title: "Orchestrez vos processus. Accélérez votre performance.", description: "Connectez vos systèmes, automatisez vos processus et coordonnez vos équipes dans des workflows intelligents, de bout en bout.", seoTitle: "Orchestration des processus et workflow en Algérie | CaptureDoc", seoDescription: "Orchestrez vos workflows en Algérie : connectez vos systèmes, automatisez vos processus et pilotez vos opérations de bout en bout.", heroImage: "/images/team-meeting.jpg", stages: [
    { t: "Concevoir", d: "Modélisez vos processus" },
    { t: "Connecter", d: "Faites dialoguer vos systèmes" },
    { t: "Automatiser", d: "Réduisez les tâches manuelles" },
    { t: "Garder le contrôle", d: "Gardez le contrôle de vos processus" }
  ], challengeTitle: "Quand les processus deviennent trop complexes", challenges: [
    { t: "Processus fragmentés", d: "Des applications et équipes qui fonctionnent en silos." },
    { t: "Tâches manuelles", d: "Des opérations répétitives qui ralentissent vos équipes." },
    { t: "Manque de visibilité", d: "Des processus difficiles à suivre étape par étape." },
    { t: "Multiplication des systèmes", d: "Des informations dispersées entre plusieurs outils." },
    { t: "Délais opérationnels", d: "Des validations qui ralentissent vos opérations." },
    { t: "Difficulté à faire évoluer les processus", d: "Des workflows rigides face aux nouveaux besoins." }
  ], approachTitle: "L’intelligence au cœur de vos processus", approach: [
    { t: "Modélisation des processus", d: "Concevez et standardisez vos parcours métier." },
    { t: "Orchestration de bout en bout", d: "Connectez les étapes, systèmes et équipes." },
    { t: "Intégration des systèmes", d: "Reliez vos applications et vos données." },
    { t: "Gestion des règles métier", d: "Automatisez les décisions selon vos règles." },
    { t: "Gestion des tâches", d: "Distribuez et suivez les actions efficacement." },
    { t: "Suivi & pilotage", d: "Mesurez la performance de vos parcours." }
  ], casesTitle: "Des processus métier réinventés par l’orchestration", cases: [
    { t: "Onboarding client", d: "Orchestrez les contrôles et validations." },
    { t: "Circuits de validation", d: "Fluidifiez les processus de décision." },
    { t: "Gestion des demandes", d: "Accélérez le traitement des requêtes." },
    { t: "Gestion des dossiers", d: "Un processus unique pour chaque dossier." },
    { t: "Traitement documentaire", d: "Transformez les documents en actions." },
    { t: "Automatisation inter-applications", d: "Connectez vos applications sans rupture." },
    { t: "Processus RH", d: "Simplifiez les parcours collaborateurs." },
    { t: "Processus P2P", d: "Automatisez les achats et validations." }
  ], benefitTitle: "Plus qu’un workflow : un processus intelligent", benefits: [
    { t: "Productivité", d: "Réduisez les tâches manuelles." },
    { t: "Rapidité", d: "Accélérez l’exécution des processus." },
    { t: "Fiabilité", d: "Standardisez vos opérations." },
    { t: "Visibilité", d: "Suivez vos processus de bout en bout." },
    { t: "Traçabilité", d: "Conservez chaque étape et décision." },
    { t: "Agilité", d: "Faites évoluer vos processus métier." }
  ], images: [
    "/images/team-meeting.jpg",
    "/images/circuit.jpg",
    "/images/keyboard.jpg",
    "/images/strategy.jpg",
    "/images/meeting.jpg",
    "/images/server-room.jpg"
  ] },
  "intelligent-document-processing": { title: "Transformez vos documents en données intelligentes", description: "Automatisez la capture, l’extraction et la compréhension de vos documents grâce à l’IA et à l’Intelligent Document Processing.", seoTitle: "Intelligent Document Processing (IDP) et OCR en Algérie | CaptureDoc", seoDescription: "Automatisez la capture, l’OCR et l’extraction de données documentaires en Algérie avec CaptureDoc.", heroImage: "/images/lawyer-documents.jpg", stages: [
    { t: "Capturer", d: "Capturez tous vos documents" },
    { t: "Comprendre", d: "Identifiez les informations importantes" },
    { t: "Extraire", d: "Transformez les documents en données" },
    { t: "Exploiter", d: "Déclenchez les bonnes actions" }
  ], challengeTitle: "Quand les documents ralentissent vos opérations", challenges: [
    { t: "Volumes documentaires", d: "Des milliers de documents à traiter quotidiennement." },
    { t: "Traitements manuels", d: "Des opérations longues pour saisir et contrôler." },
    { t: "Documents hétérogènes", d: "Des formats multiples difficiles à exploiter." },
    { t: "Données non structurées", d: "Des informations importantes peu accessibles." },
    { t: "Risques d’erreur", d: "Des erreurs de saisie ou d’interprétation." },
    { t: "Délais de traitement", d: "Des processus ralentis par les contrôles manuels." }
  ], approachTitle: "L’intelligence au service de vos documents", approach: [
    { t: "Capture intelligente", d: "Collectez et préparez vos documents." },
    { t: "Classification automatique", d: "Orientez chaque document au bon traitement." },
    { t: "Extraction intelligente", d: "Extrayez les données pertinentes." },
    { t: "Compréhension contextuelle", d: "Interprétez les informations métier." },
    { t: "Intégration aux processus", d: "Transmettez les données aux systèmes existants." },
    { t: "Contrôle & validation", d: "Fiabilisez les informations extraites." }
  ], casesTitle: "Des documents transformés en données exploitables", cases: [
    { t: "Onboarding & KYC", d: "Automatisez les dossiers d’entrée en relation." },
    { t: "Factures fournisseurs", d: "Automatisez le traitement des factures." },
    { t: "Dossiers de crédit", d: "Accélérez l’analyse des demandes." },
    { t: "Courrier entrant", d: "Classez et distribuez chaque courrier." },
    { t: "Contrats & documents juridiques", d: "Exploitez le contenu de vos contrats." },
    { t: "Documents administratifs", d: "Réduisez les traitements manuels." },
    { t: "Dossiers d’assurance", d: "Accélérez les opérations de gestion." },
    { t: "Contrôle documentaire", d: "Renforcez la fiabilité des données." }
  ], benefitTitle: "Faites de vos documents une source de valeur", benefits: [
    { t: "Productivité", d: "Réduisez les opérations de saisie." },
    { t: "Rapidité", d: "Traitez vos documents plus vite." },
    { t: "Fiabilité", d: "Limitez les erreurs humaines." },
    { t: "Flexibilité", d: "Adaptez les règles à vos besoins." },
    { t: "Automatisation", d: "Déclenchez les bonnes actions." },
    { t: "Exploitabilité", d: "Transformez vos contenus en données." }
  ], images: [
    "/images/keyboard.jpg",
    "/images/circuit.jpg",
    "/images/server-room.jpg",
    "/images/cityscape.jpg",
    "/images/data-analysis.jpg",
    "/images/team-meeting.jpg"
  ] },
  "signature-electronique": { title: "Signez plus vite. Signez en toute confiance.", description: "Digitalisez vos parcours de signature et permettez à vos clients, collaborateurs et partenaires de signer leurs documents simplement, rapidement et en toute sécurité.", seoTitle: "Signature électronique sécurisée en Algérie | CaptureDoc", seoDescription: "Accélérez la signature électronique de vos documents en Algérie avec des parcours simples, sécurisés et traçables.", heroImage: "/images/handshake.jpg", stages: [
    { t: "Préparer", d: "Préparez vos documents" },
    { t: "Envoyer", d: "Envoyez pour signature" },
    { t: "Signer", d: "Offrez une expérience simple" },
    { t: "Tracer", d: "Sécurisez chaque étape" }
  ], challengeTitle: "Quand la signature devient un frein au parcours", challenges: [
    { t: "Documents papier", d: "Des processus encore dépendants de l’impression." },
    { t: "Délais de signature", d: "Des dossiers bloqués dans l’attente de validation." },
    { t: "Parcours fragmentés", d: "Des échanges entre plusieurs canaux et outils." },
    { t: "Suivi complexe", d: "Une visibilité limitée sur l’état des signatures." },
    { t: "Risques opérationnels", d: "Des erreurs ou oublis dans les circuits." },
    { t: "Exigences de conformité", d: "Des besoins croissants de preuve et de traçabilité." }
  ], approachTitle: "La signature au cœur de vos parcours digitaux", approach: [
    { t: "Préparation automatisée", d: "Générez et préparez vos documents." },
    { t: "Circuits de signature", d: "Orchestrez les signataires et validations." },
    { t: "Expérience digitale", d: "Offrez un parcours clair et accessible." },
    { t: "Sécurité", d: "Protégez les signatures et identités." },
    { t: "Traçabilité", d: "Conservez les preuves de chaque action." },
    { t: "Intégration métier", d: "Connectez la signature à vos processus." }
  ], casesTitle: "Des cas d’usage pour accélérer vos processus", cases: [
    { t: "Onboarding & KYC", d: "Finalisez les parcours d’entrée en relation." },
    { t: "Ouverture de compte", d: "Simplifiez les dossiers bancaires." },
    { t: "Crédit & financement", d: "Accélérez les validations client." },
    { t: "Assurance & souscription", d: "Digitalisez les contrats et avenants." },
    { t: "Ressources humaines", d: "Signez les documents collaborateurs." },
    { t: "Achats & fournisseurs", d: "Sécurisez les engagements partenaires." },
    { t: "Validation interne", d: "Fluidifiez vos circuits d’approbation." }
  ], benefitTitle: "Une signature qui accélère vos processus", benefits: [
    { t: "Expérience", d: "Simplifiez les démarches de vos clients." },
    { t: "Rapidité", d: "Réduisez les délais de contractualisation." },
    { t: "Sécurité", d: "Renforcez la sécurité des échanges." },
    { t: "Conformité", d: "Respectez vos exigences réglementaires." },
    { t: "Traçabilité", d: "Suivez chaque étape du processus." },
    { t: "Productivité", d: "Éliminez les manipulations manuelles." }
  ], images: [
    "/images/writing-blue.jpg",
    "/images/lawyer-documents.jpg",
    "/images/handshake.jpg",
    "/images/cityscape.jpg",
    "/images/mobile-analytics.jpg",
    "/images/keyboard.jpg"
  ] },
  "rpa": { title: "Automatisez les tâches. Libérez vos équipes.", description: "Automatisez les opérations répétitives et à forte volumétrie pour améliorer la productivité, réduire les erreurs et accélérer vos processus métier.", seoTitle: "RPA : automatisation robotisée des processus en Algérie | CaptureDoc", seoDescription: "Automatisez les tâches répétitives avec la RPA en Algérie et accélérez vos processus métier avec CaptureDoc.", heroImage: "/images/keyboard.jpg", stages: [
    { t: "Identifier", d: "Identifiez les tâches automatisables" },
    { t: "Automatiser", d: "Confiez les tâches aux robots" },
    { t: "Automatiser à grande échelle", d: "Orchestrez une opération simple" },
    { t: "Piloter", d: "Mesurez la performance" }
  ], challengeTitle: "Quand les tâches répétitives mobilisent vos équipes", challenges: [
    { t: "Saisie manuelle", d: "Des collaborateurs mobilisés sur des opérations sans valeur ajoutée." },
    { t: "Tâches répétitives", d: "Des traitements identiques réalisés quotidiennement." },
    { t: "Erreurs humaines", d: "Des erreurs de saisie ou de manipulation difficiles à éviter." },
    { t: "Systèmes existants", d: "Des applications parfois difficiles ou coûteuses à faire évoluer." },
    { t: "Volumes importants", d: "Des opérations qui nécessitent de nombreuses heures de travail." },
    { t: "Manque de productivité", d: "Des équipes qui consacrent leur temps à l’exécution." }
  ], approachTitle: "L’automatisation au service de vos équipes", approach: [
    { t: "Analyse des processus", d: "Identifiez les processus à automatiser." },
    { t: "Automatisation des tâches", d: "Automatisez les interactions entre applications." },
    { t: "Traitement des données", d: "Automatisez collecte, saisie et transmission." },
    { t: "Gestion des exceptions", d: "Supervisez les cas nécessitant une intervention." },
    { t: "Supervision & pilotage", d: "Suivez l’activité de vos robots." },
    { t: "Exécution planifiée", d: "Déclenchez les traitements au bon moment." }
  ], casesTitle: "Des opérations automatisées de bout en bout", cases: [
    { t: "Saisie & transfert de données", d: "Éliminez les ressaisies manuelles." },
    { t: "Back-office bancaire", d: "Automatisez les opérations administratives." },
    { t: "Rapprochements", d: "Comparez automatiquement les informations." },
    { t: "Reporting", d: "Accélérez la consolidation des données." },
    { t: "Ressources humaines", d: "Automatisez les processus collaborateurs." },
    { t: "Finance & comptabilité", d: "Automatisez les traitements récurrents." },
    { t: "Service client", d: "Accélérez les demandes courantes." },
    { t: "Contrôles opérationnels", d: "Automatisez les vérifications de gestion." }
  ], benefitTitle: "Des robots au service de votre performance", benefits: [
    { t: "Productivité", d: "Libérez du temps pour vos équipes." },
    { t: "Rapidité", d: "Exécutez vos opérations plus vite." },
    { t: "Fiabilité", d: "Réduisez les erreurs de traitement." },
    { t: "Disponibilité", d: "Faites fonctionner vos robots en continu." },
    { t: "Valeur métier", d: "Concentrez les équipes sur l’essentiel." },
    { t: "Scalabilité", d: "Répondez aux pics d’activité." }
  ], images: [
    "/images/lawyer-documents.jpg",
    "/images/writing-blue.jpg",
    "/images/keyboard.jpg",
    "/images/server-room.jpg",
    "/images/mobile-analytics.jpg",
    "/images/data-analysis.jpg"
  ] },
  "reconnaissance-faciale": { title: "Sécurisez l’identité. Renforcez la confiance.", description: "Vérifiez l’identité de vos utilisateurs grâce à la reconnaissance faciale et à la détection de vie, directement intégrées à vos parcours digitaux.", seoTitle: "Reconnaissance faciale et détection de vie en Algérie | CaptureDoc", seoDescription: "Sécurisez la vérification d’identité en Algérie avec la reconnaissance faciale et la détection de vie.", heroImage: "/images/tech-concept.jpg", stages: [
    { t: "Capturer", d: "Capturez le visage" },
    { t: "Vérifier", d: "Vérifiez l’identité" },
    { t: "Détecter", d: "Automatisez la décision" },
    { t: "Piloter", d: "Mesurez la performance" }
  ], challengeTitle: "Quand vérifier l’identité devient essentiel", challenges: [
    { t: "Fraude à l’identité", d: "Des tentatives d’utilisation d’identités ou de documents frauduleux." },
    { t: "Parcours à distance", d: "Des utilisateurs à vérifier sans présence physique." },
    { t: "Usurpation", d: "Des risques liés à l’utilisation frauduleuse d’une identité." },
    { t: "Expérience utilisateur", d: "Des contrôles qui doivent rester simples et rapides." },
    { t: "Sécurité", d: "Des parcours nécessitant des mécanismes renforcés." },
    { t: "Confiance", d: "La nécessité de garantir que l’utilisateur est bien celui qu’il prétend être." }
  ], approachTitle: "La biométrie au service de vos parcours digitaux", approach: [
    { t: "Capture faciale", d: "Intégrez la capture dans vos parcours." },
    { t: "Vérification biométrique", d: "Comparez les caractéristiques faciales." },
    { t: "Liveness Detection", d: "Vérifiez la présence d’une personne réelle." },
    { t: "Analyse automatisée", d: "Traitez les contrôles sans intervention manuelle." },
    { t: "Intégration API", d: "Connectez la biométrie à vos applications." },
    { t: "Traçabilité", d: "Conservez les preuves de vérification." }
  ], casesTitle: "Des identités vérifiées au cœur de vos parcours", cases: [
    { t: "Ouverture de compte à distance", d: "Vérifiez chaque nouveau client." },
    { t: "Onboarding & KYC", d: "Sécurisez l’entrée en relation." },
    { t: "Souscription digitale", d: "Simplifiez les démarches en ligne." },
    { t: "Activation de services", d: "Contrôlez l’identité sans friction." },
    { t: "Contrôle d’accès", d: "Sécurisez les accès sensibles." },
    { t: "Lutte contre la fraude", d: "Détectez les incohérences." },
    { t: "Vérification d’identité", d: "Validez les identités à distance." },
    { t: "Parcours administratifs digitaux", d: "Protégez les services en ligne." }
  ], benefitTitle: "La confiance au cœur de vos parcours", benefits: [
    { t: "Sécurité", d: "Renforcez vos contrôles." },
    { t: "Fiabilité", d: "Vérifiez des identités authentiques." },
    { t: "Rapidité", d: "Réduisez les délais de contrôle." },
    { t: "Automatisation", d: "Décidez plus vite." },
    { t: "Confiance", d: "Rassurez vos utilisateurs." },
    { t: "Expérience", d: "Proposez un parcours fluide." }
  ], images: [
    "/images/tech-concept.jpg",
    "/images/cityscape.jpg",
    "/images/server-room.jpg",
    "/images/handshake.jpg",
    "/images/mobile-analytics.jpg",
    "/images/circuit.jpg"
  ] },
  "business-intelligence": { title: "Transformez vos données en décisions intelligentes", description: "Centralisez vos données, visualisez vos indicateurs et exploitez vos informations pour mieux comprendre, décider et anticiper.", seoTitle: "Business Intelligence et analytics en Algérie | CaptureDoc", seoDescription: "Transformez vos données en décisions avec la Business Intelligence en Algérie : tableaux de bord, indicateurs et analytics.", heroImage: "/images/data-analysis.jpg", stages: [
    { t: "Collecter", d: "Centralisez vos données" },
    { t: "Structurer", d: "Donnez du sens à vos données" },
    { t: "Visualiser", d: "Rendez vos données visibles" },
    { t: "Décider", d: "Décidez avec plus de précision" }
  ], challengeTitle: "Quand les données existent mais restent difficiles à exploiter", challenges: [
    { t: "Données dispersées", d: "Des informations réparties dans plusieurs applications." },
    { t: "Reporting manuel", d: "Des équipes qui consacrent du temps à consolider les données." },
    { t: "Données hétérogènes", d: "Des sources et formats différents compliquent l’analyse." },
    { t: "Décisions tardives", d: "Des indicateurs disponibles trop tard pour agir." },
    { t: "Indicateurs complexes", d: "Des tableaux de bord qui ne répondent pas aux besoins." }
  ], approachTitle: "L’intelligence au service de vos décisions", approach: [
    { t: "Intégration des données", d: "Connectez vos différentes sources." },
    { t: "Qualité & gouvernance", d: "Fiabilisez vos données." },
    { t: "Data analytics", d: "Analysez vos données pour anticiper." },
    { t: "Tableaux de bord", d: "Visualisez les indicateurs essentiels." },
    { t: "Reporting automatisé", d: "Diffusez vos rapports automatiquement." },
    { t: "Pilotage de la performance", d: "Mesurez et améliorez vos résultats." }
  ], casesTitle: "Des données qui éclairent chaque décision", cases: [
    { t: "Pilotage commercial", d: "Suivez les performances et les objectifs." },
    { t: "Performance opérationnelle", d: "Mesurez l’efficacité de vos processus." },
    { t: "Suivi des workflows", d: "Analysez les volumes et délais." },
    { t: "Risques & conformité", d: "Surveillez les indicateurs de contrôle." },
    { t: "Finance", d: "Centralisez les données financières." },
    { t: "Ressources humaines", d: "Analysez les données collaborateurs." },
    { t: "Expérience client", d: "Mesurez la qualité de vos parcours." },
    { t: "Management", d: "Donnez une vision consolidée." }
  ], benefitTitle: "La confiance au cœur de vos parcours", benefits: [
    { t: "Visibilité", d: "Accédez aux bons indicateurs." },
    { t: "Réactivité", d: "Décidez plus rapidement." },
    { t: "Fiabilité", d: "Utilisez des données fiables." },
    { t: "Productivité", d: "Automatisez vos reportings." },
    { t: "Pilotage", d: "Mesurez votre performance." },
    { t: "Anticipation", d: "Identifiez les tendances." }
  ], images: [
    "/images/data-analysis.jpg",
    "/images/stock-market.jpg",
    "/images/mobile-analytics.jpg",
    "/images/data-analysis-2.jpg",
    "/images/server-room.jpg",
    "/images/meeting.jpg"
  ] },
  "enterprise-content-management": { title: "Donnez une nouvelle dimension à vos contenus", description: "Centralisez, sécurisez et exploitez vos documents et contenus tout au long de leur cycle de vie.", seoTitle: "Enterprise Content Management (ECM/GED) en Algérie | CaptureDoc", seoDescription: "Centralisez, sécurisez et exploitez vos documents avec une solution ECM/GED en Algérie.", heroImage: "/images/server-room.jpg", stages: [
    { t: "Centraliser", d: "Unifiez vos contenus" },
    { t: "Organiser", d: "Structurez votre patrimoine documentaire" },
    { t: "Collaborer", d: "Facilitez la collaboration" },
    { t: "Conserver", d: "Préservez vos documents" }
  ], challengeTitle: "Quand l’information devient difficile à maîtriser", challenges: [
    { t: "Documents dispersés", d: "Des contenus répartis entre plusieurs systèmes." },
    { t: "Recherche complexe", d: "Des collaborateurs qui perdent du temps à retrouver l’information." },
    { t: "Versions multiples", d: "Des risques liés à l’utilisation de documents obsolètes." },
    { t: "Partage non maîtrisé", d: "Des échanges documentaires difficiles à contrôler." },
    { t: "Volumes croissants", d: "Un patrimoine documentaire qui augmente continuellement." },
    { t: "Conservation", d: "Des exigences croissantes de sécurité et de traçabilité." }
  ], approachTitle: "L’information au cœur de votre organisation", approach: [
    { t: "Gestion documentaire", d: "Centralisez vos contenus." },
    { t: "Classification & indexation", d: "Organisez automatiquement les informations." },
    { t: "Recherche intelligente", d: "Retrouvez rapidement vos documents." },
    { t: "Collaboration & validation", d: "Facilitez les échanges et validations." },
    { t: "Gestion du cycle de vie", d: "Maîtrisez les durées de conservation." },
    { t: "Sécurité & traçabilité", d: "Contrôlez les accès et les actions." }
  ], casesTitle: "Un patrimoine documentaire mieux maîtrisé", cases: [
    { t: "Dossiers clients", d: "Centralisez les informations clients." },
    { t: "Dossiers fournisseurs", d: "Regroupez les documents partenaires." },
    { t: "Gestion contractuelle", d: "Contrôlez le cycle de vie des contrats." },
    { t: "Ressources humaines", d: "Gérez les dossiers collaborateurs." },
    { t: "Courrier & documents entrants", d: "Centralisez et distribuez les flux." },
    { t: "Gestion administrative", d: "Facilitez les recherches et validations." },
    { t: "Collaboration documentaire", d: "Partagez les contenus utiles." },
    { t: "Archivage électronique", d: "Conservez vos documents de manière sécurisée." }
  ], benefitTitle: "Faites de votre information un véritable actif", benefits: [
    { t: "Accessibilité", d: "Retrouvez rapidement vos informations." },
    { t: "Productivité", d: "Réduisez le temps de recherche." },
    { t: "Collaboration", d: "Facilitez le partage de travail." },
    { t: "Sécurité", d: "Contrôlez les accès." },
    { t: "Traçabilité", d: "Suivez les actions sur vos documents." },
    { t: "Maîtrise", d: "Gérez le cycle de vie documentaire." }
  ], images: [
    "/images/lawyer-documents.jpg",
    "/images/server-room.jpg",
    "/images/meeting.jpg",
    "/images/handshake.jpg",
    "/images/data-analysis.jpg",
    "/images/writing-blue.jpg"
  ] },
  "numerisation-archivage": { title: "Donnez une nouvelle vie à vos archives", description: "Transformez vos documents papier en informations numériques accessibles, structurées et exploitables tout en maîtrisant leur conservation.", seoTitle: "Numérisation et archivage électronique en Algérie | CaptureDoc", seoDescription: "Numérisez, indexez et archivez vos documents en Algérie avec CaptureDoc.", heroImage: "/images/writing-blue.jpg", stages: [
    { t: "Préparer", d: "Préparez vos archives" },
    { t: "Numériser", d: "Transformez le papier en numérique" },
    { t: "Indexer", d: "Rendez vos documents accessibles" },
    { t: "Archiver", d: "Préservez votre patrimoine documentaire" }
  ], challengeTitle: "Quand le papier freine l’accès à l’information", challenges: [
    { t: "Volumes d’archives", d: "Des espaces physiques occupés par des volumes importants." },
    { t: "Recherche longue", d: "Des informations difficiles et longues à retrouver." },
    { t: "Risques de dégradation", d: "Des documents exposés au vieillissement et à la perte." },
    { t: "Accès limité", d: "Des documents physiques difficilement accessibles aux équipes." },
    { t: "Coûts de conservation", d: "Des coûts liés au stockage et à la gestion des archives." },
    { t: "Manque d’exploitabilité", d: "Des informations historiques difficiles à exploiter." }
  ], approachTitle: "Du document papier à l’information exploitable", approach: [
    { t: "Préparation documentaire", d: "Préparez les fonds documentaires." },
    { t: "Numérisation haute qualité", d: "Transformez vos documents physiques." },
    { t: "OCR & extraction", d: "Rendez les contenus recherchables." },
    { t: "Indexation", d: "Structurez les documents selon vos besoins." },
    { t: "Archivage électronique", d: "Conservez vos documents durablement." },
    { t: "Recherche & accès", d: "Retrouvez l’information au bon moment." }
  ], casesTitle: "Transformez vos archives en patrimoine accessible", cases: [
    { t: "Archives clients", d: "Numérisez et structurez les dossiers clients." },
    { t: "Archives administratives", d: "Digitalisez les documents administratifs." },
    { t: "Archives RH", d: "Préservez les dossiers collaborateurs." },
    { t: "Dossiers contractuels", d: "Accédez rapidement aux contrats." },
    { t: "Archives réglementaires", d: "Sécurisez les documents soumis à conservation." },
    { t: "Migration documentaire", d: "Transformez vos fonds existants." }
  ], benefitTitle: "Faites de votre information un véritable actif", benefits: [
    { t: "Accessibilité", d: "Accédez rapidement à vos archives." },
    { t: "Productivité", d: "Réduisez le temps de recherche." },
    { t: "Sécurité", d: "Protégez votre patrimoine documentaire." },
    { t: "Espace", d: "Réduisez la dépendance au papier." },
    { t: "Exploitabilité", d: "Transformez vos archives en informations." },
    { t: "Pérennité", d: "Préservez durablement vos documents." }
  ], images: [
    "/images/lawyer-documents.jpg",
    "/images/server-room.jpg",
    "/images/meeting.jpg",
    "/images/handshake.jpg",
    "/images/data-analysis.jpg",
    "/images/writing-blue.jpg"
  ] }
};

export const industries: Record<string, IndustryPage> = {
  "bancaire": { title: "Réinventez vos parcours bancaires grâce à l’intelligence et l’automatisation", description: "Digitalisez les dossiers clients, automatisez le KYC, sécurisez vos contrôles et accélérez la signature électronique de bout en bout.", seoTitle: "CaptureDoc | Digitalisation Bancaire — IA & KYC | Algérie", seoDescription: "Digitalisez vos dossiers clients, automatisez le KYC et accélérez la signature électronique pour vos parcours bancaires, en Algérie.", hero: [
    { t: "Digitalisation", s: "Digitalisez vos dossiers clients", d: "Capturez, numérisez et structurez automatiquement les documents pour accélérer vos parcours clients et opérations." },
    { t: "KYC intelligent", s: "Identifiez l’identité en toute simplicité", d: "Automatisez la vérification des documents d’identité et renforcez l’identification grâce à l’IA." },
    { t: "Conformité & sécurité", s: "Sécurisez vos parcours clients", d: "Automatisez les contrôles et assurez la traçabilité des opérations." },
    { t: "Signature électronique", s: "Finalisez vos parcours digitalement", d: "Faites signer vos documents de manière sécurisée et juridiquement probante." }
  ], challenges: [
    { t: "Processus manuels", s: "Des opérations chronophages qui mobilisent vos équipes.", d: null },
    { t: "Dossiers complexes", s: "Des volumes importants de documents à collecter et contrôler.", d: null },
    { t: "KYC & conformité", s: "Des exigences croissantes qui nécessitent plus de rigueur et de traçabilité.", d: null },
    { t: "Risques de fraude", s: "Des parcours qui doivent concilier rapidité et sécurité.", d: null },
    { t: "Délais de traitement", s: "Des processus qui ralentissent l’entrée en relation.", d: null },
    { t: "Expérience client", s: "Des parcours encore trop longs et fragmentés.", d: null }
  ], innovationTitle: "Un parcours plus simple pour votre client. Un processus plus intelligent pour votre banque.", useCasesTitle: "Des cas d’usage concrets pour simplifier, sécuriser et accélérer vos opérations.", useCases: [
    { t: "Onboarding & KYC", s: "Accélérez l’entrée en relation client", d: "Digitalisez la collecte des documents et vérifiez l’identité de vos clients à distance." },
    { t: "Ouverture de compte", s: "Simplifiez l’ouverture de compte", d: "Automatisez la constitution et la validation des dossiers." },
    { t: "Crédit & financement", s: "Accélérez le traitement des demandes", d: "Réduisez les délais grâce à l’extraction automatique des justificatifs." },
    { t: "Gestion des dossiers clients", s: "Un dossier client, une vision", d: "Centralisez les documents et informations clients." },
    { t: "Renforcez vos contrôles", s: "Réduisez les risques", d: "Améliorez la traçabilité et détectez les anomalies." },
    { t: "Contractualisation & signature", s: "Signez sans rupture de parcours", d: "Permettez à vos clients de finaliser leurs démarches à distance." }
  ], images: [
    "/images/lawyer-documents.jpg",
    "/images/online-payment.jpg",
    "/images/real-estate-agent.jpg",
    "/images/server-room.jpg",
    "/images/keyboard.jpg",
    "/images/cityscape.jpg"
  ], caseStudy: "banking" },
  "telecom": { title: "Accélérez vos opérations télécom grâce à l’intelligence et l’automatisation", description: "Automatisez vos processus, simplifiez l’onboarding, sécurisez les identités et améliorez l’expérience de vos clients.", seoTitle: "CaptureDoc | Automatisation Télécom — Onboarding & IA | Algérie", seoDescription: "Automatisez l’onboarding, sécurisez les identités et accélérez l’activation des services télécom, en Algérie.", hero: [
    { t: "Acquisition", s: "Accélérez l’acquisition client", d: "Digitalisez la collecte des documents et automatisez la constitution des dossiers clients." },
    { t: "Identité", s: "Sécurisez vos parcours clients", d: "Vérifiez les identités grâce à l’IA et renforcez la détection de vie." },
    { t: "Activation", s: "Accélérez l’activation des services", d: "Orchestrez les processus et réduisez les délais entre la souscription et l’activation." },
    { t: "Contractualisation", s: "Finalisez vos parcours digitalement", d: "Simplifiez la validation et la signature des contrats." }
  ], challenges: [
    { t: "Forte volumétrie", s: "Des millions d’opérations et de documents à traiter.", d: null },
    { t: "Acquisition client", s: "Des parcours qui doivent être rapides et fluides.", d: null },
    { t: "Fraude & identité", s: "Des risques croissants nécessitant des contrôles renforcés.", d: null },
    { t: "Processus fragmentés", s: "Des systèmes et applications multiples à connecter.", d: null },
    { t: "Délais d’activation", s: "Des processus qui peuvent ralentir la mise en service.", d: null },
    { t: "Expérience client", s: "Des clients toujours plus exigeants et connectés.", d: null }
  ], innovationTitle: "Des opérations plus rapides. Des parcours plus fluides. Des clients mieux servis.", useCasesTitle: "Des cas d’usage concrets pour accélérer vos opérations et améliorer l’expérience client.", useCases: [
    { t: "Acquisition & onboarding", s: "Accélérez l’entrée en relation", d: "Digitalisez les dossiers et automatisez la vérification des informations clients." },
    { t: "Souscription", s: "Simplifiez la souscription", d: "Automatisez les étapes de collecte, de contrôle et de validation." },
    { t: "Accélérez la mise en service", s: "Activez plus vite", d: "Orchestrez les services pour réduire les délais de mise en service." },
    { t: "Gestion des contrats", s: "Simplifiez le cycle de vie client", d: "Centralisez les documents et automatisez les processus." },
    { t: "Lutte contre la fraude", s: "Renforcez vos contrôles", d: "Détectez plus efficacement les anomalies grâce à l’IA." },
    { t: "Signature électronique", s: "Signez sans rupture de parcours", d: "Digitalisez la contractualisation pour finaliser vos offres." }
  ], images: [
    "/images/server-room.jpg",
    "/images/online-payment.jpg",
    "/images/lawyer-documents.jpg",
    "/images/circuit.jpg",
    "/images/cityscape.jpg",
    "/images/mobile-analytics.jpg"
  ], caseStudy: "telecom" },
  "assurance": { title: "Réinventez l’expérience assurance grâce à l’intelligence et l’automatisation", description: "Digitalisez les dossiers, accélérez la gestion des sinistres, automatisez les contrôles et fluidifiez vos parcours clients.", seoTitle: "CaptureDoc | Digitalisation Assurance — Sinistres & IA | Algérie", seoDescription: "Digitalisez vos dossiers, accélérez la gestion des sinistres et automatisez vos contrôles pour des parcours clients plus fluides, en Algérie.", hero: [
    { t: "Digitalisation", s: "Digitalisez vos dossiers d’assurance", d: "Capturez, extrayez et structurez automatiquement les informations." },
    { t: "Souscription intelligente", s: "Simplifiez la souscription", d: "Automatisez la collecte et l’analyse des informations." },
    { t: "Gestion des sinistres", s: "Accélérez le traitement des sinistres", d: "Automatisez la collecte, l’analyse et le contrôle des pièces." },
    { t: "Indemnisation & signature", s: "Finalisez vos parcours digitalement", d: "Fluidifiez les échanges et la signature des documents." }
  ], challenges: [
    { t: "Processus manuels", s: "Des opérations chronophages qui mobilisent vos équipes.", d: null },
    { t: "Volumes documentaires", s: "Des dossiers riches en pièces et justificatifs à traiter.", d: null },
    { t: "Gestion des sinistres", s: "Des délais qui impactent directement la satisfaction client.", d: null },
    { t: "Risque de fraude", s: "Des contrôles indispensables pour sécuriser les opérations.", d: null },
    { t: "Multiplication des échanges", s: "Des parcours fragmentés entre clients, agences et équipes.", d: null },
    { t: "Expérience client", s: "Des assurés qui attendent des démarches simples et fluides.", d: null }
  ], innovationTitle: "Des parcours plus fluides. Des décisions plus rapides. Une meilleure expérience client.", useCasesTitle: "Des cas d’usage concrets pour simplifier, sécuriser et accélérer vos opérations.", useCases: [
    { t: "Souscription & adhésion", s: "Accélérez l’entrée en relation", d: "Digitalisez la collecte des informations et automatisez la souscription." },
    { t: "Gestion des sinistres", s: "Accélérez l’indemnisation", d: "Automatisez la collecte et l’analyse des pièces." },
    { t: "Gestion des contrats", s: "Simplifiez le cycle de vie des contrats", d: "Centralisez les documents et automatisez les validations." },
    { t: "Gestion des dossiers clients", s: "Une vision complète du client", d: "Centralisez les documents et informations." },
    { t: "Lutte contre la fraude", s: "Renforcez vos contrôles", d: "Détectez plus efficacement les anomalies et comportements à risque." },
    { t: "Signature & contractualisation", s: "Signez sans rupture de parcours", d: "Digitalisez les processus contractuels grâce à la signature électronique." }
  ], images: [
    "/images/writing-blue.jpg",
    "/images/lawyer-documents.jpg",
    "/images/real-estate.jpg",
    "/images/server-room.jpg",
    "/images/meeting.jpg",
    "/images/mobile-analytics.jpg"
  ], caseStudy: null },
  "sante": { title: "Digitalisez vos parcours de santé grâce à l’intelligence et l’automatisation", description: "Digitalisez les démarches, simplifiez le traitement des dossiers et améliorez l’expérience citoyen tout en renforçant la sécurité et la traçabilité.", seoTitle: "CaptureDoc | Digitalisation Santé — IA & Sécurité | Algérie", seoDescription: "Digitalisez vos dossiers patients, automatisez vos processus administratifs et sécurisez les données de santé, en Algérie.", hero: [
    { t: "Dossiers patients", s: "Digitalisez vos dossiers", d: "Transformez les documents médicaux et administratifs en informations structurées." },
    { t: "Traitement intelligent", s: "Automatisez les processus", d: "Réduisez les tâches manuelles grâce à l’IA et à l’automatisation." },
    { t: "Sécurité & confidentialité", s: "Protégez les données sensibles", d: "Renforcez la sécurité, la traçabilité et le contrôle des informations de santé." },
    { t: "Parcours patient", s: "Simplifiez chaque étape", d: "Fluidifiez les démarches administratives pour offrir une meilleure expérience." }
  ], challenges: [
    { t: "Dossiers volumineux", s: "Une quantité importante de documents médicaux et administratifs.", d: null },
    { t: "Processus manuels", s: "Des équipes mobilisées par des tâches répétitives.", d: null },
    { t: "Informations dispersées", s: "Des données réparties entre plusieurs systèmes et services.", d: null },
    { t: "Confidentialité", s: "Des données sensibles qui nécessitent un niveau élevé de protection.", d: null },
    { t: "Traçabilité", s: "Des exigences fortes sur l’accès et le traitement des informations.", d: null },
    { t: "Expérience patient", s: "Des parcours administratifs qui doivent être plus simples et fluides.", d: null }
  ], innovationTitle: "Des processus plus intelligents. Des informations mieux exploitées.", useCasesTitle: "Des cas d’usage concrets pour simplifier les processus et améliorer l’expérience des professionnels et des patients.", useCases: [
    { t: "Dossier patient", s: "Un accès simplifié à l’information", d: "Centralisez et structurez les documents pour faciliter leur accès." },
    { t: "Admission & prise en charge", s: "Fluidifiez les parcours administratifs", d: "Digitalisez la collecte des informations et automatisez les dossiers." },
    { t: "Valorisez vos informations", s: "Gestion des documents médicaux", d: "Capturez et structurez automatiquement les documents médicaux." },
    { t: "Facturation & remboursement", s: "Accélérez le traitement des dossiers", d: "Automatisez l’extraction et le contrôle des informations nécessaires." },
    { t: "Gestion administrative", s: "Libérez vos équipes des tâches répétitives", d: "Automatisez les processus administratifs à forte volumétrie." },
    { t: "Gestion documentaire & archivage", s: "Sécurisez votre patrimoine documentaire", d: "Centralisez, protégez et conservez les documents." }
  ], images: [
    "/images/lawyer-documents.jpg",
    "/images/keyboard.jpg",
    "/images/server-room.jpg",
    "/images/circuit.jpg",
    "/images/mobile-analytics.jpg",
    "/images/cityscape.jpg"
  ], caseStudy: null },
  "transport-logistique": { title: "Optimisez vos flux grâce à l’intelligence et l’automatisation", description: "Digitalisez vos documents, automatisez vos opérations et fluidifiez vos processus pour gagner en rapidité, en visibilité et en efficacité.", seoTitle: "CaptureDoc | Transport & Logistique — Automatisation IA | Algérie", seoDescription: "Digitalisez vos documents, automatisez vos opérations et gagnez en traçabilité sur toute votre chaîne logistique, en Algérie.", hero: [
    { t: "Numérisation", s: "Digitalisez vos flux documentaires", d: "Transformez automatiquement vos documents et informations en données exploitables." },
    { t: "Traitement", s: "Accélérez vos opérations", d: "Automatisez le traitement des documents et des demandes." },
    { t: "Orchestration", s: "Connectez vos processus", d: "Coordonnez les systèmes, les équipes et les opérations tout au long de la chaîne logistique." },
    { t: "Traçabilité", s: "Gardez le contrôle de vos flux", d: "Centralisez les informations et assurez une traçabilité complète des opérations." }
  ], challenges: [
    { t: "Volumes documentaires", s: "Une multitude de documents à traiter quotidiennement.", d: null },
    { t: "Processus manuels", s: "Des opérations répétitives qui ralentissent les équipes.", d: null },
    { t: "Systèmes fragmentés", s: "Des applications et acteurs multiples à synchroniser.", d: null },
    { t: "Traçabilité", s: "Une visibilité essentielle sur chaque étape des opérations.", d: null },
    { t: "Délais opérationnels", s: "Chaque retard peut avoir un impact sur toute la chaîne.", d: null },
    { t: "Expérience client", s: "Des attentes croissantes en matière de rapidité et de visibilité.", d: null }
  ], innovationTitle: "Des opérations plus fluides. Une meilleure visibilité. Une performance durable.", useCasesTitle: "Des cas d’usage concrets pour automatiser vos opérations et améliorer votre performance.", useCases: [
    { t: "Gestion des documents transport", s: "Automatisez le traitement documentaire", d: "Extrayez et structurez automatiquement les informations issues des documents." },
    { t: "Gestion des commandes", s: "Accélérez le traitement des commandes", d: "Automatisez la collecte, le contrôle et la transmission des informations." },
    { t: "Facturation", s: "Simplifiez vos processus de facturation", d: "Automatisez le traitement des documents et réduisez les opérations manuelles." },
    { t: "Suivi des opérations", s: "Gagnez en visibilité", d: "Automatisez le traitement des documents et pilotez vos opérations." },
    { t: "Gestion des contrats", s: "Maîtrisez vos engagements", d: "Centralisez et sécurisez les documents contractuels." },
    { t: "Automatisation des opérations", s: "Libérez vos équipes", d: "Automatisez les tâches répétitives et les processus à forte volumétrie." }
  ], images: [
    "/images/lawyer-documents.jpg",
    "/images/keyboard.jpg",
    "/images/circuit.jpg",
    "/images/server-room.jpg",
    "/images/strategy.jpg",
    "/images/team-meeting.jpg"
  ], caseStudy: null },
  "gouvernement": { title: "Réinventez les services publics grâce à l’intelligence et l’automatisation", description: "Digitalisez les démarches, simplifiez le traitement des dossiers et améliorez l’expérience citoyen tout en renforçant la sécurité et la traçabilité.", seoTitle: "CaptureDoc | Dématérialisation Services Publics | Algérie", seoDescription: "Digitalisez les démarches administratives, accélérez le traitement des dossiers et améliorez l’expérience citoyen en toute sécurité, en Algérie.", hero: [
    { t: "Dématérialisation", s: "Digitalisez vos démarches", d: "Transformez les documents et démarches papier en parcours numériques simples et accessibles." },
    { t: "Traitement intelligent", s: "Automatisez vos dossiers", d: "Extrayez et structurez automatiquement les informations pour accélérer le traitement administratif." },
    { t: "Contrôle & conformité", s: "Renforcez vos contrôles", d: "Sécurisez les processus et assurez une meilleure traçabilité des opérations." },
    { t: "Service citoyen", s: "Simplifiez l’expérience citoyen", d: "Proposez des démarches plus rapides, plus fluides et accessibles à tous." }
  ], challenges: [
    { t: "Processus administratifs", s: "Des démarches encore largement dépendantes du papier.", d: null },
    { t: "Volumes documentaires", s: "Des milliers de dossiers à traiter et archiver.", d: null },
    { t: "Délais de traitement", s: "Des processus complexes qui ralentissent les démarches.", d: null },
    { t: "Traçabilité", s: "Des exigences fortes en matière de suivi et de contrôle.", d: null },
    { t: "Sécurité des données", s: "Des informations sensibles à protéger.", d: null },
    { t: "Expérience citoyen", s: "Des usagers qui attendent des services simples et accessibles.", d: null }
  ], innovationTitle: "Des démarches plus simples. Une administration plus agile.", useCasesTitle: "Des cas d’usage concrets pour simplifier les démarches et moderniser l’administration.", useCases: [
    { t: "Démarches administratives", s: "Simplifiez les démarches", d: "Digitalisez les formulaires et documents pour faciliter les demandes." },
    { t: "Gestion des dossiers", s: "Accélérez le traitement administratif", d: "Automatisez l’extraction et le traitement des informations contenues dans les dossiers." },
    { t: "Identité & contrôle", s: "Sécurisez les parcours", d: "Renforcez la vérification des identités et la sécurité des démarches." },
    { t: "Gestion documentaire", s: "Centralisez l’information", d: "Organisez et sécurisez les documents pour faciliter leur accès." },
    { t: "Courrier & documents entrants", s: "Automatisez le traitement des flux", d: "Capturez, classez et distribuez automatiquement les documents entrants." },
    { t: "Digitalisez les validations", s: "Fluidifiez les validations", d: "Simplifiez les circuits de validation et permettez la signature électronique." }
  ], images: [
    "/images/writing-blue.jpg",
    "/images/lawyer-documents.jpg",
    "/images/team-meeting.jpg",
    "/images/circuit.jpg",
    "/images/server-room.jpg",
    "/images/protocol-event.jpg"
  ], caseStudy: null }
};

export const services: Record<string, DetailPage> = {
  "conseil-expertise": { title: "Transformez vos enjeux en solutions", description: "Bénéficiez d’une expertise métier et technologique pour identifier les opportunités, définir la bonne stratégie et construire des solutions adaptées à vos objectifs.", seoTitle: "Conseil et expertise en transformation digitale en Algérie | CaptureDoc", seoDescription: "Conseil et expertise en Algérie : CaptureDoc vous aide à analyser vos processus, définir votre stratégie et sécuriser vos choix technologiques.", heroImage: "/images/strategy.jpg", stages: [
    { t: "Comprendre", d: "Comprenez vos enjeux" },
    { t: "Analyser", d: "Identifiez les opportunités" },
    { t: "Concevoir", d: "Construisez la bonne solution" },
    { t: "Décider", d: "Avancez avec une vision claire" }
  ], challengeTitle: "Quand les bonnes questions doivent précéder les bonnes technologies", challenges: [
    { t: "Besoins complexes", d: "Des enjeux métier qui nécessitent une analyse approfondie." },
    { t: "Choix technologiques", d: "De nombreuses technologies et approches possibles." },
    { t: "Processus à optimiser", d: "Des opportunités d’automatisation difficiles à identifier." },
    { t: "Systèmes existants", d: "Un environnement à prendre en compte dans chaque décision." },
    { t: "Investissements à sécuriser", d: "Des choix qui doivent produire une réelle valeur métier." },
    { t: "Vision à long terme", d: "Des solutions qui doivent évoluer avec l’organisation." }
  ], approachTitle: "L’expertise au service de vos décisions", approach: [
    { t: "Audit & diagnostic", d: "Analysez vos processus et identifiez les axes d’amélioration." },
    { t: "Étude de faisabilité", d: "Évaluez les solutions envisagées." },
    { t: "Conseil fonctionnel", d: "Traduisez vos enjeux en besoins structurés." },
    { t: "Conseil technologique", d: "Identifiez les technologies adaptées." },
    { t: "Architecture & stratégie", d: "Définissez une trajectoire cohérente." },
    { t: "Roadmap & accompagnement", d: "Priorisez les initiatives et passez à l’action." }
  ], casesTitle: "Une expertise pour chaque décision stratégique", cases: [
    { t: "Audit & diagnostic", d: "Analysez l’existant et les opportunités." },
    { t: "Business & Process Consulting", d: "Simplifiez vos processus métier." },
    { t: "Études & cadrage", d: "Structurez vos besoins et projets." },
    { t: "Architecture & urbanisation", d: "Concevez des architectures évolutives." },
    { t: "Conseil technologique", d: "Identifiez les technologies pertinentes." },
    { t: "Proof of Concept", d: "Validez une approche avant le passage à l’échelle." },
    { t: "Roadmap de transformation", d: "Construisez une trajectoire progressive." },
    { t: "Accompagnement à la décision", d: "Sécurisez vos choix technologiques et métier." }
  ], benefitTitle: "Une meilleure vision pour de meilleures décisions", benefits: [
    { t: "Clarté", d: "Transformez les problématiques en objectifs précis." },
    { t: "Pertinence", d: "Alignez technologie et besoins métier." },
    { t: "Maîtrise", d: "Réduisez les risques avant de vous engager." },
    { t: "Agilité", d: "Construisez une trajectoire évolutive." },
    { t: "Valeur", d: "Concentrez vos investissements sur l’impact." },
    { t: "Confiance", d: "Appuyez-vous sur une expertise éprouvée." }
  ], images: [
    "/images/team-meeting.jpg",
    "/images/circuit.jpg",
    "/images/keyboard.jpg",
    "/images/server-room.jpg",
    "/images/data-analysis.jpg",
    "/images/meeting.jpg"
  ] },
  "services-professionnels": { title: "De l’idée au déploiement, nous faisons avancer vos projets", description: "Bénéficiez d’une expertise technologique et métier pour concevoir, déployer et faire évoluer vos solutions, tout en développant les compétences de vos équipes.", seoTitle: "Services professionnels IT et déploiement en Algérie | CaptureDoc", seoDescription: "Services professionnels en Algérie : CaptureDoc conçoit, déploie et fait évoluer vos solutions pour sécuriser vos projets technologiques.", heroImage: "/images/team-meeting.jpg", stages: [
    { t: "Cadrer", d: "Analysez vos enjeux et définissez les objectifs." },
    { t: "Concevoir", d: "Transformez vos besoins en solution." },
    { t: "Déployer", d: "Passez de la conception à la réalité." },
    { t: "Transmettre", d: "Rendez vos équipes autonomes." }
  ], challengeTitle: "Une solution performante repose aussi sur une expertise adaptée", challenges: [
    { t: "Des enjeux métier", d: "Une expertise technologique et fonctionnelle adaptée." },
    { t: "Des solutions à intégrer", d: "Des solutions qui doivent s’intégrer à votre système." },
    { t: "Un déploiement exigeant", d: "Un projet qui respecte les contraintes techniques et métier." },
    { t: "Des équipes à accompagner", d: "Des équipes qui doivent maîtriser les nouvelles solutions." },
    { t: "Évolutions continues", d: "Des solutions qui doivent évoluer avec votre organisation." },
    { t: "Adoption durable", d: "Des usages qui doivent s’ancrer dans les équipes." }
  ], approachTitle: "Cadrer. Concevoir. Déployer. Transmettre.", approach: [
    { t: "Conseil fonctionnel & technique", d: "Analysez vos besoins et définissez une approche adaptée." },
    { t: "Conception & configuration", d: "Préparez les parcours fonctionnels et techniques." },
    { t: "Intégration & mise en œuvre", d: "Intégrez les solutions dans votre environnement." },
    { t: "Développement & personnalisation", d: "Adaptez la solution à vos besoins métier." },
    { t: "Tests & mise en production", d: "Sécurisez le déploiement." },
    { t: "Formation & transfert de compétences", d: "Rendez vos équipes autonomes." }
  ], casesTitle: "Des services professionnels conçus pour sécuriser vos projets", cases: [
    { t: "Étude & cadrage", d: "Définissez les contours de vos projets." },
    { t: "Architecture & conception", d: "Concevez une architecture fonctionnelle." },
    { t: "Implémentation & configuration", d: "Configurez les solutions selon vos processus." },
    { t: "Intégration", d: "Connectez vos solutions à votre SI." },
    { t: "Développement spécifique", d: "Répondez aux besoins particuliers." },
    { t: "Tests & mise en production", d: "Validez le fonctionnement en conditions réelles." },
    { t: "Formation", d: "Développez les compétences des équipes." },
    { t: "Transfert de compétences", d: "Assurez une autonomie durable." }
  ], benefitTitle: "Plus qu’un projet : des compétences et une solution durable", benefits: [
    { t: "Expertise", d: "Bénéficiez de consultants spécialisés." },
    { t: "Maîtrise", d: "Sécurisez chaque étape du projet." },
    { t: "Autonomie", d: "Faites monter vos équipes en compétence." },
    { t: "Adoption", d: "Facilitez l’appropriation des solutions." },
    { t: "Performance", d: "Exploitez pleinement vos technologies." },
    { t: "Pérennité", d: "Construisez des solutions durables." }
  ], images: [
    "/images/team-meeting.jpg",
    "/images/circuit.jpg",
    "/images/keyboard.jpg",
    "/images/server-room.jpg",
    "/images/data-analysis.jpg",
    "/images/meeting.jpg"
  ] },
  "support-maintenance": { title: "Gardez vos solutions performantes", description: "Assurez la disponibilité, la fiabilité et l’évolution de vos solutions grâce à un accompagnement technique adapté à vos enjeux opérationnels.", seoTitle: "Support et maintenance informatique en Algérie | CaptureDoc", seoDescription: "Support et maintenance informatique en Algérie : CaptureDoc assure la disponibilité, la sécurité et l’évolution durable de vos solutions.", heroImage: "/images/server-room.jpg", stages: [
    { t: "Surveiller", d: "Gardez un œil sur vos solutions" },
    { t: "Assister", d: "Répondez rapidement aux incidents" },
    { t: "Maintenir", d: "Préservez la performance" },
    { t: "Faire évoluer", d: "Faites grandir vos solutions" }
  ], challengeTitle: "Une solution performante mérite un accompagnement dans la durée", challenges: [
    { t: "Des solutions critiques", d: "Des solutions qui doivent rester opérationnelles." },
    { t: "Des anomalies", d: "Des incidents qui peuvent perturber les opérations." },
    { t: "Des environnements", d: "Des plateformes qui nécessitent un suivi régulier." },
    { t: "Évolutions", d: "Des plateformes qui doivent suivre les changements." },
    { t: "Besoins métier", d: "Des processus qui évoluent avec l’organisation." },
    { t: "Équipes internes", d: "Des équipes qui n’ont pas toujours les compétences nécessaires." }
  ], approachTitle: "Prévenir. Assister. Maintenir. Optimiser.", approach: [
    { t: "Support technique", d: "Résolvez les incidents rapidement." },
    { t: "Maintenance corrective", d: "Corrigez les anomalies et dysfonctionnements." },
    { t: "Maintenance préventive", d: "Anticipez les incidents et contrôlez la stabilité." },
    { t: "Monitoring & supervision", d: "Surveillez la disponibilité et la performance." },
    { t: "Mise à jour & évolution", d: "Accompagnez les évolutions fonctionnelles." },
    { t: "Optimisation continue", d: "Améliorez la performance de vos solutions." }
  ], casesTitle: "Un support adapté à vos enjeux opérationnels", cases: [
    { t: "Support utilisateurs", d: "Accompagnez les utilisateurs au quotidien." },
    { t: "Maintenance corrective", d: "Résolvez les incidents rapidement." },
    { t: "Maintenance préventive", d: "Préservez la stabilité de vos solutions." },
    { t: "Monitoring & supervision", d: "Gardez une visibilité sur vos environnements." },
    { t: "Mise à jour & upgrade", d: "Accompagnez le déploiement des évolutions." },
    { t: "Optimisation", d: "Améliorez l’efficacité de vos solutions." },
    { t: "Accompagnement évolutif", d: "Faites évoluer votre solution au fil des besoins." }
  ], benefitTitle: "Plus de sérénité. Plus de performance.", benefits: [
    { t: "Disponibilité", d: "Maintenez vos solutions opérationnelles." },
    { t: "Réactivité", d: "Réduisez les temps de résolution." },
    { t: "Stabilité", d: "Préservez la fiabilité des environnements." },
    { t: "Performance", d: "Identifiez les opportunités d’optimisation." },
    { t: "Évolutivité", d: "Faites évoluer vos solutions avec l’organisation." },
    { t: "Sérénité", d: "Appuyez-vous sur une expertise disponible." }
  ], images: [
    "/images/team-meeting.jpg",
    "/images/circuit.jpg",
    "/images/keyboard.jpg",
    "/images/server-room.jpg",
    "/images/data-analysis.jpg",
    "/images/meeting.jpg"
  ] }
};

export const home: HomeData = { ticker: [
  "120 projets",
  "Depuis 2010",
  "14 pays",
  "5 Récompenses",
  "Master VAD (Distributeur à valeur ajoutée) MENA Tungsten Automation",
  "15 Partenaires"
], expertiseCards: [
  { t: "Orchestration des processus & workflow", d: "Connectez vos processus, vos applications et vos équipes dans des parcours intelligents et fluides.", slug: "workflow-orchestration" },
  { t: "Traitement intelligent des documents (IDP/OCR)", d: "Exploitez l'IA pour comprendre, extraire et transformer automatiquement vos documents en données.", slug: "intelligent-document-processing" },
  { t: "Signature électronique", d: "Accélérez vos parcours de bout en bout avec une signature électronique simple, sécurisée et fiable.", slug: "signature-electronique" },
  { t: "Automatisation robotisée des processus (RPA)", d: "Confiez les tâches répétitives à des robots logiciels et concentrez vos équipes sur l'essentiel.", slug: "rpa" },
  { t: "Reconnaissance faciale & détection de vie", d: "Sécurisez vos parcours digitaux grâce à une authentification biométrique intelligente et fiable.", slug: "reconnaissance-faciale" },
  { t: "Business Intelligence & Analytics", d: "Faites parler vos données pour révéler les tendances, éclairer vos décisions et anticiper les opportunités.", slug: "business-intelligence" },
  { t: "Gestion de contenu d'entreprise (ECM/GED)", d: "Transformez vos contenus en actifs intelligents, accessibles, sécurisés et exploitables.", slug: "enterprise-content-management" },
  { t: "Numérisation & archivage", d: "Passez du document papier au patrimoine numérique grâce à une gestion documentaire intelligente et durable.", slug: "numerisation-archivage" }
], countries: [
  { id: "algeria", name: "Algérie", role: "Siège & centre de delivery", details: "Siège CaptureDoc, Notre principal centre d'expertise, au cœur de notre rayonnement régional et international." },
  { id: "tunisia", name: "Tunisie", role: "", details: "Une présence active au service avec nos partenaires, entreprises et organisations locales." },
  { id: "egypt", name: "Égypte", role: "", details: "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G." },
  { id: "senegal", name: "Sénégal", role: "", details: "Une présence active au service avec nos partenaires, entreprises et organisations locales." },
  { id: "congo", name: "Congo-Brazzaville", role: "", details: "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G." },
  { id: "drc", name: "République démocratique du Congo", role: "", details: "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G." },
  { id: "saudi", name: "Arabie Saoudite", role: "", details: "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G." },
  { id: "uae", name: "Émirats Arabes Unis", role: "", details: "Projets réalisés en 2024 et 2025 à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B." },
  { id: "jordan", name: "Jordanie", role: "", details: "Une présence au Levant au service de projets de digitalisation et d'optimisation des processus." },
  { id: "uk", name: "Royaume-Uni", role: "", details: "Une présence au service de projets de digitalisation et de partenariats technologiques." },
  { id: "france", name: "France", role: "", details: "Une présence au service de projets de digitalisation et de partenariats technologiques." },
  { id: "germany", name: "Allemagne", role: "", details: "Une présence au service de projets de digitalisation et de partenariats technologiques." },
  { id: "portugal", name: "Portugal", role: "", details: "Une présence au service de projets de digitalisation et de partenariats technologiques." },
  { id: "nigeria", name: "Nigeria", role: "", details: "Une présence développée à travers nos partenaires autour de projets de transformation numérique et d'automatisation des processus métiers." }
], cases: [
  { logo: "/clients/ooredoo.png", badge: "télécom", quote: "Nous avons choisi Kofax car celle-ci nous a donné la flexibilité de couvrir le processus de capture et d'activation de bout en bout à partir d'une seule plateforme.", stats: [
    { v: "3,200+h", l: "clients servis" },
    { v: "4.0X", l: "diagnostics plus rapides" },
    { v: "6X", l: "prise en charge plus rapide" }
  ], person: "Imad Sousou", personTitle: "CTO chez Ooredoo Algérie", personImage: "/images/imad-sousou.png", pdf: "https://www.tungstenautomation.fr/-/media/files/case-studies/fr/cs_ooredoo_fr.pdf" },
  { logo: "/clients/societe-generale.png", badge: "bancaire", quote: "Avec CaptureDoc, la Société Générale Algérie a transformé son intégration client — de 30 jours à 15 minutes — grâce à des solutions Tungsten alimentées par l'IA, économisant plus de 1 600 jours-hommes par an.", stats: [
    { v: "30j → 15min", l: "onboarding client" },
    { v: "1 600+", l: "jours-hommes économisés / an" },
    { v: "IA", l: "solutions Tungsten" }
  ], person: "Tewfik Medani", personTitle: "DSI, Société Générale Algérie", personImage: "/images/tewfik-medani.png", pdf: "https://www.tungstenautomation.fr/case-studies/societe-generale-algerie-reduces-customer-onboarding-from-weeks-to-15-minutes" }
], awards: [
  { title: "Logiciel le plus innovant", provider: "Wacom", details: "Allemagne 2023" },
  { title: "Excellence de l'onboarding IA", provider: "Kofax", details: "Californie 2022" },
  { title: "Solution de l'année", provider: "Kofax", details: "Californie 2019" },
  { title: "Meilleure capture mobile", provider: "Kofax", details: "Floride 2016" }
], teamCards: [
  { t: "Distributeur Master VAD & Technologies de référence", d: "En tant que Distributeur Master VAD pour la région MENA de Tungsten Automation et Xerox DocuShare, nous mettons à la portée des entreprises des technologies de pointe en IA, capture intelligente et gestion documentaire, reconnues parmi les solutions leaders du marché par Gartner et IDC." },
  { t: "Souveraineté des données & conformité", d: "Nos solutions peuvent être déployées intégralement en-premise, offrant à nos clients un contrôle total sur leurs données et leur infrastructure. Elles sont conçues pour répondre aux exigences locales en matière de sécurité, de confidentialité et d'archivage, notamment dans le respect de la loi 18-07 et des exigences liées à la certification AGCE." },
  { t: "Expertise certifiée & rayonnement régional", d: "Fondée en 2010, CaptureDoc capitalise sur plus de 15 ans d'expérience dans la digitalisation et l'automatisation des processus. Notre équipe de 50+ experts certifiés accompagne aujourd'hui plus de 50 grands comptes dans 13 pays, en apportant expertise technologique, conseil et accompagnement de proximité." }
], faq: [
  { q: "Quelles solutions CaptureDoc propose-t-elle ?", a: "CaptureDoc conçoit et déploie des solutions de transformation documentaire : capture de documents, Intelligent Document Processing (OCR), signature électronique, automatisation des processus par RPA, reconnaissance faciale, Business Intelligence, GED/ECM, ainsi que les services de numérisation et d'archivage. Chaque solution est adaptée à vos outils métiers et à votre organisation." },
  { q: "Dans quels secteurs CaptureDoc intervient-il ?", a: "Nous accompagnons les secteurs bancaire, des télécommunications, de l'assurance, de la santé, du transport et de la logistique, ainsi que les administrations et les organismes publics. Nos équipes de conseil analysent vos processus métier pour construire des solutions spécifiques à chaque secteur." },
  { q: "Mes données restent-elles en Algérie et sous mon contrôle ?", a: "Oui. Nos solutions peuvent être déployées intégralement on-premise, ce qui vous garantit un contrôle total sur vos données et votre infrastructure. Elles sont conçues pour répondre aux exigences locales de sécurité, de confidentialité et d'archivage, dans le respect de la loi 18-07 et des exigences liées à la certification AGCE." },
  { q: "Comment se déroule un projet avec CaptureDoc ?", a: "Nous commençons par un diagnostic et une phase de conseil afin d'identifier vos enjeux prioritaires, puis nous configurons et déployons les solutions retenues, avec intégration à vos systèmes existants et formation de vos équipes. Nos experts certifiés assurent ensuite un accompagnement de proximité et un support/maintenance durable." }
] };

export const about: AboutData = { pillars: [
  { t: "Proximité", d: "Nous écoutons vos enjeux pour construire, à vos côtés, des solutions qui font vraiment la différence." },
  { t: "Innovation utile", d: "Nous transformons les technologies les plus pertinentes en réponses simples, fiables et concrètes." },
  { t: "Exigence", d: "Chaque projet est mené avec rigueur, sécurité et le souci constant d'un impact durable." },
  { t: "Esprit d'équipe", d: "Nos experts partagent leurs savoir-faire pour faire avancer vos équipes et vos organisations." }
], timeline: [
  { t: "2010 — Les débuts", d: "CaptureDoc voit le jour avec une ambition : mettre les technologies de digitalisation au service des entreprises et de leurs processus métier." },
  { t: "Une expertise qui s'élargit", d: "Au fil des années, notre expertise s'étend de la capture documentaire à la gestion des contenus, l'automatisation des processus et l'intelligence des données." },
  { t: "Une transformation continue", d: "L'évolution des technologies nous conduit naturellement vers de nouveaux domaines tels que l'IA, la reconnaissance faciale, le traitement intelligent des documents et l'automatisation avancée." },
  { t: "Aujourd'hui", d: "CaptureDoc accompagne des organisations dans plusieurs secteurs et plusieurs pays, avec une approche combinant technologies de référence, expertise locale et accompagnement de proximité." }
], stats: [
  "15 ans d'existence",
  "13+ pays",
  "50+ experts"
] };
