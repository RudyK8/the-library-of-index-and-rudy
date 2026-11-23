const destinations = {
  constellations:{title:'Carte des constellations',kicker:"EXPLORER L'UNIVERS",symbol:'✧',description:'La galaxie rassemble les connaissances scientifiques. Explore les grandes constellations, découvre leurs étoiles et les liens qui unissent les disciplines.',detail:'Dans la version complète, tu pourras parcourir une carte scientifique en 2D ou en 3D. Chaque constellation représentera un grand thème scientifique ; chaque étoile, une sous-discipline ou un sous-thème. Les sujets pourront être reliés entre plusieurs constellations pour faire apparaître les liens interdisciplinaires.'},
  library:{title:'Bibliothèque et archives',kicker:'ARCHIVES & SAVOIRS',symbol:'▤',description:'Un espace dédié aux connaissances, aux ressources documentaires et aux grandes découvertes.',detail:'La bibliothèque réunira des articles, dossiers thématiques, publications scientifiques, ressources universitaires, vidéos, documentaires et archives historiques. Les contenus auront vocation à être organisés, reliés et accompagnés de sources identifiables.'},
  labs:{title:'Laboratoires interactifs',kicker:'EXPÉRIMENTER & COMPRENDRE',symbol:'⚗',description:'Apprends en explorant des expériences pédagogiques, des visualisations et des défis scientifiques.',detail:'Les laboratoires proposeront notamment des vidéos et documentaires pédagogiques, des schémas animés, des visualisations 3D ainsi que des défis et exercices scientifiques. Les expériences proposées par les membres devront être examinées avant publication.'},
  news:{title:'Actualités scientifiques',kicker:'LE MONDE EN MOUVEMENT',symbol:'▧',description:'Suis les découvertes, les recherches et les avancées qui font évoluer notre compréhension du monde.',detail:'Cette zone rassemblera des actualités scientifiques, des avancées de la recherche et des informations provenant de sources identifiables : universités, organismes de recherche, institutions et médias scientifiques.'},
  community:{title:'Communauté et événements',kicker:'PARTAGER & ÉCHANGER',symbol:'◎',description:'Un lieu de rencontre pour les passionnés, étudiants, chercheurs et institutions.',detail:'La communauté permettra à terme de publier, commenter, discuter, rejoindre des groupes thématiques et découvrir des conférences ou événements scientifiques. Les règles de publication, de confidentialité et de modération restent à concevoir.'},
  ai:{title:'Assistant intelligent',kicker:'QUESTIONNER LE SAVOIR',symbol:'✳',description:'Un assistant conçu pour accompagner la curiosité, expliquer des notions et aider à explorer les connaissances.',detail:"L’intelligence artificielle sera une fonctionnalité transversale : elle pourra être sollicitée depuis une fiche scientifique, une actualité ou un laboratoire. L’assistant réel et la recherche intelligente ne sont pas connectés dans ce prototype."},
  personal:{title:'Espace personnel',kicker:'TON ESPACE',symbol:'◉',description:'Un espace pour retrouver tes explorations, tes découvertes favorites et tes contributions.',detail:"À terme, cet espace pourra réunir un profil, les disciplines favorites, les contenus enregistrés, les contributions et l’historique des expériences. Les comptes et la sauvegarde réelle ne sont pas encore implémentés."}
};


