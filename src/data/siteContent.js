const safeReferenceAsset = (path) => `/asty-images/references/${path}`;

export const siteContent = {
  brand: "ASTY",
  imagery: {
    heroWindow: "/asty-images/window-view.jpg",
    facadeHouse: "/asty-images/facade-house.jpg",
    interiorBath: "/asty-images/bathroom-detail.jpg",
    interiorKitchen: "/asty-images/kitchen-detail.jpg",
    gardenHouse: "/asty-images/house-garden.jpg",
    hybridCourtyard: "/asty-images/hybrid-courtyard.jpg",
  },
  navigation: [
    { to: "/", label: "Accueil" },
    { to: "/realisations", label: "Réalisations" },
    { to: "/expertise", label: "Expertise" },
    { to: "/criteres-de-recherche", label: "Critères de recherche" },
    { to: "/amo", label: "AMO" },
    { to: "/a-propos", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ],
  headerCta: {
    label: "Présenter un actif",
    to: "/contact",
  },
  hero: {
    title: "Transformer l’ancien pour bâtir la ville de demain",
    description:
      "ASTY est une structure indépendante spécialisée dans la structuration et le développement de projets immobiliers complexes, en portage direct ou en AMO.",
    detail:
      "Selon la situation, ASTY peut porter l’acquisition d’un actif à transformer, ou accompagner un propriétaire, une foncière ou une collectivité dans la structuration, le montage et le pilotage de sa transformation.",
    primaryCta: { label: "Modes d’intervention", href: "#intervention" },
    secondaryCta: { label: "Présenter un actif", href: "/contact" },
    panelItems: [
      "Portage / acquisition d’actifs",
      "AMO et structuration pour compte de tiers",
      "Transformation et valorisation de l’existant",
    ],
  },
  positioning: {
    title: "Un positionnement sélectif sur des situations complexes",
    intro:
      "ASTY intervient sur des actifs existants présentant des enjeux techniques, réglementaires, économiques ou d’usage.",
    cards: [
      {
        title: "Actifs existants",
        body:
          "Immeubles anciens, actifs vacants, situations dégradées ou sous-optimisées : nous travaillons d’abord sur l’existant.",
      },
      {
        title: "Deux cadres d’intervention",
        body:
          "Portage direct de l’actif ou accompagnement en AMO / structuration pour compte de tiers selon le dossier et le niveau d’implication recherché.",
      },
      {
        title: "Cap vers l’exécution",
        body:
          "Notre rôle consiste à transformer une complexité immobilière en trajectoire lisible, finançable et pilotable.",
      },
    ],
    issues: [
      "des problématiques techniques, structurelles ou de vétusté",
      "des contraintes réglementaires ou urbanistiques",
      "une rentabilité dégradée ou sous-optimisée",
      "une inadéquation d’usage",
    ],
    closing:
      "Selon les besoins, ASTY se positionne comme opérateur capable de porter l’actif et sa transformation, ou comme AMO pour le compte d’un propriétaire, d’une foncière ou d’une collectivité.",
  },
  interventionModes: {
    title: "Deux modes d’intervention, un même niveau d’exigence",
    intro:
      "Le positionnement d’ASTY s’adapte au profil du dossier et au niveau d’implication attendu.",
    items: [
      {
        eyebrow: "Portage",
        title: "Portage / acquisition d’actifs",
        body:
          "ASTY peut identifier, acquérir ou co-acquérir un actif existant, structurer le véhicule de détention, sécuriser le financement et piloter la transformation jusqu’à la valorisation.",
        bullets: [
          "acquisition ou co-acquisition",
          "structuration du véhicule de détention",
          "montage financier et pilotage d’exécution",
        ],
      },
      {
        eyebrow: "AMO",
        title: "AMO / accompagnement de transformation",
        body:
          "ASTY intervient aussi aux côtés d’un propriétaire, d’une foncière ou d’une collectivité pour cadrer la stratégie, instruire la faisabilité, arbitrer le montage et suivre l’exécution opérationnelle.",
        bullets: [
          "cadrage et faisabilité",
          "arbitrage du montage",
          "pilotage opérationnel pour compte de tiers",
        ],
      },
    ],
    closing:
      "Dans les deux cas, notre rôle reste le même : rendre une opération complexe lisible, finançable et exécutable.",
  },
  metrics: [
    { value: 40, prefix: "+", label: "opportunités analysées / an" },
    {
      value: 35,
      label: "lots restructurés",
      note: "repositionnement et amélioration énergétique",
    },
    {
      text: "Projets en cours",
      label: "opérations en structuration ou en transformation",
    },
    {
      text: "Nouvelle-Aquitaine",
      label: "territoire d’intervention",
      note: "Bordeaux, Angoulême, Poitiers, La Rochelle…",
    },
  ],
  typologies: {
    title: "Typologies d’actifs",
    intro: "Nous intervenons prioritairement sur :",
    items: [
      {
        title: "Immeubles de centre-ville ancien",
        body:
          "Actifs avec potentiel de recomposition, de division ou de revalorisation.",
      },
      {
        title: "Actifs résidentiels à restructurer",
        body:
          "Biens nécessitant une remise à niveau technique, énergétique ou programmatique.",
      },
      {
        title: "Immeubles vacants ou dégradés",
        body:
          "Situations de vacance, de sous-usage ou de dégradation appelant un repositionnement.",
      },
      {
        title: "Friches et actifs en transition",
        body:
          "Sites urbains avec enjeu de réactivation, de mutation ou de changement d’usage.",
      },
      {
        title: "Actifs à recomposition d’usage",
        body:
          "Programmes nécessitant une nouvelle lecture économique, programmatique ou locative.",
      },
    ],
  },
  method: {
    title: "Une approche structurée en 4 phases",
    phases: [
      {
        step: "01",
        title: "Identification",
        body:
          "Analyse du potentiel latent de l’actif : situation, marché, contraintes et projection de valeur.",
      },
      {
        step: "02",
        title: "Structuration",
        body:
          "Montage juridique et financier, structuration SCI ou détention, fiscalité immobilière, optimisation du financement et modélisation économique.",
      },
      {
        step: "03",
        title: "Transformation",
        body:
          "Pilotage de la requalification : restructuration lourde, amélioration énergétique, redistribution des surfaces et repositionnement d’usage.",
      },
      {
        step: "04",
        title: "Valorisation",
        body:
          "Création de valeur durable : stratégie locative, stabilisation des revenus et revalorisation patrimoniale.",
      },
    ],
  },
  engineering: {
    title: "Ingénierie",
    intro:
      "ASTY mobilise les leviers publics et privés permettant d’améliorer la faisabilité économique des opérations.",
    items: [
      {
        tag: "01",
        title: "Montage économique",
        points: [
          "modélisation d’opération",
          "arbitrage des scénarios",
          "sécurisation des équilibres",
        ],
      },
      {
        tag: "02",
        title: "Dispositifs publics",
        points: [
          "Denormandie ou déficit foncier",
          "subventions ANAH",
          "programmes de revitalisation",
        ],
      },
      {
        tag: "03",
        title: "Outils fonciers et financiers",
        points: [
          "outils fonciers de type EPF",
          "financements institutionnels",
          "coordination du montage de détention",
        ],
      },
      {
        tag: "04",
        title: "Pilotage d’exécution",
        points: [
          "cadrage opérationnel",
          "coordination des intervenants",
          "suivi de la transformation jusqu’à la mise en exploitation",
        ],
      },
    ],
    closing:
      "Une approche hybride, à la croisée des logiques publiques et privées.",
  },
  partnerships: {
    title: "Partenariats",
    intro:
      "ASTY étudie des opportunités en lien avec des acteurs recherchant soit un portage, soit un accompagnement de transformation :",
    items: [
      "propriétaires privés",
      "foncières et investisseurs",
      "agences immobilières",
      "collectivités",
      "porteurs de foncier ou friches",
    ],
    closing:
      "Chaque projet fait l’objet d’une analyse approfondie avant engagement, qu’il s’agisse d’une cession d’actif, d’un co-investissement ou d’une mission d’AMO.",
  },
  cta: {
    title: "Présenter un actif",
    body:
      "Cession potentielle, mission AMO, partenariat ou situation complexe à qualifier : ASTY peut instruire un premier échange confidentiel.",
    primary: { label: "Présenter un actif", to: "/contact" },
    secondary: { label: "Voir les réalisations", to: "/realisations" },
  },
  expertisePage: {
    title: "Structuration, portage, transformation",
    intro:
      "Le cœur de métier d’ASTY est de faire converger montage, exécution et valorisation sur des actifs existants nécessitant une lecture fine.",
    aside: [
      "opérations sur l’existant",
      "lecture économique et réglementaire",
      "portage ou AMO selon le dossier",
    ],
  },
  criteriaPage: {
    title: "Critères de recherche",
    intro:
      "ASTY recherche en priorité des actifs existants présentant un sujet réel de transformation : vacance, complexité, sous-usage ou besoin de repositionnement.",
    focus: [
      {
        title: "Gabarit",
        body:
          "Actifs de 200 à 1 000 m² environ, avec potentiel de recomposition, de division ou de reprogrammation.",
      },
      {
        title: "Localisation",
        body:
          "Centre-ville, centralité constituée ou emplacement urbain à réactiver, avec une logique d’usage et d’exploitation.",
      },
      {
        title: "Nature des dossiers",
        body:
          "Immeubles à restructurer, actifs vacants, biens dégradés, situations bloquées ou montage à reprendre.",
      },
      {
        title: "Niveau de complexité",
        body:
          "Vacance, copropriété complexe, sujet technique, changement d’usage, contrainte réglementaire ou économique.",
      },
    ],
    targetCities: [
      "Bordeaux",
      "Angoulême",
      "Poitiers",
      "Limoges",
      "La Rochelle",
      "Saintes",
      "Cognac",
      "Libourne",
    ],
    complexity: [
      "vacance totale ou partielle",
      "sous-usage ou rentabilité dégradée",
      "recomposition d’usage",
      "contraintes techniques ou réglementaires",
      "besoin de restructuration énergétique ou programmatique",
    ],
    exclusions: [
      "promotion neuve pure sans sujet de transformation",
      "terrain nu sans enjeu immobilier existant",
      "actifs entièrement stabilisés sans sujet de repositionnement",
      "logistique lourde ou retail parks périphériques",
      "petits biens diffus sans enjeu de structuration",
    ],
    note:
      "Nous privilégions les actifs sur lesquels une lecture structurante crée un avantage réel : acquisition, repositionnement, requalification ou accompagnement opérationnel.",
  },
  amoPage: {
    title: "AMO",
    intro:
      "ASTY intervient en AMO sur des opérations de transformation de l’existant nécessitant cadrage, méthode et exécution. L’approche est opérationnelle, jamais décorative.",
    aside: [
      "cadrage de l’opération",
      "faisabilité et arbitrages",
      "pilotage de la transformation",
    ],
    whatWeDo: [
      {
        title: "Cadrer l’opération",
        body:
          "Clarifier les objectifs, les contraintes, les hypothèses de valeur et les conditions de faisabilité.",
      },
      {
        title: "Structurer le montage",
        body:
          "Arbitrer les scénarios, coordonner les sujets juridiques, financiers, fiscaux et programmatiques.",
      },
      {
        title: "Organiser l’exécution",
        body:
          "Définir la feuille de route, les intervenants, le séquencement et les points d’arbitrage.",
      },
      {
        title: "Suivre la transformation",
        body:
          "Accompagner le propriétaire ou la structure de détention jusqu’à la mise en œuvre de la stratégie retenue.",
      },
    ],
    howWeIntervene: [
      "diagnostic initial et analyse de faisabilité",
      "construction du scénario cible et des arbitrages",
      "mise en place du cadre opérationnel et du montage",
      "suivi des intervenants et de la trajectoire de transformation",
    ],
    forWhom: [
      "propriétaires privés",
      "foncières et investisseurs",
      "collectivités",
      "structures de détention souhaitant un pilotage extérieur",
    ],
    projectTypes: [
      "requalification d’immeubles de centre-ville",
      "actifs vacants ou sous-occupés",
      "programmes mixtes ou recompositions d’usage",
      "actifs nécessitant une remise en trajectoire",
    ],
    closing:
      "L’AMO chez ASTY n’est pas une couche de conseil supplémentaire. C’est un cadre d’exécution pour faire avancer un dossier complexe.",
  },
  casesPage: {
    title: "Réalisations",
    intro:
      "Cinq références donnent à voir la manière dont ASTY intervient sur l’existant, depuis le portage d’un actif jusqu’à sa remise en exploitation. La lecture privilégie volontairement le geste immobilier, le chantier et le résultat d’usage.",
    aside: [
      "5 réalisations",
      "lecture avant / après lorsque disponible",
      "présentation volontairement resserrée",
    ],
    note:
      "La page ne cherche pas l’exhaustivité. Elle montre, pour chaque actif, l’intensité de l’intervention, la transformation visible et la qualité du résultat final.",
    readingFrame: [
      {
        title: "Lecture",
        body:
          "Chaque référence privilégie la transformation visible plutôt que l’accumulation de données techniques.",
      },
      {
        title: "Confidentialité",
        body:
          "Les localisations précises et les paramètres d’exploitation restent volontairement en retrait.",
      },
      {
        title: "Avant / après",
        body:
          "Quand les archives existent, l’évolution du bâti est montrée directement pour rendre le saut qualitatif immédiatement perceptible.",
      },
    ],
    references: [
      {
        reference: "Réf. 01",
        eyebrow: "Portage direct et restructuration",
        title: "Immeuble de 6 logements",
        summary:
          "Recomposition complète d’un immeuble ancien en six logements, avec reprise lourde du bâti et remise en exploitation.",
        scopes: ["6 logements", "portage direct", "mise en exploitation"],
        cover: safeReferenceAsset("ref-01/cover-facade.png"),
        compare: {
          before: safeReferenceAsset("ref-01/before-works.jpeg"),
          beforeLabel: "Avant / pendant travaux",
          after: safeReferenceAsset("ref-01/after-main.jpeg"),
          afterLabel: "Après travaux",
        },
        gallery: [safeReferenceAsset("ref-01/gallery-living.png"), safeReferenceAsset("ref-01/gallery-bath.png")],
        details: [
          {
            title: "Actif",
            body:
              "Un immeuble de centre ancien à reprendre dans sa structure d’usage, son niveau de confort et sa présentation générale.",
          },
          {
            title: "Intervention",
            body:
              "Portage de l’actif, conduite des travaux, redistribution intérieure et mise en exploitation dans une logique de produit fini.",
          },
          {
            title: "Résultat",
            body:
              "Une opération lisible de bout en bout, depuis le chantier lourd jusqu’à un ensemble résidentiel cohérent, prêt à l’exploitation.",
          },
        ],
      },
      {
        reference: "Réf. 02",
        eyebrow: "Rénovation résidentielle",
        title: "Appartement ancien restructuré",
        summary:
          "Rénovation complète d’un appartement ancien avec remise à niveau des usages, des finitions et de l’attractivité locative.",
        scopes: ["rénovation complète", "pièces clés reprises", "attractivité relancée"],
        cover: safeReferenceAsset("ref-02/cover-after.jpg"),
        compare: {
          before: safeReferenceAsset("ref-02/before-main.jpg"),
          beforeLabel: "Avant travaux",
          after: safeReferenceAsset("ref-02/after-kitchen.jpg"),
          afterLabel: "Après travaux",
        },
        gallery: [safeReferenceAsset("ref-02/gallery-01.jpg"), safeReferenceAsset("ref-02/gallery-02.jpg")],
        details: [
          {
            title: "Actif",
            body:
              "Un appartement vétuste à réordonner pour retrouver une lecture claire, une meilleure habitabilité et un niveau de présentation cohérent.",
          },
          {
            title: "Intervention",
            body:
              "Pilotage de la rénovation, recomposition des pièces de vie et remise à niveau globale des finitions dans une logique de produit relisible.",
          },
          {
            title: "Résultat",
            body:
              "Un appartement requalifié, plus qualitatif et immédiatement exploitable, avec un saut de perception net entre l’état d’origine et l’état final.",
          },
        ],
      },
      {
        reference: "Réf. 03",
        eyebrow: "Aménagement et remise en valeur",
        title: "Maison de cœur de ville",
        summary:
          "Remise en valeur d’une maison de centre ancien, avec un travail sur les volumes, la lumière et le confort résidentiel.",
        scopes: ["centre ancien", "travail sur les volumes", "usage résidentiel"],
        cover: safeReferenceAsset("ref-03/cover-main.jpeg"),
        gallery: [
          safeReferenceAsset("ref-03/gallery-01.jpeg"),
          safeReferenceAsset("ref-03/gallery-02.jpeg"),
          safeReferenceAsset("ref-03/gallery-03.jpeg"),
        ],
        details: [
          {
            title: "Actif",
            body:
              "Une maison inscrite dans un tissu ancien, dont le potentiel tenait autant à la redistribution qu’à la qualité des ambiances intérieures.",
          },
          {
            title: "Intervention",
            body:
              "Travail sur les circulations, les volumes habitables et la cohérence d’ensemble pour retrouver une lecture résidentielle plus fluide.",
          },
          {
            title: "Résultat",
            body:
              "Une maison plus aboutie dans son usage, son atmosphère et sa valeur perçue, avec une finition homogène à l’échelle de l’ensemble.",
          },
        ],
      },
      {
        reference: "Réf. 04",
        eyebrow: "Restructuration d’immeuble",
        title: "Immeuble recomposé en 4 duplex",
        summary:
          "Transformation d’un immeuble existant en quatre duplex, avec séquence travaux, reprise des parties communes et repositionnement du produit final.",
        scopes: ["4 duplex", "reprise lourde", "repositionnement produit"],
        cover: safeReferenceAsset("ref-04/cover-common.jpeg"),
        compare: {
          before: safeReferenceAsset("ref-04/before-works.jpeg"),
          beforeLabel: "Phase travaux",
          after: safeReferenceAsset("ref-04/after-common.jpeg"),
          afterLabel: "Après travaux",
        },
        gallery: [safeReferenceAsset("ref-04/gallery-01.jpg"), safeReferenceAsset("ref-04/gallery-02.jpeg")],
        details: [
          {
            title: "Actif",
            body:
              "Un immeuble existant à recomposer pour faire émerger une offre résidentielle plus affirmée et plus cohérente.",
          },
          {
            title: "Intervention",
            body:
              "Pilotage de la restructuration, suivi des travaux et remise en état des espaces communs comme des plateaux privatisés.",
          },
          {
            title: "Résultat",
            body:
              "Un ensemble requalifié, plus lisible à l’exploitation et mieux calibré pour une cible résidentielle exigeante.",
          },
        ],
      },
      {
        reference: "Réf. 05",
        eyebrow: "Réhabilitation résidentielle",
        title: "Maison urbaine réhabilitée",
        summary:
          "Réhabilitation d’une maison urbaine avec lecture avant / après pour rendre visible la transformation de l’enveloppe, des volumes et de la perception finale.",
        scopes: ["avant / après lisible", "transformation résidentielle", "mise en valeur finale"],
        cover: safeReferenceAsset("ref-05/cover-render-01.jpg"),
        compare: {
          before: safeReferenceAsset("ref-05/before-main.jpeg"),
          beforeLabel: "Avant",
          after: safeReferenceAsset("ref-05/after-render-02.jpg"),
          afterLabel: "Après",
        },
        gallery: [safeReferenceAsset("ref-05/gallery-render-03.jpg"), safeReferenceAsset("ref-05/gallery-before-02.jpeg")],
        details: [
          {
            title: "Actif",
            body:
              "Une maison de ville existante dont le potentiel est rendu lisible par une lecture simple du bâti initial et du projet final.",
          },
          {
            title: "Intervention",
            body:
              "Lecture du bâti existant, projection de transformation et mise en visibilité d’un avant / après immédiatement compréhensible.",
          },
          {
            title: "Résultat",
            body:
              "Une transformation lisible en un coup d’œil, avec un passage clair d’un état initial hétérogène vers une image finale plus aboutie.",
          },
        ],
      },
    ],
  },
  caseStudy: {
    place: "Étude type",
    title: "Requalification d’un immeuble de centre-ville",
    summary:
      "Un cas de requalification type pour illustrer la logique de portage ou d’AMO sur un actif ancien, vacants par séquences et à faible performance énergétique.",
    sections: [
      {
        label: "Contexte",
        body:
          "Immeuble ancien dégradé, vacance partielle et faible performance énergétique.",
      },
      {
        label: "Structuration",
        body:
          "Selon le schéma retenu, portage via une SCI dédiée par ASTY ou accompagnement en AMO pour le compte du propriétaire, avec optimisation fiscale et financement structuré.",
      },
      {
        label: "Transformation",
        body:
          "Pilotage de la restructuration, amélioration énergétique, redistribution des logements et coordination des intervenants.",
      },
      {
        label: "Résultat",
        body:
          "+35 % de valeur, stabilisation locative et amélioration du DPE.",
      },
    ],
  },
  projects: [
    {
      title: "Transformations résidentielles",
      mode: "Portage direct",
      image: "/asty-images/kitchen-detail.jpg",
      body:
        "Repositionnement d’immeubles existants avec amélioration énergétique et revalorisation locative, dans des schémas où ASTY peut porter l’actif et la transformation.",
    },
    {
      title: "Projets hybrides",
      mode: "AMO / structuration",
      image: "/asty-images/hybrid-courtyard.jpg",
      body:
        "Développement de projets intégrant de nouveaux usages à l’interface entre immobilier, culture et territoire, en accompagnement de propriétaires ou de partenaires publics et privés.",
    },
  ],
  aboutPage: {
    title: "À propos",
    intro:
      "ASTY est une structure indépendante dédiée à la transformation de l’existant. Nous privilégions les dossiers lisibles dans leur complexité, avec une logique d’exécution et de sélectivité.",
    convictionsTitle: "Une conviction forte : la valeur est déjà là",
    convictionsIntro:
      "L’immobilier existant constitue aujourd’hui le principal gisement de création de valeur.",
    convictions: [
      "la compréhension fine du bâti existant",
      "la structuration économique des opérations",
      "l’intégration des enjeux énergétiques",
      "l’adaptation des usages aux besoins contemporains",
    ],
    distinctions: [
      {
        title: "Indépendance",
        body:
          "Une structure légère et décisionnelle, avec un cadre d’intervention lisible pour le portage comme pour l’AMO.",
      },
      {
        title: "Sélectivité",
        body:
          "Une logique de tri des dossiers fondée sur la transformation réelle, et non sur le volume pour le volume.",
      },
      {
        title: "Exécution",
        body:
          "Un positionnement orienté montage, pilotage et mise en trajectoire des opérations.",
      },
    ],
    territoryTitle: "Territoire",
    territoryBody:
      "L’ancrage d’ASTY est aujourd’hui concentré sur la Nouvelle-Aquitaine, avec une attention particulière portée aux centralités urbaines et aux actifs existants à restructurer.",
  },
  contact: {
    title: "Présenter un actif ou initier un échange",
    intro:
      "Cession potentielle, mission AMO, partenariat ou simple prise de contact : ASTY peut étudier votre situation dans un cadre confidentiel.",
    privacy:
      "Chaque prise de contact fait l’objet d’une première lecture confidentielle. Vos informations ne sont utilisées que pour qualifier votre demande et vous recontacter dans un cadre strictement professionnel.",
    reassurance: [
      "Réponse sous 48h ouvrées.",
      "Aucune diffusion à des tiers.",
      "Premier échange orienté opération et faisabilité.",
    ],
    email: "asty.community.immo@gmail.com",
    formAction: "https://formspree.io/f/xeerdvwj",
    requestTypes: [
      { value: "actif", label: "Présenter un actif" },
      { value: "amo", label: "Mission AMO" },
      { value: "partenariat", label: "Partenariat" },
      { value: "autre", label: "Autre" },
    ],
  },
  footer: {
    title: "ASTY",
    strapline: "Portage d’actifs et AMO de transformation",
    regions: "Nouvelle-Aquitaine",
    note:
      "Structuration, portage et transformation d’actifs existants.",
  },
};
