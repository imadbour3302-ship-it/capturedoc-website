import json

T = r'C:\Users\imad\AppData\Local\Temp\\'
exps = json.load(open(T + 'fr_expertises.json', encoding='utf-8'))
inds = json.load(open(T + 'fr_industries.json', encoding='utf-8'))
svcs = json.load(open(T + 'fr_services.json', encoding='utf-8'))

def ts(v, ind=0):
    pad = '  ' * ind
    if isinstance(v, dict):
        items = ', '.join(f'{k}: {ts(x, ind)}' for k, x in v.items())
        return '{ ' + items + ' }'
    if isinstance(v, list):
        if not v:
            return '[]'
        inner = ',\n'.join(pad + '  ' + ts(x, ind + 1) for x in v)
        return '[\n' + inner + '\n' + pad + ']'
    return json.dumps(v, ensure_ascii=False)

def slug_map(d, ind=0):
    pad = '  ' * ind
    lines = []
    for slug, val in d.items():
        lines.append(f'{pad}  {json.dumps(slug)}: {ts(val, ind + 1)}')
    return '{\n' + ',\n'.join(lines) + '\n' + pad + '}'

out = []
out.append("import type { DetailPage, IndustryPage, HomeData, AboutData } from './types';\n")

out.append('export const expertises: Record<string, DetailPage> = ' + slug_map(exps) + ';\n')
out.append('export const industries: Record<string, IndustryPage> = ' + slug_map(inds) + ';\n')
out.append('export const services: Record<string, DetailPage> = ' + slug_map(svcs) + ';\n')