// Carte scientifique V3 : panorama élargi de sous-disciplines. Les étoiles restent « à vérifier » tant qu’aucune validation éditoriale réelle n’a été effectuée.
const constellationData = [
  {
    "id": "physics",
    "name": "Physique",
    "subtitle": "Matière, énergie et lois de la nature",
    "history": {"origin": "Les racines de la physique remontent aux philosophies naturelles de l’Antiquité, notamment aux travaux grecs sur le mouvement, la matière et le cosmos. La discipline expérimentale moderne se structure surtout à partir des XVIe et XVIIe siècles.", "firstInnovation": "Jalon fondateur : les travaux de Galilée sur la chute des corps et l’expérimentation (début du XVIIe siècle), puis la mécanique de Newton (1687).", "recentInnovation": "Jalon récent majeur : la première détection directe des ondes gravitationnelles par LIGO, annoncée en 2016 à partir d’un signal observé en 2015."},
    "color": "#77d9ff",
    "x": 50,
    "y": 17,
    "stars": [
      [
        "Mécanique classique",
        "Mouvement, forces, équilibre et interactions.",
        "pending"
      ],
      [
        "Mécanique des fluides",
        "Comportement des liquides et des gaz.",
        "pending"
      ],
      [
        "Thermodynamique",
        "Chaleur, travail, énergie et transformations.",
        "pending"
      ],
      [
        "Électromagnétisme",
        "Champs électriques, champs magnétiques et ondes.",
        "pending"
      ],
      [
        "Optique",
        "Lumière, vision, lentilles et phénomènes lumineux.",
        "pending"
      ],
      [
        "Acoustique",
        "Sons, vibrations et propagation des ondes mécaniques.",
        "pending"
      ],
      [
        "Physique quantique",
        "Comportement de la matière et de la lumière à petite échelle.",
        "pending"
      ],
      [
        "Physique atomique",
        "Structure et propriétés des atomes.",
        "pending"
      ],
      [
        "Physique moléculaire",
        "Structure, spectres et dynamique des molécules.",
        "pending"
      ],
      [
        "Physique nucléaire",
        "Noyaux atomiques et phénomènes nucléaires.",
        "pending"
      ],
      [
        "Physique des particules",
        "Particules élémentaires et interactions fondamentales.",
        "pending"
      ],
      [
        "Relativité",
        "Espace-temps, gravitation et relativité.",
        "pending"
      ],
      [
        "Astrophysique",
        "Phénomènes physiques dans les objets et milieux célestes.",
        "pending"
      ],
      [
        "Physique statistique",
        "Comportements collectifs et systèmes à grand nombre de particules.",
        "pending"
      ],
      [
        "Physique de la matière condensée",
        "Propriétés des solides, liquides et matériaux.",
        "pending"
      ],
      [
        "Physique des plasmas",
        "Gaz ionisés et leurs interactions avec les champs.",
        "pending"
      ],
      [
        "Physique expérimentale",
        "Mesures, instruments et expériences physiques.",
        "pending"
      ],
      [
        "Physique appliquée",
        "Applications des principes physiques aux technologies.",
        "pending"
      ]
    ]
  },
  {
    "id": "math",
    "name": "Mathématiques",
    "subtitle": "Structures, nombres et raisonnement",
    "history": {"origin": "Les mathématiques se développent dans plusieurs civilisations anciennes — Mésopotamie, Égypte, Inde, Chine et monde grec — à partir du calcul, de la mesure, de la géométrie et de l’astronomie.", "firstInnovation": "Jalon fondateur : les méthodes de calcul et de résolution d’équations consignées dans les tablettes mésopotamiennes, plusieurs millénaires avant notre ère.", "recentInnovation": "Jalon récent majeur : les progrès de la preuve assistée par ordinateur et des assistants de preuve formels, qui renforcent la vérification de démonstrations complexes au XXIe siècle."},
    "color": "#c6a4ff",
    "x": 24,
    "y": 30,
    "stars": [
      [
        "Arithmétique",
        "Nombres entiers, divisibilité et nombres premiers.",
        "pending"
      ],
      [
        "Algèbre",
        "Équations, opérations et structures algébriques.",
        "pending"
      ],
      [
        "Algèbre linéaire",
        "Vecteurs, matrices et espaces vectoriels.",
        "pending"
      ],
      [
        "Géométrie euclidienne",
        "Figures, distances, angles et constructions.",
        "pending"
      ],
      [
        "Géométrie différentielle",
        "Courbes, surfaces et espaces courbes.",
        "pending"
      ],
      [
        "Topologie",
        "Propriétés des espaces préservées par déformation.",
        "pending"
      ],
      [
        "Analyse réelle",
        "Suites, fonctions, limites et continuité.",
        "pending"
      ],
      [
        "Analyse complexe",
        "Fonctions et nombres complexes.",
        "pending"
      ],
      [
        "Calcul différentiel",
        "Dérivées et variations.",
        "pending"
      ],
      [
        "Calcul intégral",
        "Intégrales et accumulation de quantités.",
        "pending"
      ],
      [
        "Équations différentielles",
        "Équations décrivant des évolutions.",
        "pending"
      ],
      [
        "Probabilités",
        "Modélisation du hasard et des événements.",
        "pending"
      ],
      [
        "Statistiques",
        "Collecte, description et interprétation des données.",
        "pending"
      ],
      [
        "Combinatoire",
        "Dénombrement et arrangements.",
        "pending"
      ],
      [
        "Théorie des nombres",
        "Propriétés profondes des nombres.",
        "pending"
      ],
      [
        "Logique mathématique",
        "Langages formels, démonstrations et modèles.",
        "pending"
      ],
      [
        "Théorie des ensembles",
        "Ensembles, relations et fondements.",
        "pending"
      ],
      [
        "Mathématiques discrètes",
        "Structures finies ou dénombrables.",
        "pending"
      ],
      [
        "Optimisation",
        "Recherche de solutions meilleures sous contraintes.",
        "pending"
      ],
      [
        "Recherche opérationnelle",
        "Aide mathématique à la décision.",
        "pending"
      ],
      [
        "Systèmes dynamiques",
        "Évolution des systèmes au cours du temps.",
        "pending"
      ],
      [
        "Théorie des graphes",
        "Réseaux de sommets et de relations.",
        "pending"
      ],
      [
        "Mathématiques appliquées",
        "Outils mathématiques pour les sciences et l’ingénierie.",
        "pending"
      ]
    ]
  },
  {
    "id": "chemistry",
    "name": "Chimie",
    "subtitle": "Atomes, molécules et transformations",
    "history": {"origin": "La chimie possède des racines dans les techniques anciennes de métallurgie, de teinture, de verrerie et de préparation des matériaux. Elle devient une science quantitative à l’époque moderne.", "firstInnovation": "Jalon fondateur : la formulation de la conservation de la masse et la réforme de la nomenclature chimique par Antoine Lavoisier, à la fin du XVIIIe siècle.", "recentInnovation": "Jalon récent majeur : le développement de la cryo-microscopie électronique, dont les progrès ont transformé l’observation des structures moléculaires et ont été récompensés par le Nobel de chimie 2017."},
    "color": "#79f0cf",
    "x": 77,
    "y": 34,
    "stars": [
      [
        "Chimie générale",
        "Principes fondamentaux de la matière et des réactions.",
        "pending"
      ],
      [
        "Chimie organique",
        "Composés du carbone et leurs transformations.",
        "pending"
      ],
      [
        "Chimie inorganique",
        "Éléments et composés non principalement organiques.",
        "pending"
      ],
      [
        "Chimie physique",
        "Bases physiques des systèmes et réactions chimiques.",
        "pending"
      ],
      [
        "Chimie analytique",
        "Identification et quantification des substances.",
        "pending"
      ],
      [
        "Biochimie",
        "Molécules et réactions chimiques du vivant.",
        "pending"
      ],
      [
        "Chimie théorique",
        "Modèles et calculs pour comprendre les systèmes chimiques.",
        "pending"
      ],
      [
        "Chimie computationnelle",
        "Simulation numérique des molécules et réactions.",
        "pending"
      ],
      [
        "Thermochimie",
        "Échanges d’énergie lors des transformations chimiques.",
        "pending"
      ],
      [
        "Cinétique chimique",
        "Vitesse et mécanismes des réactions.",
        "pending"
      ],
      [
        "Électrochimie",
        "Réactions liées aux transferts d’électrons.",
        "pending"
      ],
      [
        "Chimie des matériaux",
        "Composition et propriétés chimiques des matériaux.",
        "pending"
      ],
      [
        "Chimie des polymères",
        "Macromolécules et matières polymères.",
        "pending"
      ],
      [
        "Chimie supramoléculaire",
        "Assemblages de molécules par interactions non covalentes.",
        "pending"
      ],
      [
        "Chimie environnementale",
        "Substances et réactions dans l’environnement.",
        "pending"
      ],
      [
        "Chimie médicinale",
        "Conception et étude de molécules à visée thérapeutique.",
        "pending"
      ],
      [
        "Chimie des surfaces",
        "Propriétés et réactions aux interfaces.",
        "pending"
      ],
      [
        "Photochimie",
        "Transformations chimiques déclenchées par la lumière.",
        "pending"
      ],
      [
        "Chimie nucléaire",
        "Propriétés et transformations des noyaux en contexte chimique.",
        "pending"
      ],
      [
        "Chimie industrielle",
        "Procédés chimiques à l’échelle industrielle.",
        "pending"
      ]
    ]
  },
  {
    "id": "life",
    "name": "Biologie",
    "subtitle": "Le vivant, de la cellule aux écosystèmes",
    "history": {"origin": "L’étude du vivant remonte aux observations et classifications de l’Antiquité, notamment dans les travaux d’Aristote. La biologie moderne se construit progressivement avec l’anatomie, la microscopie, l’évolution et la génétique.", "firstInnovation": "Jalon fondateur : l’observation de cellules dans du liège par Robert Hooke en 1665, qui introduit le terme « cellule ».", "recentInnovation": "Jalon récent majeur : le développement d’AlphaFold et la mise à disposition à grande échelle de prédictions de structures protéiques, une avancée déterminante annoncée au début des années 2020."},
    "color": "#a9e78a",
    "x": 34,
    "y": 57,
    "stars": [
      [
        "Biologie cellulaire",
        "Structure, fonctionnement et cycle des cellules.",
        "pending"
      ],
      [
        "Biologie moléculaire",
        "Mécanismes moléculaires du vivant.",
        "pending"
      ],
      [
        "Génétique",
        "Hérédité et variation de l’information génétique.",
        "pending"
      ],
      [
        "Génomique",
        "Étude globale des génomes.",
        "pending"
      ],
      [
        "Génétique des populations",
        "Variation génétique au sein des populations.",
        "pending"
      ],
      [
        "Évolution",
        "Diversification du vivant au cours du temps.",
        "pending"
      ],
      [
        "Écologie",
        "Relations entre organismes et environnement.",
        "pending"
      ],
      [
        "Écologie comportementale",
        "Influence de l’environnement sur les comportements.",
        "pending"
      ],
      [
        "Éthologie",
        "Comportement des animaux.",
        "pending"
      ],
      [
        "Microbiologie",
        "Micro-organismes et leurs activités.",
        "pending"
      ],
      [
        "Virologie",
        "Virus et interactions avec leurs hôtes.",
        "pending"
      ],
      [
        "Bactériologie",
        "Bactéries et leurs propriétés.",
        "pending"
      ],
      [
        "Mycologie",
        "Champignons et diversité fongique.",
        "pending"
      ],
      [
        "Botanique",
        "Plantes, diversité et fonctionnement.",
        "pending"
      ],
      [
        "Zoologie",
        "Animaux, diversité et classification.",
        "pending"
      ],
      [
        "Physiologie",
        "Fonctionnement des organismes et de leurs organes.",
        "pending"
      ],
      [
        "Anatomie",
        "Structure des organismes vivants.",
        "pending"
      ],
      [
        "Immunologie",
        "Système immunitaire et défenses biologiques.",
        "pending"
      ],
      [
        "Neurosciences",
        "Système nerveux et fonctionnement cérébral.",
        "pending"
      ],
      [
        "Biologie du développement",
        "Formation et transformation des organismes.",
        "pending"
      ],
      [
        "Biologie marine",
        "Organismes et écosystèmes marins.",
        "pending"
      ],
      [
        "Paléontologie",
        "Traces et formes anciennes de vie.",
        "pending"
      ],
      [
        "Systématique et taxonomie",
        "Identification, classification et relations entre organismes.",
        "pending"
      ],
      [
        "Biotechnologies",
        "Utilisation du vivant et de ses composants.",
        "pending"
      ],
      [
        "Biologie synthétique",
        "Conception et modification de systèmes biologiques.",
        "pending"
      ],
      [
        "Parasitologie",
        "Parasites et relations avec leurs hôtes.",
        "pending"
      ]
    ]
  },
  {
    "id": "computing",
    "name": "Informatique",
    "subtitle": "Information, calcul et systèmes numériques",
    "history": {"origin": "Les fondements de l’informatique s’enracinent dans les systèmes de calcul, la logique et les machines mécaniques. La discipline théorique et les ordinateurs programmables prennent forme surtout aux XIXe et XXe siècles.", "firstInnovation": "Jalon fondateur : la machine analytique imaginée par Charles Babbage au XIXe siècle et les travaux d’Ada Lovelace sur la programmation de cette machine.", "recentInnovation": "Jalon récent majeur : les progrès des grands modèles d’intelligence artificielle générative et leur intégration dans les outils logiciels, particulièrement depuis 2022."},
    "color": "#7eafff",
    "x": 65,
    "y": 59,
    "stars": [
      [
        "Algorithmique",
        "Méthodes structurées de résolution de problèmes.",
        "pending"
      ],
      [
        "Programmation",
        "Conception et écriture de programmes.",
        "pending"
      ],
      [
        "Génie logiciel",
        "Conception, test, maintenance et évolution des logiciels.",
        "pending"
      ],
      [
        "Intelligence artificielle",
        "Systèmes réalisant des tâches associées à des capacités cognitives.",
        "pending"
      ],
      [
        "Apprentissage automatique",
        "Méthodes permettant aux systèmes d’apprendre à partir de données.",
        "pending"
      ],
      [
        "Science des données",
        "Analyse et exploitation de données.",
        "pending"
      ],
      [
        "Bases de données",
        "Stockage, organisation et interrogation des données.",
        "pending"
      ],
      [
        "Systèmes et architecture",
        "Organisation des ordinateurs et des systèmes d’exploitation.",
        "pending"
      ],
      [
        "Réseaux informatiques",
        "Communication entre équipements et services.",
        "pending"
      ],
      [
        "Cybersécurité",
        "Protection des systèmes, réseaux et données.",
        "pending"
      ],
      [
        "Cryptographie",
        "Techniques mathématiques de protection de l’information.",
        "pending"
      ],
      [
        "Informatique théorique",
        "Fondements du calcul, complexité et langages formels.",
        "pending"
      ],
      [
        "Interaction humain-machine",
        "Conception des interactions entre personnes et systèmes.",
        "pending"
      ],
      [
        "Développement web",
        "Applications et technologies du Web.",
        "pending"
      ],
      [
        "Informatique graphique",
        "Images de synthèse, rendu et visualisation.",
        "pending"
      ],
      [
        "Robotique",
        "Systèmes informatiques et mécaniques autonomes.",
        "pending"
      ],
      [
        "Informatique embarquée",
        "Logiciels intégrés dans des appareils.",
        "pending"
      ],
      [
        "Cloud computing",
        "Ressources informatiques fournies à distance.",
        "pending"
      ],
      [
        "Informatique distribuée",
        "Calcul et services répartis sur plusieurs machines.",
        "pending"
      ],
      [
        "Compilation",
        "Traduction des langages de programmation.",
        "pending"
      ],
      [
        "Calcul haute performance",
        "Calcul intensif et architectures parallèles.",
        "pending"
      ],
      [
        "Informatique quantique",
        "Calcul fondé sur les principes de la physique quantique.",
        "pending"
      ],
      [
        "Réalité virtuelle et augmentée",
        "Environnements immersifs et superposition d’informations.",
        "pending"
      ],
      [
        "DevOps et automatisation",
        "Automatisation des processus de développement et d’exploitation.",
        "pending"
      ],
      [
        "Systèmes d’information",
        "Organisation des données, outils et processus numériques.",
        "pending"
      ]
    ]
  },
  {
    "id": "earth",
    "name": "Sciences de la Terre",
    "subtitle": "Notre planète et ses systèmes",
    "history": {"origin": "Les sciences de la Terre émergent de pratiques anciennes d’observation des roches, des fossiles, des séismes et des paysages. La géologie moderne se structure aux XVIIIe et XIXe siècles.", "firstInnovation": "Jalon fondateur : la formulation du principe de superposition des couches géologiques, notamment associé à Nicolas Sténon au XVIIe siècle.", "recentInnovation": "Jalon récent majeur : l’amélioration des modèles du système terrestre grâce aux satellites d’observation, aux mesures océaniques et aux simulations climatiques couplées."},
    "color": "#e8bd7d",
    "x": 16,
    "y": 76,
    "stars": [
      [
        "Géologie",
        "Composition, structure et histoire de la Terre.",
        "pending"
      ],
      [
        "Minéralogie",
        "Minéraux, propriétés et formation.",
        "pending"
      ],
      [
        "Pétrologie",
        "Origine et transformation des roches.",
        "pending"
      ],
      [
        "Géochimie",
        "Composition chimique et cycles des éléments terrestres.",
        "pending"
      ],
      [
        "Géophysique",
        "Structure terrestre étudiée par les méthodes physiques.",
        "pending"
      ],
      [
        "Sismologie",
        "Séismes et propagation des ondes sismiques.",
        "pending"
      ],
      [
        "Volcanologie",
        "Volcans, magmas et phénomènes éruptifs.",
        "pending"
      ],
      [
        "Tectonique",
        "Déformation de la lithosphère et mouvements des plaques.",
        "pending"
      ],
      [
        "Paléontologie",
        "Fossiles et histoire de la vie et des milieux.",
        "pending"
      ],
      [
        "Stratigraphie",
        "Couches géologiques et succession des événements.",
        "pending"
      ],
      [
        "Géomorphologie",
        "Formes du relief et processus qui les façonnent.",
        "pending"
      ],
      [
        "Hydrologie",
        "Eaux continentales et cycle de l’eau.",
        "pending"
      ],
      [
        "Hydrogéologie",
        "Eaux souterraines et aquifères.",
        "pending"
      ],
      [
        "Océanographie physique",
        "Circulation, vagues et propriétés physiques des océans.",
        "pending"
      ],
      [
        "Océanographie biologique",
        "Vie marine et fonctionnement des écosystèmes océaniques.",
        "pending"
      ],
      [
        "Climatologie",
        "Climats, variabilité et changements climatiques.",
        "pending"
      ],
      [
        "Météorologie",
        "Atmosphère et phénomènes du temps.",
        "pending"
      ],
      [
        "Glaciologie",
        "Glaciers, calottes et glaces terrestres.",
        "pending"
      ],
      [
        "Pédologie",
        "Sols, formation et propriétés.",
        "pending"
      ],
      [
        "Géographie physique",
        "Répartition spatiale des milieux naturels.",
        "pending"
      ],
      [
        "Géodésie",
        "Forme, dimensions et champ de gravité de la Terre.",
        "pending"
      ],
      [
        "Télédétection",
        "Observation de la Terre à distance.",
        "pending"
      ],
      [
        "Sciences de l’environnement",
        "Interactions entre milieux naturels et activités humaines.",
        "pending"
      ],
      [
        "Risques naturels",
        "Aléas naturels, vulnérabilité et prévention.",
        "pending"
      ]
    ]
  },
  {
    "id": "universe",
    "name": "Astronomie",
    "subtitle": "Étoiles, planètes et cosmos",
    "history": {"origin": "L’astronomie est l’une des plus anciennes sciences : les civilisations mésopotamiennes, égyptiennes, chinoises et d’autres ont observé les cycles célestes pour établir calendriers et modèles du ciel.", "firstInnovation": "Jalon fondateur : les premiers catalogues et relevés systématiques du ciel dans l’Antiquité, notamment les traditions babyloniennes et grecques.", "recentInnovation": "Jalon récent majeur : les premières images scientifiques du télescope spatial James-Webb publiées en 2022, qui ouvrent une nouvelle fenêtre sur les galaxies anciennes et les atmosphères d’exoplanètes."},
    "color": "#e6a7ed",
    "x": 51,
    "y": 83,
    "stars": [
      [
        "Astrophysique",
        "Propriétés physiques des objets et phénomènes célestes.",
        "pending"
      ],
      [
        "Astronomie observationnelle",
        "Observation du ciel avec des instruments.",
        "pending"
      ],
      [
        "Astronomie théorique",
        "Modèles expliquant les phénomènes astronomiques.",
        "pending"
      ],
      [
        "Cosmologie",
        "Origine, structure et évolution de l’Univers.",
        "pending"
      ],
      [
        "Planétologie",
        "Planètes, lunes et petits corps du système solaire.",
        "pending"
      ],
      [
        "Science des exoplanètes",
        "Planètes situées autour d’autres étoiles.",
        "pending"
      ],
      [
        "Physique stellaire",
        "Naissance, structure et évolution des étoiles.",
        "pending"
      ],
      [
        "Formation des systèmes planétaires",
        "Formation des étoiles et de leurs systèmes planétaires.",
        "pending"
      ],
      [
        "Astrochimie",
        "Molécules et réactions chimiques dans l’espace.",
        "pending"
      ],
      [
        "Astrobiologie",
        "Conditions d’apparition et possibilité de vie dans l’Univers.",
        "pending"
      ],
      [
        "Astronomie galactique",
        "Structure et évolution des galaxies.",
        "pending"
      ],
      [
        "Astronomie extragalactique",
        "Objets et phénomènes au-delà de la Voie lactée.",
        "pending"
      ],
      [
        "Physique solaire",
        "Soleil, activité et interactions avec l’espace.",
        "pending"
      ],
      [
        "Héliophysique",
        "Soleil et environnement spatial du système solaire.",
        "pending"
      ],
      [
        "Astrométrie",
        "Positions, distances et mouvements des astres.",
        "pending"
      ],
      [
        "Radioastronomie",
        "Observation des ondes radio émises par les objets célestes.",
        "pending"
      ],
      [
        "Astronomie des hautes énergies",
        "Rayons X, gamma et phénomènes énergétiques.",
        "pending"
      ],
      [
        "Gravitation et trous noirs",
        "Objets compacts et phénomènes gravitationnels.",
        "pending"
      ],
      [
        "Petits corps du système solaire",
        "Comètes, astéroïdes et météoroïdes.",
        "pending"
      ],
      [
        "Archéoastronomie",
        "Relations entre sociétés anciennes et observations du ciel.",
        "pending"
      ],
      [
        "Instrumentation astronomique",
        "Télescopes, détecteurs et outils d’observation.",
        "pending"
      ]
    ]
  },
  {
    "id": "human",
    "name": "Sciences humaines",
    "subtitle": "Sociétés, cultures et comportements",
    "history": {"origin": "Les sciences humaines prennent leurs racines dans la philosophie, l’histoire, l’étude des langues, des sociétés et des institutions de l’Antiquité. Leur structuration en disciplines scientifiques distinctes s’accélère aux XVIIIe et XIXe siècles.", "firstInnovation": "Jalon fondateur : les premières démarches historiques, politiques et sociales systématiques de l’Antiquité, notamment chez Hérodote, Thucydide et les penseurs grecs.", "recentInnovation": "Jalon récent majeur : l’essor des humanités numériques, qui mobilisent données, corpus numérisés et méthodes computationnelles pour étudier les sociétés et les cultures."},
    "color": "#f2a9a0",
    "x": 84,
    "y": 78,
    "stars": [
      [
        "Psychologie",
        "Comportements et processus mentaux.",
        "pending"
      ],
      [
        "Psychologie cognitive",
        "Mémoire, perception, attention et raisonnement.",
        "pending"
      ],
      [
        "Psychologie sociale",
        "Influence des groupes et des interactions sociales.",
        "pending"
      ],
      [
        "Psychologie du développement",
        "Évolutions psychologiques au cours de la vie.",
        "pending"
      ],
      [
        "Sociologie",
        "Groupes, institutions et phénomènes sociaux.",
        "pending"
      ],
      [
        "Anthropologie",
        "Humains, cultures et diversité des sociétés.",
        "pending"
      ],
      [
        "Ethnologie",
        "Pratiques et représentations des groupes humains.",
        "pending"
      ],
      [
        "Histoire",
        "Étude critique des sociétés et événements passés.",
        "pending"
      ],
      [
        "Archéologie",
        "Sociétés passées à travers leurs traces matérielles.",
        "pending"
      ],
      [
        "Linguistique",
        "Langues, structures et usages.",
        "pending"
      ],
      [
        "Sciences du langage",
        "Langage, communication et acquisition.",
        "pending"
      ],
      [
        "Géographie humaine",
        "Organisation spatiale des sociétés.",
        "pending"
      ],
      [
        "Science politique",
        "Pouvoir, institutions et comportements politiques.",
        "pending"
      ],
      [
        "Relations internationales",
        "Relations entre États et acteurs mondiaux.",
        "pending"
      ],
      [
        "Économie",
        "Production, échange, répartition et consommation.",
        "pending"
      ],
      [
        "Économie comportementale",
        "Décisions économiques et comportements humains.",
        "pending"
      ],
      [
        "Démographie",
        "Structure et évolution des populations.",
        "pending"
      ],
      [
        "Sciences de l’éducation",
        "Apprentissage, enseignement et systèmes éducatifs.",
        "pending"
      ],
      [
        "Philosophie",
        "Concepts, raisonnements et questions fondamentales.",
        "pending"
      ],
      [
        "Éthique",
        "Étude des valeurs et des choix moraux.",
        "pending"
      ],
      [
        "Sciences juridiques",
        "Droit, normes et institutions juridiques.",
        "pending"
      ],
      [
        "Criminologie",
        "Phénomènes criminels, prévention et justice.",
        "pending"
      ],
      [
        "Communication",
        "Médias, information et interactions.",
        "pending"
      ],
      [
        "Sciences de l’information",
        "Production, organisation et circulation de l’information.",
        "pending"
      ],
      [
        "Études culturelles",
        "Cultures, représentations et pratiques.",
        "pending"
      ],
      [
        "Musicologie",
        "Musique, œuvres, pratiques et contextes.",
        "pending"
      ],
      [
        "Sciences des religions",
        "Faits religieux, traditions et pratiques étudiés scientifiquement.",
        "pending"
      ],
      [
        "Urbanisme",
        "Villes, territoires et aménagement.",
        "pending"
      ],
      [
        "Travail et organisations",
        "Activités professionnelles et dynamiques organisationnelles.",
        "pending"
      ]
    ]
  }
];
let activeConstellation = null;
let activeStar = null;

const overlay = document.getElementById('overlay');
const overlayBody = document.getElementById('overlayBody');
const closeOverlayButton = document.getElementById('closeOverlay');
const explorerTrigger = document.getElementById('explorerTrigger');
const explorerMenu = document.getElementById('explorerMenu');
const mainNav = document.getElementById('mainNav');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const toast = document.getElementById('toast');
let lastFocused = null;
let toastTimer;

function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'),2600);
}

function openOverlay(key){
  const opener = document.activeElement;
  lastFocused = opener instanceof HTMLElement ? opener : null;
  const item = destinations[key];
  if(key === 'constellations'){
    activeConstellation = null; activeStar = null; renderConstellationMap();
  } else if(key === 'about'){
    overlayBody.innerHTML = `<div class="about-copy"><span class="eyebrow">À PROPOS DU PROJET</span><h2 id="overlayTitle">Une bibliothèque pour explorer l'inconnu.</h2><p>The Library of Index and Rudy est un projet de plateforme numérique qui veut rendre les sciences plus accessibles, relier les connaissances et donner envie de découvrir quelque chose de nouveau chaque jour.</p><p>Son ambition est de réunir une bibliothèque de ressources, une carte scientifique explorable, des laboratoires pédagogiques et une communauté curieuse, dans un même univers cohérent.</p><span class="preparing">Prototype de conception · V4</span><br><button class="back-hall" data-close-overlay>Retour au Hall <span>↗</span></button></div>`;
  } else if(key === 'discovery'){
    overlayBody.innerHTML = `<article class="discovery-detail"><div class="overlay-visual"><span class="visual-symbol">◉</span></div><span class="eyebrow">ASTRONOMIE · EXPLORATION</span><h2 id="overlayTitle">Les mondes qui flottent dans l'invisible</h2><p>Les exoplanètes sont des planètes situées en dehors de notre système solaire. Certaines orbitent autour d'étoiles très lointaines ; d'autres suivent des trajectoires qui rendent leur détection particulièrement délicate.</p><p>Les astronomes peuvent notamment repérer certaines d'entre elles en observant la très légère baisse de luminosité d'une étoile lorsqu'une planète passe devant elle. D'autres méthodes étudient les petits mouvements de l'étoile provoqués par l'attraction gravitationnelle de la planète.</p><p>Chaque nouvelle détection enrichit notre compréhension de la diversité des systèmes planétaires et aide les scientifiques à poser de nouvelles questions sur la formation des mondes.</p><div class="source-note"><b>Source de démonstration :</b> NASA — Exoplanet Exploration, nasa.gov. Cette fiche est un contenu statique de prototype ; elle n'est pas reliée à une base d'actualités.</div><button class="back-hall" data-close-overlay>Retour au Hall <span>↗</span></button></article>`;
  } else {
    overlayBody.innerHTML = `<div class="overlay-content"><div class="overlay-visual"><span class="visual-symbol">${item.symbol}</span></div><div class="overlay-copy"><span class="eyebrow">${item.kicker}</span><h2 id="overlayTitle">${item.title}</h2><p>${item.description}</p><p>${item.detail}</p><span class="preparing">En préparation</span><br><button class="back-hall" data-close-overlay>Retour au Hall <span>↗</span></button></div></div>`;
  }
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  explorerMenu.hidden = true;
  explorerTrigger.setAttribute('aria-expanded','false');
  mainNav.classList.remove('open');
  mobileMenuToggle.setAttribute('aria-expanded','false');
  closeOverlayButton.focus();
}