home = {
 'ticker': ['120 projets', 'Depuis 2010', '14 pays', '5 Récompenses', 'Master VAD (Distributeur à valeur ajoutée) MENA Tungsten Automation', '15 Partenaires'],
 'expertiseCards': [
  {'t': 'Orchestration des processus & workflow', 'd': "Connectez vos processus, vos applications et vos équipes dans des parcours intelligents et fluides.", 'slug': 'workflow-orchestration'},
  {'t': 'Traitement intelligent des documents (IDP/OCR)', 'd': "Exploitez l'IA pour comprendre, extraire et transformer automatiquement vos documents en données.", 'slug': 'intelligent-document-processing'},
  {'t': 'Signature électronique', 'd': "Accélérez vos parcours de bout en bout avec une signature électronique simple, sécurisée et fiable.", 'slug': 'signature-electronique'},
  {'t': 'Automatisation robotisée des processus (RPA)', 'd': "Confiez les tâches répétitives à des robots logiciels et concentrez vos équipes sur l'essentiel.", 'slug': 'rpa'},
  {'t': 'Reconnaissance faciale & détection de vie', 'd': "Sécurisez vos parcours digitaux grâce à une authentification biométrique intelligente et fiable.", 'slug': 'reconnaissance-faciale'},
  {'t': 'Business Intelligence & Analytics', 'd': "Faites parler vos données pour révéler les tendances, éclairer vos décisions et anticiper les opportunités.", 'slug': 'business-intelligence'},
  {'t': "Gestion de contenu d'entreprise (ECM/GED)", 'd': "Transformez vos contenus en actifs intelligents, accessibles, sécurisés et exploitables.", 'slug': 'enterprise-content-management'},
  {'t': 'Numérisation & archivage', 'd': "Passez du document papier au patrimoine numérique grâce à une gestion documentaire intelligente et durable.", 'slug': 'numerisation-archivage'},
 ],
 'countries': [
  {'id': 'algeria', 'name': 'Algérie', 'role': 'Siège & centre de delivery', 'details': "Siège CaptureDoc, Notre principal centre d'expertise, au cœur de notre rayonnement régional et international."},
  {'id': 'tunisia', 'name': 'Tunisie', 'role': '', 'details': 'Une présence active au service avec nos partenaires, entreprises et organisations locales.'},
  {'id': 'egypt', 'name': 'Égypte', 'role': '', 'details': "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G."},
  {'id': 'senegal', 'name': 'Sénégal', 'role': '', 'details': 'Une présence active au service avec nos partenaires, entreprises et organisations locales.'},
  {'id': 'congo', 'name': 'Congo-Brazzaville', 'role': '', 'details': "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G."},
  {'id': 'drc', 'name': 'République démocratique du Congo', 'role': '', 'details': "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G."},
  {'id': 'saudi', 'name': 'Arabie Saoudite', 'role': '', 'details': "Une présence développée à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B et B2G."},
  {'id': 'uae', 'name': 'Émirats Arabes Unis', 'role': '', 'details': "Projets réalisés en 2024 et 2025 à travers nos partenaires autour de projets de transformation numérique, automatisation des processus métiers basés sur l'IA et Gestion Electronique des Documents en mode B2B."},
  {'id': 'jordan', 'name': 'Jordanie', 'role': '', 'details': "Une présence au Levant au service de projets de digitalisation et d'optimisation des processus."},
  {'id': 'uk', 'name': 'Royaume-Uni', 'role': '', 'details': "Une présence au service de projets de digitalisation et de partenariats technologiques."},
  {'id': 'france', 'name': 'France', 'role': '', 'details': "Une présence au service de projets de digitalisation et de partenariats technologiques."},
  {'id': 'germany', 'name': 'Allemagne', 'role': '', 'details': "Une présence au service de projets de digitalisation et de partenariats technologiques."},
  {'id': 'portugal', 'name': 'Portugal', 'role': '', 'details': "Une présence au service de projets de digitalisation et de partenariats technologiques."},
  {'id': 'nigeria', 'name': 'Nigeria', 'role': '', 'details': "Une présence développée à travers nos partenaires autour de projets de transformation numérique et d'automatisation des processus métiers."},
 ],
 'cases': [
  {
   'logo': '/clients/ooredoo.png', 'badge': 'télécom',
   'quote': "Nous avons choisi Kofax car celle-ci nous a donné la flexibilité de couvrir le processus de capture et d'activation de bout en bout à partir d'une seule plateforme.",
   'stats': [{'v': '3,200+h', 'l': 'clients servis'}, {'v': '4.0X', 'l': 'diagnostics plus rapides'}, {'v': '6X', 'l': 'prise en charge plus rapide'}],
   'person': 'Imad Sousou', 'personTitle': 'CTO chez Ooredoo Algérie', 'personImage': '/images/imad-sousou.png',
   'pdf': 'https://www.tungstenautomation.fr/-/media/files/case-studies/fr/cs_ooredoo_fr.pdf',
  },
  {
   'logo': '/clients/societe-generale.png', 'badge': 'bancaire',
   'quote': "Avec CaptureDoc, la Société Générale Algérie a transformé son intégration client — de 30 jours à 15 minutes — grâce à des solutions Tungsten alimentées par l'IA, économisant plus de 1 600 jours-hommes par an.",
   'stats': [{'v': '30j → 15min', 'l': 'onboarding client'}, {'v': '1 600+', 'l': 'jours-hommes économisés / an'}, {'v': 'IA', 'l': 'solutions Tungsten'}],
   'person': 'Tewfik Medani', 'personTitle': 'DSI, Société Générale Algérie', 'personImage': '/images/tewfik-medani.png',
   'pdf': 'https://www.tungstenautomation.fr/case-studies/societe-generale-algerie-reduces-customer-onboarding-from-weeks-to-15-minutes',
  },
 ],
 'awards': [
  {'title': 'Logiciel le plus innovant', 'provider': 'Wacom', 'details': 'Allemagne 2023'},
  {'title': "Excellence de l'onboarding IA", 'provider': 'Kofax', 'details': 'Californie 2022'},
  {'title': "Solution de l'année", 'provider': 'Kofax', 'details': 'Californie 2019'},
  {'title': 'Meilleure capture mobile', 'provider': 'Kofax', 'details': 'Floride 2016'},
 ],
 'teamCards': [
  {'t': 'Distributeur Master VAD & Technologies de référence', 'd': "En tant que Distributeur Master VAD pour la région MENA de Tungsten Automation et Xerox DocuShare, nous mettons à la portée des entreprises des technologies de pointe en IA, capture intelligente et gestion documentaire, reconnues parmi les solutions leaders du marché par Gartner et IDC."},
  {'t': 'Souveraineté des données & conformité', 'd': "Nos solutions peuvent être déployées intégralement en-premise, offrant à nos clients un contrôle total sur leurs données et leur infrastructure. Elles sont conçues pour répondre aux exigences locales en matière de sécurité, de confidentialité et d'archivage, notamment dans le respect de la loi 18-07 et des exigences liées à la certification AGCE."},
  {'t': 'Expertise certifiée & rayonnement régional', 'd': "Fondée en 2010, CaptureDoc capitalise sur plus de 15 ans d'expérience dans la digitalisation et l'automatisation des processus. Notre équipe de 50+ experts certifiés accompagne aujourd'hui plus de 50 grands comptes dans 13 pays, en apportant expertise technologique, conseil et accompagnement de proximité."},
 ],
 'faq': [
  {'q': 'Quelles solutions CaptureDoc propose-t-elle ?', 'a': "CaptureDoc conçoit et déploie des solutions de transformation documentaire : capture de documents, Intelligent Document Processing (OCR), signature électronique, automatisation des processus par RPA, reconnaissance faciale, Business Intelligence, GED/ECM, ainsi que les services de numérisation et d'archivage. Chaque solution est adaptée à vos outils métiers et à votre organisation."},
  {'q': 'Dans quels secteurs CaptureDoc intervient-il ?', 'a': "Nous accompagnons les secteurs bancaire, des télécommunications, de l'assurance, de la santé, du transport et de la logistique, ainsi que les administrations et les organismes publics. Nos équipes de conseil analysent vos processus métier pour construire des solutions spécifiques à chaque secteur."},
  {'q': 'Mes données restent-elles en Algérie et sous mon contrôle ?', 'a': "Oui. Nos solutions peuvent être déployées intégralement on-premise, ce qui vous garantit un contrôle total sur vos données et votre infrastructure. Elles sont conçues pour répondre aux exigences locales de sécurité, de confidentialité et d'archivage, dans le respect de la loi 18-07 et des exigences liées à la certification AGCE."},
  {'q': 'Comment se déroule un projet avec CaptureDoc ?', 'a': "Nous commençons par un diagnostic et une phase de conseil afin d'identifier vos enjeux prioritaires, puis nous configurons et déployons les solutions retenues, avec intégration à vos systèmes existants et formation de vos équipes. Nos experts certifiés assurent ensuite un accompagnement de proximité et un support/maintenance durable."},
 ],
}
out.append('export const home: HomeData = ' + ts(home) + ';\n')