function renderConstellationMap(){
  const selected = constellationData.find(item=>item.id===activeConstellation);
  const legend = `<div class="map-legend map-legend-persistent" aria-label="Légende du statut scientifique"><span><i class="legend-gold">★</i> Étoile jaune = à vérifier</span><span><i class="legend-blue">★</i> Étoile bleue = vérifiée</span></div>`;
  if(!selected){
    const nodes = constellationData.map(item=>`<button class="constellation-node" data-constellation="${item.id}" style="--node-color:${item.color};--node-x:${item.x}%;--node-y:${item.y}%" aria-label="Ouvrir la présentation de la constellation ${item.name}"><span class="node-stars"><i></i><i></i><i></i></span><strong>${item.name}</strong><small>${item.stars.length} étoiles</small></button>`).join('');
    overlayBody.innerHTML = `<section class="constellation-explorer"><div class="map-heading"><div><span class="eyebrow">CARTOGRAPHIE DU SAVOIR · V4</span><h1 id="overlayTitle">La carte des <em>constellations.</em></h1><p>Choisis une grande discipline : sa présentation historique s’ouvrira avant l’exploration de ses étoiles.</p></div>${legend}</div><div class="map-toolbar"><span class="map-breadcrumb">GALAXIE <b>•</b> VUE GÉNÉRALE</span><span class="map-hint">Sélectionne une constellation</span></div><div class="constellation-map" aria-label="Carte interactive des disciplines scientifiques"><svg class="map-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 17 L24 30 L34 57 L16 76 L51 83 L84 78 L65 59 L77 34 Z M24 30 L77 34 M34 57 L65 59 M50 17 L65 59 M16 76 L65 59 M77 34 L84 78"/></svg><div class="map-core"><span>✦</span><b>THE LIBRARY</b><small>OF INDEX & RUDY</small></div>${nodes}</div><div class="map-bottom-note"><span>✧</span> Les liens lumineux symbolisent les relations entre les disciplines. Les sous-domaines sont un panorama initial, qui pourra être enrichi.</div></section>`;
    return;
  }
  if(activeStar!==null){
    const star=selected.stars[activeStar];
    overlayBody.innerHTML=`<section class="star-page" style="--node-color:${selected.color}"><button class="map-back star-return" data-star-back>← Retour à la constellation</button><div class="star-page-hero"><span class="star-page-symbol">★</span><span class="eyebrow">ÉTOILE · ${selected.name.toUpperCase()}</span><h1 id="overlayTitle">${star[0]}</h1><p class="star-lead">${star[1]}</p><span class="verification pending"><i></i> À vérifier</span></div><div class="star-page-content"><article><span class="eyebrow">PRÉSENTATION</span><h2>Explorer ce domaine</h2><p>Cette étoile représente un point d’entrée vers les sujets, concepts, découvertes et ressources associés à ${star[0].toLowerCase()}. Sa fiche détaillée pourra accueillir des articles scientifiques, des données, une chronologie, des publications et des liens vers d’autres disciplines.</p></article><aside class="star-related"><span class="eyebrow">CONSTELLATION</span><h3>${selected.name}</h3><p>${selected.subtitle}</p><p class="detail-explainer">Les ressources de démonstration ne sont pas encore reliées à une base documentaire ni à un processus de validation scientifique.</p></aside></div></section>`;
    return;
  }
  const stars = selected.stars.map((star,index)=>`<button class="star-card" data-star="${index}" style="--node-color:${selected.color}"><span class="star-orb status-pending">★</span><span><strong>${star[0]}</strong><small>${star[1]}</small></span><span class="star-arrow">↗</span></button>`).join('');
  const skyStars = selected.stars.map((star,index)=>{
    const angle=(2*Math.PI*index/selected.stars.length)-Math.PI/2;
    const radius=0.34;
    const left=50+Math.cos(angle)*radius*100;
    const top=50+Math.sin(angle)*radius*100;
    return `<button class="focused-star" style="left:${left}%;top:${top}%" data-star="${index}" aria-label="Ouvrir la fiche ${star[0]}"><i class="star-status-pending">★</i><span>${star[0]}</span></button>`;
  }).join('');
  overlayBody.innerHTML = `<section class="constellation-explorer focused-map"><div class="map-heading"><div><span class="eyebrow">CONSTELLATION · PRÉSENTATION</span><h1 id="overlayTitle">${selected.name}</h1><p>${selected.subtitle}</p></div><span class="constellation-emblem" style="--node-color:${selected.color}">✧</span></div>${legend}<div class="constellation-history"><div class="history-intro"><span class="eyebrow">REPÈRES HISTORIQUES</span><p>${selected.history.origin}</p></div><div class="history-milestones"><article><span>01 · PREMIER REPÈRE</span><h3>Première innovation marquante</h3><p>${selected.history.firstInnovation}</p></article><article><span>02 · REPÈRE RÉCENT</span><h3>Innovation récente marquante</h3><p>${selected.history.recentInnovation}</p></article></div><p class="history-caveat">Repères historiques synthétiques : ils illustrent des étapes majeures, sans prétendre identifier de façon absolue la toute première ou la toute dernière innovation du domaine.</p></div><div class="map-toolbar"><button class="map-back" data-map-back>← Retour à la galaxie</button><span class="map-hint">${selected.stars.length} sous-domaines répertoriés</span></div><div class="focused-layout"><div class="focused-sky" style="--node-color:${selected.color}"><div class="focused-orbit orbit-one"></div><div class="focused-orbit orbit-two"></div><div class="focused-core">✦</div>${skyStars}</div><div class="star-list"><div class="star-list-heading"><span class="eyebrow">LES ÉTOILES</span><span>${selected.name}</span></div>${stars}</div></div><div class="map-bottom-note"><span>✧</span> Les étoiles jaunes signalent les sous-domaines dont les contenus restent à vérifier. Une validation réelle sera nécessaire avant de les afficher en bleu.</div></section>`;
}

document.addEventListener('click',(event)=>{
  const constellationButton = event.target.closest('[data-constellation]');
  if(constellationButton){activeConstellation=constellationButton.dataset.constellation;activeStar=null;renderConstellationMap();overlayBody.scrollTop=0;return;}
  if(event.target.closest('[data-map-back]')){activeConstellation=null;activeStar=null;renderConstellationMap();overlayBody.scrollTop=0;return;}
  const starButton=event.target.closest('[data-star]');
  if(starButton){activeStar=Number(starButton.dataset.star);renderConstellationMap();overlayBody.scrollTop=0;return;}
  if(event.target.closest('[data-star-back]')){activeStar=null;renderConstellationMap();overlayBody.scrollTop=0;return;}
});

function closeOverlay(){
  if(overlay.hidden) return;
  overlay.hidden = true;
  document.body.style.overflow = '';
  if(lastFocused && document.contains(lastFocused)) lastFocused.focus();
}

document.addEventListener('click',(event)=>{
  const openButton = event.target.closest('[data-open]');
  if(openButton){openOverlay(openButton.dataset.open);return;}
  if(event.target.closest('[data-close-overlay]')){closeOverlay();return;}
  if(event.target === document.querySelector('.overlay-backdrop')){closeOverlay();return;}
  if(!event.target.closest('.explorer-wrap') && !explorerMenu.hidden){explorerMenu.hidden=true;explorerTrigger.setAttribute('aria-expanded','false');}
});