about = {
 'pillars': [
  {'t': 'Proximité', 'd': "Nous écoutons vos enjeux pour construire, à vos côtés, des solutions qui font vraiment la différence."},
  {'t': 'Innovation utile', 'd': "Nous transformons les technologies les plus pertinentes en réponses simples, fiables et concrètes."},
  {'t': 'Exigence', 'd': "Chaque projet est mené avec rigueur, sécurité et le souci constant d'un impact durable."},
  {'t': "Esprit d'équipe", 'd': "Nos experts partagent leurs savoir-faire pour faire avancer vos équipes et vos organisations."},
 ],
 'timeline': [
  {'t': '2010 — Les débuts', 'd': "CaptureDoc voit le jour avec une ambition : mettre les technologies de digitalisation au service des entreprises et de leurs processus métier."},
  {'t': "Une expertise qui s'élargit", 'd': "Au fil des années, notre expertise s'étend de la capture documentaire à la gestion des contenus, l'automatisation des processus et l'intelligence des données."},
  {'t': 'Une transformation continue', 'd': "L'évolution des technologies nous conduit naturellement vers de nouveaux domaines tels que l'IA, la reconnaissance faciale, le traitement intelligent des documents et l'automatisation avancée."},
  {'t': "Aujourd'hui", 'd': "CaptureDoc accompagne des organisations dans plusieurs secteurs et plusieurs pays, avec une approche combinant technologies de référence, expertise locale et accompagnement de proximité."},
 ],
 'stats': ["15 ans d'existence", '13+ pays', '50+ experts'],
}
out.append('export const about: AboutData = ' + ts(about) + ';\n')

open(r'C:\Users\imad\capturedoc-website\src\data\fr.ts', 'w', encoding='utf-8').write('\n'.join(out))
print('written', sum(len(x) for x in out))