closeOverlayButton.addEventListener('click',closeOverlay);
document.addEventListener('keydown',(event)=>{
  if(event.key === 'Escape'){
    if(!overlay.hidden){closeOverlay();return;}
    if(!explorerMenu.hidden){explorerMenu.hidden=true;explorerTrigger.setAttribute('aria-expanded','false');explorerTrigger.focus();}
  }
  if(!overlay.hidden && event.key === 'Tab'){
    const focusables = [...overlay.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled && el.offsetParent !== null);
    if(!focusables.length)return;
    const first=focusables[0], last=focusables[focusables.length-1];
    if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
  }
});

explorerTrigger.addEventListener('click',()=>{
  const willOpen=explorerMenu.hidden;
  explorerMenu.hidden=!willOpen;
  explorerTrigger.setAttribute('aria-expanded',String(willOpen));
});
mobileMenuToggle.addEventListener('click',()=>{
  const willOpen=!mainNav.classList.contains('open');
  mainNav.classList.toggle('open',willOpen);
  mobileMenuToggle.setAttribute('aria-expanded',String(willOpen));
});

function announceSearch(){showToast('La recherche intelligente sera disponible dans une prochaine version.');}
document.getElementById('searchInfo').addEventListener('click',announceSearch);
document.getElementById('searchShell').addEventListener('click',announceSearch);
document.getElementById('searchShell').addEventListener('keydown',(event)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();announceSearch();}});

// Accueil guidé : étapes modulaires. Le contenu peut être enrichi sans imposer un nombre fixe d'écrans.
const guideSteps = [
  {eyebrow:'BIENVENUE',title:'Bienvenue dans The Library of Index and Rudy',text:'Un espace imaginé pour rendre les sciences accessibles, relier les connaissances et nourrir la curiosité. Ici, chaque découverte peut devenir le point de départ d’une nouvelle exploration.',symbol:'✦'},
  {eyebrow:'EXPLORER',title:'Une galaxie de connaissances',text:'La galaxie est la porte d’entrée vers la carte des constellations. Chaque constellation représente un grand thème scientifique ; les étoiles révèlent des sous-disciplines, des sujets et des découvertes.',symbol:'✧'},
  {eyebrow:'APPRENDRE',title:'Des espaces pour comprendre',text:'La bibliothèque rassemble les ressources. Les laboratoires proposent des expériences pédagogiques. Les actualités suivent les découvertes et les avancées scientifiques.',symbol:'▤'},
  {eyebrow:'ÉCHANGER',title:'Le savoir se partage',text:'La communauté, l’assistant intelligent et ton espace personnel enrichiront progressivement l’expérience. Certaines fonctionnalités sont encore en préparation dans cette première version.',symbol:'◎'},
  {eyebrow:'À TOI DE JOUER',title:'Ta curiosité donne le cap',text:'Explore librement le Hall, ouvre les espaces qui t’intriguent et découvre ton premier sujet. Tu pourras retrouver cette présentation depuis le Hall.',symbol:'↗'}
];
let guideIndex=0;
function renderGuide(){
  const step=guideSteps[guideIndex];
  overlayBody.innerHTML=`<div class="overlay-content guide-content"><div class="overlay-visual"><span class="visual-symbol">${step.symbol}</span></div><div class="overlay-copy"><span class="eyebrow">${step.eyebrow} · ÉTAPE ${guideIndex+1}</span><h2 id="overlayTitle">${step.title}</h2><p>${step.text}</p><div class="guide-progress" aria-label="Progression">${guideSteps.map((_,i)=>`<span class="${i===guideIndex?'current':''}"></span>`).join('')}</div><div class="guide-actions"><button class="text-link" id="guideSkip">Passer</button><div><button class="guide-prev" id="guidePrev" ${guideIndex===0?'disabled':''}>Précédent</button><button class="back-hall" id="guideNext">${guideIndex===guideSteps.length-1?'Commencer l’exploration':'Suivant'} <span>→</span></button></div></div></div></div>`;
  document.getElementById('guideSkip').addEventListener('click',closeOverlay);
  document.getElementById('guidePrev').addEventListener('click',()=>{if(guideIndex>0){guideIndex--;renderGuide();document.getElementById('guideNext').focus();}});
  document.getElementById('guideNext').addEventListener('click',()=>{if(guideIndex<guideSteps.length-1){guideIndex++;renderGuide();document.getElementById('guideNext').focus();}else{closeOverlay();showToast('Bienvenue dans le Hall central.');}});
  closeOverlayButton.focus();
}
function startGuide(){guideIndex=0;lastFocused=document.activeElement;overlay.hidden=false;document.body.style.overflow='hidden';renderGuide();}
const guideReplay=document.getElementById('guideReplay');
if(guideReplay) guideReplay.addEventListener('click',startGuide);

// Première visite : accueil guidé informatif. Pour revoir la présentation, utiliser le raccourci clavier G.
const guideSeen=sessionStorage.getItem('us-guide-seen');
if(!guideSeen){sessionStorage.setItem('us-guide-seen','1');setTimeout(startGuide,650);}
document.addEventListener('keydown',(event)=>{if(event.key.toLowerCase()==='g' && overlay.hidden && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){startGuide();}});
