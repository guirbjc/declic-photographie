document.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments
  const bubbleCircles = document.querySelectorAll('.info-bubble-circle');
  const infoPanel = document.getElementById('info-panel');
  const infoTitle = document.getElementById('info-title');
  const infoText = document.getElementById('info-text');
  const infoImage = document.getElementById('info-image');

  // Données pour chaque bulle
  const infoData = {
    'lens-info': {
      title: 'Objectif',
      text: `L'objectif est un système optique sophistiqué composé d'un assemblage de lentilles en verre optique traité (ou éléments optiques), souvent complété par des matériaux avancés comme le fluorite ou le verre à faible dispersion (ED) pour une performance optimale. Voici ses principales fonctions et caractéristiques techniques :

Focalisation et correction des aberrations :
- Focalisation précise : Les lentilles sont conçues pour converger les rayons lumineux sur le capteur avec une précision micrométrique, grâce à des algorithmes de mise au point automatique (AF) utilisant des moteurs ultrasoniques (USM), pas à pas (STM), ou linéaires (LM) selon les modèles.
Correction des aberrations :
- Aberration chromatique : Corrigée par des lentilles ED (Extra-low Dispersion) ou UD (Ultra-low Dispersion), qui réduisent la dispersion de la lumière en différentes longueurs d'onde.
- Aberration sphérique : Atténuée par des lentilles asphériques, dont la surface non sphérique est calculée pour minimiser les distorsions.
- Coma et astigmatisme : Réduits grâce à des groupes de lentilles symétriques et des calculs optiques avancés (ex: conception assistée par ordinateur avec des logiciels comme Zemax ou CODE V).

Contrôle de l'ouverture (diaphragme) :
- Mécanisme d'ouverture : Composé de lames métalliques (généralement entre 5 et 11), formant un polygone régulier pour un bokeh (flou d'arrière-plan) esthétique. Les diaphragmes modernes utilisent des lames arrondies pour un rendu plus doux.
- Nombre f/ : Représente le rapport focal (f = distance focale / diamètre de l'ouverture). Par exemple, un objectif f/1.4 laisse passer 4 fois plus de lumière qu'un f/2.8 (car (2.8/1.4)² ≈ 4).
- Ouverture maximale : Les objectifs "lumineux" (ex: f/1.2, f/1.4) utilisent des verres à haut indice de réfraction et des traitements anti-reflets pour minimiser les pertes de lumière.

Variation de la distance focale :
- Objectifs à focale fixe (prime) : Optimisés pour une seule distance focale (ex: 50mm f/1.8), ils offrent une netteté supérieure et moins de distorsions grâce à une conception optique simplifiée.
- Objectifs zoom : Utilisent des groupes de lentilles mobiles (ex: 3 à 5 groupes dans un 24-70mm f/2.8) pour couvrir une plage de focales. Les zooms haut de gamme intègrent des systèmes de compensation de distorsion et des moteurs linéaires pour un zoom fluide et précis.
- Stabilisation optique : Les objectifs modernes intègrent des systèmes de stabilisation (ex: VR chez Nikon, IS chez Canon) utilisant des gyroscopes et des lentilles flottantes pour compenser les mouvements (jusqu'à 5-6 stops de gain).

Revêtements anti-reflets et traitement des lentilles :
- Revêtements multi-couches : Comme le Nano Crystal Coat (Nikon), SWC (Sigma), ou Air Sphere Coating (Canon), qui réduisent les reflets internes et les fantômes (flares) en utilisant des couches nanométriques.
- Traitements hydrofuges et oléophobes : Appliqués sur la lentille frontale pour repousser l'eau, la poussière et les empreintes digitales (ex: Fluorine Coating de Canon).
- Revêtements durcis : Pour résister aux rayures (ex: Super Integrated Coating de Nikon).


Exemple technique :
Un objectif 24-70mm f/2.8 (comme le Nikon Z 24-70mm f/2.8 S) combine généralement :
- 16-20 éléments en 12-14 groupes, incluant des lentilles asphériques (pour corriger les distorsions) et ED (pour les aberrations chromatiques).
- Un diaphragme à 9 lames pour un bokeh circulaire.
- Des revêtements Nano Crystal Coat et ARNEO pour minimiser les reflets.
- Un moteur pas à pas (STM) pour une mise au point silencieuse et précise, idéal pour la vidéo.
- Une construction tropicalisée pour résister à l'humidité et à la poussière.
`,
      image: '../assets/svg/objectif-schema-3.svg'
    },
    'sensor-info': {
      title: 'Capteur',
      text: `Le capteur d'image (CMOS ou CCD) constitue le cœur numérique de l'appareil photo, agissant comme une matrice de photodétecteurs qui transforment les photons en signal électrique grâce à l'effet photoélectrique. Chaque photosite (ou pixel) est un système complexe composé :
- D'une photodiode en silicium dopé (pour capturer les photons et générer des paires électron-trou).
- D'un système de transistors (pour amplifier et transmettre le signal via un convertisseur analogique-numérique 12-16 bits).
- D'une microlentille (pour focaliser la lumière vers la photodiode, augmentant l'efficacité quantique de 20 à 30%).
La QE (Quantum Efficiency) mesure le pourcentage de photons incidents qui sont effectivement convertis en électrons par la photodiode du capteur. Elle s'exprime en % (ex: 50% à 550 nm signifie que la moitié des photons verts sont convertis).
Valeurs typiques :
Capteurs CMOS modernes : 40-60% (pic à 500-600 nm, vert).
Capteurs BSI (Back-Side Illuminated) : 60-70% (ex: Sony A7S III), grâce à l'absence d'obstacles devant la photodiode.
Capteurs scientifiques (ex: sCMOS) : Jusqu'à 95% (pour des applications comme l'astronomie).
- D'un filtre couleur (matrice de Bayer ou alternatives comme X-Trans) pour la décomposition spectrale.

Architecture optoélectronique avancée :
- Filtre passe-bas optique (OLPF - Optical Low-Pass Filter) :
Rôle : Atténue les artéfacts de moiré et d'aliasing en floutant légèrement l'image avant qu'elle n'atteigne le capteur.
Implémentation : Couche de cristal de quartz biréfringent (épaisseur calculée pour une résolution spécifique, ex: 30-40 µm pour un 24 MP).
Évolution : De moins en moins utilisé sur les capteurs haute résolution (>50 MP) grâce aux algorithmes de suppression numérique (ex: Nikon’s Anti-Aliasing Filter Simulator).
- Filtre infrarouge (IR Cut-off) :
Matériau : Verre BG39 ou KG3 (Schott) bloquant les longueurs d'onde >700 nm.
Efficacité : Transmittance de 90% dans le visible vs <1% dans l'IR pour éviter les fausses couleurs.
Variantes : Certains appareils (ex: Leica Monochrom) suppriment ce filtre pour la photographie IR dédiée.
- Matrice de Bayer :
Structure : Motif 2×2 (1 rouge, 2 verts, 1 bleu) optimisé pour la vision humaine (plus sensible au vert).
Efficacité : 50% des pixels captent le vert, améliorant la résolution de luminance.
Alternatives :
X-Trans (Fujifilm) : Motif 6×6 aléatoire réduisant le moiré sans filtre OLPF.
Quad Bayer (Sony) : Groupes de 2×2 pixels identiques (ex: Sony IMX686) pour améliorer la sensibilité en basse lumière.

Taille physique et format :
- Plein format (Full Frame, 36×24 mm) : Offre une surface active 2,5 fois plus grande qu'un capteur APS-C (23,6×15,7 mm), ce qui se traduit par :
Une meilleure sensibilité (jusqu'à 1-2 stops de gain en basse lumière).
Une plage dynamique étendue (jusqu'à 14-15 stops sur les modèles récents comme le Sony A7R IV ou Nikon Z7 II).
Un bruit électronique réduit grâce à une meilleure dissipation thermique et une capacité accrue à collecter les photons.
- Moyen format (ex: 44×33 mm ou 54×40 mm) : Utilisé dans les appareils haut de gamme comme le Fujifilm GFX 100S (102 MP), offrant une résolution et une dynamique exceptionnelles grâce à des photosites plus grands (ex: 3,76 µm).
- Micro 4/3 (17,3×13 mm) : Compact et économique, mais avec une profondeur de champ 2× plus grande qu'un plein format à ouverture équivalente.

Résolution et taille des pixels :
- Résolution : Un capteur 24 MP possède 24 millions de photosites, mais la taille individuelle des pixels (ex: 5,9 µm sur un Sony A7 III, 3,76 µm sur un Fujifilm X-T4) influence directement :
La sensibilité (les pixels plus grands captent plus de lumière, réduisant le bruit).
La plage dynamique (les pixels plus grands ont un puits de potentiel plus profond, permettant une meilleure gestion des hautes lumières).
- Technologie de filtrage :
Filtre de Bayer : Utilise une matrice RGB (2×2 : 1 rouge, 2 verts, 1 bleu) pour interpoler les couleurs. Les capteurs modernes intègrent des algorithmes de dématriçage avancés (ex: X-Processor 5 de Fujifilm) pour réduire les artefacts.
Filtre passe-bas optique (OLPF) : Atténue les moirés en floutant légèrement l'image avant qu'elle n'atteigne le capteur (de moins en moins utilisé sur les capteurs haute résolution grâce aux algorithmes de suppression numérique).

Technologies avancées :
- Backside-Illuminated (BSI) :
Les circuits électroniques sont déplacés derrière les photodiodes (ex: Sony Exmor R, Canon Dual Pixel CMOS AF), augmentant la surface photosensible de 30 à 50 %.
Résultat : Meilleure sensibilité en basse lumière (jusqu'à 1 stop de gain) et réduction du bruit (ex: Sony A7S III excelle à ISO 12800).
- Dual Pixel AF (Canon) / Phase Detection (Sony, Nikon) :
Chaque pixel est divisé en deux photodiodes (gauche/droite), permettant une mise au point par détection de phase directement sur le capteur.
Avantages :
AF ultra-rapide (ex: Canon EOS R3 : 30 ips avec suivi en temps réel).
Couverture AF à 100 % du cadre (ex: Sony A9 II avec 693 points AF).
- Empilement de capteurs (Stacked CMOS) :
Les couches du capteur sont superposées verticalement (ex: Sony A9 III), réduisant le temps de lecture et permettant :
Des rafales à 120 ips (avec obturateur électronique global).
Une lecture ultra-rapide (1/160s vs 1/30s sur les capteurs traditionnels), éliminant le rolling shutter.
- Plage dynamique étendue :
Les capteurs modernes atteignent 14-15 stops (ex: Nikon Z7 II, Fujifilm GFX 100S) grâce à :
Une lecture dual-gain (deux amplifications différentes pour les hautes et basses lumières).
Des pixels à double conversion (ex: Sony A7R V), combinant une lecture analogique et numérique pour maximiser la dynamique.

Gestion du bruit et sensibilité :
- Bruit électronique :
Principalement causé par le courant d'obscurité (électrons générés même sans lumière) et le bruit de lecture (durant la conversion analogique-numérique).
Réduit par :
Des transistors à faible bruit (ex: technologie Exmor RS de Sony).
Un refroidissement actif (sur les appareils moyen format comme le Phase One XT).
- ISO natifs et étendus :
Plage native : Généralement de ISO 100 à 51200 (ex: Canon EOS R5), avec une meilleure performance entre ISO 100-6400.
ISO étendus : Certains boîtiers offrent des ISO 50 (pour une dynamique étendue) ou ISO 102400-409600 (ex: Sony A7S III pour des conditions extrêmes), au prix d'une perte de dynamique et d'un bruit accru.


Exemple technique :
Un capteur comme celui du Sony A7R V (61 MP, BSI-CMOS) intègre :
9,44 millions de pixels pour la détection de phase (couverture AF à 100 %).
Une lecture 8 fois plus rapide que les modèles précédents grâce à un bus de données haute vitesse.
Un filtrage couleur avancé avec un algorithme de dématriçage utilisant l'IA pour réduire le moiré.
Une plage dynamique de 15 stops, grâce à une double conversion A/N et des pixels à haute capacité (puits de potentiel profond).
Une sensibilité exceptionnelle en basse lumière (ISO 100-32000 natifs, extensible à 50-102400), idéale pour la photographie nocturne ou en intérieur.`,
      image: '../assets/svg/capteur-schema-1.svg'
    },
    'diaphragm-info': {
      title: 'Diaphragme',
      text: `Le diaphragme est un mécanisme optique essentiel de l'objectif, agissant comme une pupille pour contrôler la quantité de lumière atteignant le capteur. Ses caractéristiques techniques et son impact sur la photographie sont multiples :

Ouverture (nombre f/) : Exprimée sous la forme f/1.4, f/2.8, f/16, etc., elle indique le diamètre relatif de l'ouverture. Un nombre f/ bas (ex: f/1.8) correspond à une grande ouverture laissant passer beaucoup de lumière, tandis qu'un nombre f/ élevé (ex: f/16) réduit la quantité de lumière. La formule pour calculer l'ouverture est f/ = distance focale / diamètre de l'ouverture.

La profondeur de champ :
- Grande ouverture (f/1.4 à f/2.8) : Crée un flou d'arrière-plan (bokeh) prononcé, isolant le sujet de l'arrière-plan. Idéal pour les portraits ou les photos artistiques.
- Petite ouverture (f/8 à f/16) : Augmente la zone de netteté, utile pour les paysages ou les photos nécessitant une mise au point sur plusieurs plans.
Diffraction : À des ouvertures très petites (ex: f/22), la lumière commence à diffracter sur les bords du diaphragme, réduisant la netteté globale de l'image. La plupart des objectifs ont une ouverture optimale (ex: f/5.6 à f/11) pour un piqué maximal.

Lames du diaphragme :
Le nombre de lames (généralement entre 5 et 11) influence la forme du bokeh. Un nombre pair de lames produit un bokeh plus anguleux, tandis qu'un nombre impair crée des cercles plus doux.

Objectifs spécifiques :
- Objectifs lumineux (ex: f/1.4 ou f/1.8) : Permettent de photographier en basse lumière sans flash et offrent un contrôle créatif sur la profondeur de champ.
- Objectifs à ouverture variable (ex: f/3.5-5.6) : Courants sur les zooms grand public, ils ajustent l'ouverture maximale en fonction de la focale.


Exemples d'utilisation :
- Portrait : Utilisez une grande ouverture (f/1.8) pour un bokeh esthétique et un sujet net.
- Paysage : Une petite ouverture (f/11) maximise la netteté sur toute l'image.
- Photographie de rue : Une ouverture moyenne (f/5.6) offre un bon compromis entre lumière et profondeur de champ.
- Astrophotographie : Un objectif à grande ouverture (f/2.8 ou moins) est essentiel pour capturer les étoiles et les détails du ciel nocturne.`,
      image: '../assets/svg/diaphragme-schema-3.svg'
    },
    'iso-info': {
      title: 'ISO',
      text: `La sensibilité ISO, normalisée par la norme ISO 12232:2019, définit le niveau d'amplification du signal électrique généré par le capteur en réponse à la lumière incidente. Elle est mesurée en valeurs ISO (ex: ISO 100, ISO 1600), où chaque doublement de valeur (ex: ISO 100 à ISO 200) représente un doublement de la sensibilité apparente du capteur. Voici une analyse technique détaillée de son fonctionnement et de ses implications :

1 - Plage ISO et amplification du signal
- Plage native :
ISO 100 (base) : Sensibilité de référence, offrant le meilleur rapport signal/bruit et la plage dynamique maximale (jusqu'à 14-15 stops sur les capteurs modernes).
Plage standard : Généralement de ISO 100 à ISO 6400 sur les appareils récents (ex: Canon EOS R6, Nikon Z6 II), avec une performance optimale entre ISO 100-3200.
Mécanisme d'amplification :
À ISO 100, le signal est amplifié 1× (gain unitaire).
À ISO 1600, le signal est amplifié 16×, ce qui augmente aussi le bruit électronique (rapport signal/bruit se dégrade).
- ISO étendus :
ISO 50 (Lo) : Réduit l'amplification pour étendre la plage dynamique dans les hautes lumières (utile pour les scènes très contrastées, comme un mariage en extérieur).
ISO 102400-409600 (Hi) :
Disponible sur des boîtiers comme le Sony A7S III ou Canon EOS-1D X Mark III.
Utilise une amplification extrême du signal (jusqu'à 4096× pour ISO 409600), ce qui introduit un bruit chromatique et de luminance très marqué.
Applications : Photographie nocturne (ex: astrophotographie), vidéo en très basse lumière (ex: tournage en intérieur sans éclairage supplémentaire).

2 - Impact sur la qualité d'image
- Bruit numérique
Sources de bruit :
Le bruit de photons (shot noise) :
Fluctuations statistiques du nombre de photons captés (inévitable, suit une distribution de Poisson).
Le bruit électronique :
Courant d'obscurité :
Électrons générés thermiquement même sans lumière (dépend de la température du capteur).
Le bruit de lecture :
Introduit lors de la conversion du signal analogique en numérique (ADCs).
Le bruit de quantification :
Erreurs dues à la discrétisation du signal (12-14 bits sur les capteurs modernes).
Seuils critiques :
ISO ≤ 800 : Bruit négligeable sur les capteurs modernes (ex: Sony A7R IV).
ISO 1600-6400 : Bruit visible mais gérable (réduction logicielle efficace).
ISO ≥ 12800 : Bruit chromatique (taches colorées) et de luminance (granulosité) très présent.
- Technologies de réduction de bruit :
Algorithmes logiciels :
Denoise AI (Topaz Labs) : Utilise l'intelligence artificielle (réseaux de neurones convolutifs) pour distinguer le bruit du détail réel.
DxO DeepPRIME : Combine dématriçage et réduction de bruit via des modèles physiques du capteur.
Traitement en appareil :
Double conversion A/N (ex: Sony A7S III) : Convertit le signal deux fois (analogique → numérique → analogique → numérique) pour réduire le bruit en haute sensibilité.
Filtrage spatial : Moyenne les valeurs des pixels voisins (ex: Canon DIGIC X).
- La plage dynamique
ISO bas (100-400) :
Plage dynamique maximale (14-15 stops sur les capteurs BSI comme le Nikon Z7 II).
Détails préservés dans les ombres et hautes lumières grâce à un puits de potentiel profond (capacité à stocker plus d'électrons par pixel).
ISO élevés (≥ 3200) :
Compression des hautes lumières : Les zones claires sont saturées plus rapidement.
Perte de détails dans les ombres : Le bruit masque les micro-contrastes (ex: textures des cheveux ou des tissus).

3 - Technologies anti-bruit avancées
- Architectures de capteur optimisées
Des pixels plus grands :
Exemple : 8,4 µm sur le Canon EOS R5 (vs 4,5 µm sur un 61 MP).
Avantages :
Meilleure capacité de collecte de lumière (surface photosensible accrue).
Puits de potentiel plus profond (jusqu'à 50 000 électrons/pixel sur les capteurs moyen format).
Capteurs empilés (Stacked CMOS) :
Exemple : Sony A9 III ou Canon EOS R3.
Couches superposées :
Couche photosensible (photodiodes) en haut.
Couche de traitement (circuits) en dessous.
Résultat : Lecture 8× plus rapide, réduisant le bruit de lecture et le rolling shutter.
- Rejet de la chaleur
Dissipation thermique :
Les capteurs plein format (ex: Sony A7 IV) intègrent des caloducs (heat pipes) pour évacuer la chaleur générée par l'amplification du signal.
Refroidissement actif : Certains boîtiers moyen format (ex: Phase One XT) utilisent des ventilateurs pour maintenir une température optimale.
- Traitement du signal
Convertisseurs A/N 14-16 bits :
Les capteurs haut de gamme (ex: Fujifilm GFX 100S) utilisent des ADC 16 bits pour une quantification plus fine du signal, réduisant les artefacts de compression.
Filtrage adaptatif :
Algorithmes comme Canon’s Dual Sensing IS ou Nikon’s Advanced NR analysent le bruit en temps réel et appliquent une réduction ciblée (sans affecter les détails).


Exemple technique :
Sony A7S III
Un boîtier comme le Sony A7S III (12 MP, BSI-CMOS plein format) illustre ces technologies :
- Plage ISO native : 80-102400 (étendue à 40-409600).
- ISO 40 : Idéal pour les scènes très lumineuses (ex: plage en plein soleil) avec une dynamique étendue.
ISO 102400 : Permet de filmer en 4K à 120 fps dans des conditions de lune claire (0,5 lux) sans éclairage supplémentaire.
- Technologies clés :
Capteur BSI empilé : Lecture 2× plus rapide que les modèles précédents, réduisant le bruit de lecture.
Pixels de 8,4 µm : 2× plus grands que ceux d’un 24 MP, améliorant la sensibilité.
Double conversion A/N : Réduit le bruit de 30 % à ISO 12800 par rapport aux capteurs traditionnels.
Refroidissement passif : Dissipation thermique optimisée pour les longues sessions vidéo.
`,
      image: '../assets/svg/iso-schema-1.svg'
    },
    'focus-info': {
      title: 'Mise au point',
      text: `Les systèmes de mise au point automatique modernes représentent une révolution technologique dans le domaine de la photographie et de la vidéo, combinant intelligence artificielle, traitement d'image en temps réel et mécaniques de précision. Voici une analyse détaillée de leurs fonctionnalités et innovations techniques :

1 - Technologies de détection avancées
- La détection de phase
Principe physique :
Utilise des paires de pixels dédiés (ex: Dual Pixel AF de Canon) qui comparent les déphasages entre deux images légèrement décalées (méthode similaire à un interféromètre optique).
Chaque pixel est divisé en deux photodiodes (gauche/droite), permettant une détection de phase horizontale.
Avantages :
Vitesse de mise au point ultra-rapide (ex: 0.03s sur le Canon EOS R3), idéale pour les sujets en mouvement.
Couverture AF à 100% du cadre (ex: Sony A7 IV avec 759 points AF en détection de phase).
Implémentations matérielles :
Canon Dual Pixel AF : 100% de couverture avec 5 655 points AF sélectionnables (EOS R5).
Nikon Multi-CAM 20K : 153 points AF (dont 99 en croix) avec détection jusqu'à -4 EV (ex: Nikon Z9).
- Détection de contraste
Principe physique :
Analyse les transitions de luminance (bords) dans l'image pour maximiser le contraste local.
Utilise un algorithme de maximisation (ex: hill-climbing) pour ajuster la netteté.
Caractéristiques :
Précision micrométrique (ex: ±0.005 mm sur les systèmes haut de gamme).
Moins rapide que la détection de phase (environ 0.1-0.3s), mais plus précise en basse lumière.
Optimisations logicielles :
Filtrage adaptatif pour ignorer les faux contours (ex: textures répétitives).
Combinaison avec la détection de phase dans les systèmes hybrides (ex: Sony Real-time AF).
Systèmes AF hybrides
Fusion des technologies :
Détection de phase pour la vitesse (suivi des sujets en mouvement).
Détection de contraste pour la précision (netteté optimale).

Exemples d'implémentation :
Sony Real-time Tracking (A7R V) :
759 points AF en détection de phase + 425 zones en détection de contraste.
Traitement par IA (réseau de neurones) pour une reconnaissance en temps réel.
Canon EOS R3 :
Deep Learning AF avec 1 053 zones AF et suivi 3D.
Précision de ±0.01 mm grâce à un capteur empilé (lecture ultra-rapide).

2 - Modes de mise au point avancés
- Eye AF (Suivi des yeux)
Technologie :
Reconnaissance faciale et oculaire via des algorithmes de vision par ordinateur (ex: OpenCV intégré).
Détection en temps réel des pupilles, paupières et sourcils pour un suivi précis.
Performances :
20 ips en rafale avec suivi continu (ex: Sony A9 II).
Précision de 98% même avec des lunettes ou en contre-jour (grâce à l'IA).
Cas d'usage :
Portraits (yeux toujours nets, même en mouvement).
Événements (mariages, conférences) où les expressions faciales sont cruciales.
- Animal AF (Suivi des animaux)
Technologie :
Base de données d'apprentissage incluant 100+ espèces (chiens, chats, oiseaux, etc.).
Détection des yeux, museaux et contours corporels (ex: Sony A7R IV).
Performances :
Suivi à 10 ips même pour les animaux en mouvement rapide (ex: oiseaux en vol).
Reconnaissance des motifs (ex: pelage, plumage) pour éviter les confusions.
Cas d'usage :
Photographie animalière (safaris, oiseaux en vol).
Domestique (animaux de compagnie en mouvement).
- Suivi 3D (Nikon 3D Tracking)
Technologie :
Modélisation 3D du sujet en temps réel via un algorithme de prédiction de mouvement.
Utilise des capteurs gyroscopiques pour anticiper la trajectoire.
Performances :
Suivi en 3 axes (X, Y, Z) avec une précision de 95% (ex: Nikon Z9).
Maintien de la mise au point même si le sujet est temporairement masqué.
Cas d'usage :
Sports (athlètes en mouvement complexe).
Reportage (sujets imprévisibles en environnement encombré).

3 - Précision et innovations récentes
- Précision micrométrique
Mesures techniques :
Précision de ±0.01 mm sur les systèmes haut de gamme (ex: Canon EOS R3).
Résolution de détection : Jusqu'à 0.003 mm (1/300ème de mm) sur les capteurs empilés (ex: Sony A1).
Facteurs influençant la précision :
Vitesse de lecture du capteur : Les capteurs empilés (ex: Sony A9 III) lisent les données 8× plus vite que les capteurs traditionnels.
Algorithmes de prédiction : Utilisent des modèles de Deep Learning (ex: Canon DIGIC X) pour anticiper les mouvements.
- Innovations récentes
AF par Deep Learning :
Canon EOS R3 : Utilise un réseau de neurones entraîné sur des millions d'images pour reconnaître les visages, animaux, véhicules et même des objets spécifiques (ex: ballons, avions).
Sony A7R V : Real-time Recognition AF avec détection des postures humaines (ex: mains levées, corps en mouvement).
AF en très basse lumière :
Sensibilité jusqu'à -7 EV (ex: Nikon Z6 III), permettant une mise au point par moonlight (clair de lune).
Technologie StarLight (ex: Sony A7S III) : Amplification du signal en conditions extrêmes sans introduire de bruit excessif.
Stabilisation intégrée à l'AF :
Synchronisation AF/IS : Les systèmes comme Canon’s Dual Sensing IS combinent la stabilisation d'image (IS) et l'AF pour compenser les mouvements de l'appareil et du sujet.


Exemple technique :
Canon EOS R3
Un boîtier comme le Canon EOS R3 illustre ces avancées :
- Capteur empilé 24 MP :
Lecture 1.5× plus rapide que les capteurs traditionnels.
1 053 zones AF avec Deep Learning pour une reconnaissance instantanée.
- AF Eye Control :
Suivi par le regard : L'appareil détecte où l'utilisateur regarde dans le viseur pour sélectionner la zone AF.
- Précision :
±0.01 mm en conditions normales, ±0.03 mm en basse lumière (-6 EV).
- Performances en rafale :
30 ips avec AF/AE continu (idéal pour le sport ou la faune).
- Technologies complémentaires :
Dual Pixel AF II : Couverture à 100% avec détection des yeux/animaux/véhicules.
Stabilisation 8 stops : Synchronisée avec l'AF pour des images nettes même à main levée.
`,
      image: '../assets/svg/mise-au-point-schema-1.svg'
    },
    'shutter-info': {
      title: 'Obturateur',
      text: `L'obturateur est un mécanisme clé qui régule la durée d'exposition de la lumière sur le capteur, avec des plages allant de 1/8000s (pour figer des mouvements ultra-rapides) à plusieurs minutes (pour des poses longues). Il existe principalement deux types d'obturateurs, chacun adapté à des usages spécifiques :

Obturateur mécanique
- Fonctionnement : Composé de deux rideaux (avant et arrière) en alliages légers (titane, carbone), qui glissent pour contrôler l'exposition.
- Vitesse maximale : Jusqu'à 1/8000s (ex: Nikon D6), idéal pour figer des mouvements rapides comme des gouttes d'eau ou des ailes d'oiseaux.
- Synchronisation flash : Limitée à 1/200s ou 1/250s (au-delà, utilisation du HSS pour des impulsions flash synchronisées).
- Durabilité : Testé pour 150 000 à 500 000 déclenchements (ex: Canon EOS-1D X Mark III), avec des rideaux revêtus de matériaux auto-lubrifiants pour réduire l'usure.
- Avantages : Précision temporelle pour la photographie d'action, absence de distorsion (pas de rolling shutter).
- Inconvénients : Bruit et vibrations mécaniques, usure à long terme en rafale.

Obturateur électronique
- Fonctionnement : Pas de pièces mobiles, le capteur est activé/désactivé électroniquement, ligne par ligne (rolling shutter) ou globalement.
Silencieux et sans vibration : Idéal pour la vidéo ou les situations discrètes (ex: mariages, théâtre).
- Rafales ultra-rapides : Jusqu'à 30 ips (ex: Sony A9 II), avec un buffer étendu pour capturer des séquences longues (ex: 200+ images RAW en rafale sur Nikon Z9).
- Rolling shutter : Peut déformer les sujets en mouvement rapide (ex: pales d'hélicoptère), mais corrigé sur les modèles récents (ex: Canon EOS R3 avec lecture ultra-rapide).
- Obturateur global : Rare, mais présent sur des modèles comme le Sony A9, éliminant le rolling shutter pour la vidéo 4K.
- Avantages : Pas d'usure mécanique, vitesses d'obturation extrêmes (ex: 1/32000s sur Sony A7R V).
- Inconvénients : Distorsion en mouvement (rolling shutter), artefacts électroniques en basse lumière.


Exemple technique :
Canon EOS R3
Le Canon EOS R3 combine les avantages des deux technologies :
- Obturateur mécanique : Vitesse max de 1/8000s, durabilité de 500 000 cycles, synchronisation flash à 1/250s.
- Obturateur électronique : Vitesse max de 1/64000s, rafales à 30 ips avec AF/AE continu, et réduction du rolling shutter grâce à un capteur empilé et un processeur DIGIC X.
- Mode silencieux : Utilise l'obturateur électronique pour les situations discrètes, comme les cérémonies ou le théâtre.`,
      image: '../assets/svg/obturateur-schema-1.svg'
    }
  };

  // Cache le panneau d'info au chargement
  infoPanel.classList.remove('active');
  let currentActiveBubble = null;

  // Ajoute un événement de clic à chaque bulle
  bubbleCircles.forEach(bubble => {
    bubble.addEventListener('click', (e) => {
      const targetId = bubble.getAttribute('data-target');
      const data = infoData[targetId];

      // Si on reclique sur la même bulle, on ferme le panneau
      if (currentActiveBubble === bubble) {
        infoPanel.classList.remove('active');
        currentActiveBubble = null;
        return;
      }

      // Met à jour le contenu du panneau
      infoTitle.textContent = data.title;
      infoText.textContent = data.text;
      infoText.innerHTML = data.text
        .replace(/Objectifs zoom/gi, '<strong>Objectifs zoom</strong>')
        .replace(/objectifs/gi, '<strong>objectifs</strong>')
        .replace(/objectif/gi, '<strong>objectif</strong>')
        .replace(/Focalisation et correction des aberrations/gi, '<strong>Focalisation et correction des aberrations</strong>')
        .replace(/Contrôle de l'ouverture/gi, '<strong>Contrôle de l\'ouverture</strong>')

        .replace(/Variation de la distance focale/gi, '<strong>Variation de la distance focale</strong>')
        .replace(/à focale fixe/gi, '<strong>à focale fixe</strong>')
        .replace(/Revêtements anti-reflets et traitement des lentilles/gi, '<strong>Revêtements anti-reflets et traitement des lentilles</strong>')
        .replace(/Exemple technique/gi, '<strong>Exemple technique</strong>')
        .replace(/moteurs pas à pas/gi, '<strong>moteurs pas à pas</strong>')
        .replace(/construction tropicalisée/gi, '<strong>construction tropicalisée</strong>')

        .replace(/capteurs/gi, '<strong>capteurs</strong>')
        .replace(/capteur/gi, '<strong>capteur</strong>')
        .replace(/photodiode en silicium dopée/gi, '<strong>photodiode en silicium dopée</strong>')
        .replace(/système de transistors/gi, '<strong>système de transistors</strong>')
        .replace(/microlentille/gi, '<strong>microlentille</strong>')
        .replace(/efficacité quantique/gi, '<strong>efficacité quantique</strong>')
        .replace(/Architecture optoélectronique avancée/gi, '<strong>Architecture optoélectronique avancée</strong>')
        .replace(/Filtre passe-bas optique/gi, '<strong>Filtre passe-bas optique</strong>')
        .replace(/Filtre infrarouge/gi, '<strong>Filtre infrarouge</strong>')
        .replace(/Matrice de Bayer/gi, '<strong>Matrice de Bayer</strong>')
        .replace(/Taille physique et format/gi, '<strong>Taille physique et format</strong>')
        .replace(/Résolution et taille des pixels/gi, '<strong>Résolution et taille des pixels</strong>')
        .replace(/haute résolution/gi, '<strong>haute résolution</strong>')
        .replace(/modernes/gi, '<strong>modernes</strong>')
        .replace(/Technologies avancées/gi, '<strong>Technologies avancées</strong>')
        .replace(/Gestion du bruit et sensibilité/gi, '<strong>Gestion du bruit et sensibilité</strong>')
        .replace(/Exemple technique/gi, '<strong>Exemple technique</strong>')
        .replace(/grande ouverture/gi, '<strong>grande ouverture</strong>')
        .replace(/petite ouverture/gi, '<strong>petite ouverture</strong>')

        .replace(/diaphragme/gi, '<strong>diaphragme</strong>')
        .replace(/nombre f/gi, '<strong>nombre f/</strong>')
        .replace(/profondeur de champ/gi, '<strong>profondeur de champ</strong>')
        .replace(/Diffraction/gi, '<strong>Diffraction</strong>')
        .replace(/Lames du diaphragme/gi, '<strong>Lames du diaphragme</strong>')
        .replace(/spécifiques/gi, '<strong>spécifiques</strong>')
        .replace(/lumineux/gi, '<strong>lumineux</strong>')
        .replace(/à ouverture variable/gi, '<strong>à ouverture variable</strong>')
        .replace(/Exemples d'utilisation/gi, '<strong>Exemples d\'utilisation</strong>')

        .replace(/sensibilité ISO/gi, '<strong>sensibilité ISO</strong>')
        .replace(/Plage ISO et amplification du signal/gi, '<strong>Plage ISO et amplification du signal</strong>')
        .replace(/Plage native/gi, '<strong>Plage native</strong>')
        .replace(/Mécanisme d'amplification/gi, '<strong>Mécanisme d\'amplification</strong>')
        .replace(/ISO étendus/gi, '<strong>ISO étendus</strong>')
        .replace(/Impact sur la qualité d'image/gi, '<strong>Impact sur la qualité d\'image</strong>')
        .replace(/Bruit numérique/gi, '<strong>Bruit numérique</strong>')
        .replace(/bruit de photons/gi, '<strong>bruit de photons</strong>')
        .replace(/bruit électronique/gi, '<strong>bruit électronique</strong>')
        .replace(/courant d'obscurité/gi, '<strong>courant d\'obscurité</strong>')
        .replace(/bruit de lecture/gi, '<strong>bruit de lecture</strong>')
        .replace(/bruit de quantification/gi, '<strong>bruit de quantification</strong>')
        .replace(/Seuils critiques/gi, '<strong>Seuils critiques</strong>')
        .replace(/Sources de bruit/gi, '<strong>Sources de bruit</strong>')
        .replace(/Technologies de réduction de bruit/gi, '<strong>Technologies de réduction de bruit</strong>')
        .replace(/plage dynamique/gi, '<strong>plage dynamique</strong>')
        .replace(/BSI/gi, '<strong>BSI</strong>')
        .replace(/boîtiers moyen format/gi, '<strong>boîtiers moyen format</strong>')
        .replace(/moyen format/gi, '<strong>moyen format</strong>')
        .replace(/empilés/gi, '<strong>empilés</strong>')
        .replace(/BSI-CMOs plein format/gi, '<strong>BSI-CMOs plein format</strong>')
        .replace(/plein format/gi, '<strong>plein format</strong>')
        .replace(/haut de gamme/gi, '<strong>haut de gamme</strong>')
        .replace(/BSI empilé/gi, '<strong>BSI empilé</strong>')
        .replace(/traditionnels/gi, '<strong>traditionnels</strong>')
        .replace(/Technologies anti-bruit avancées/gi, '<strong>Technologies anti-bruit avancées</strong>')

        .replace(/systèmes de mise au point automatique/gi, '<strong>systèmes de mise au point automatique</strong>')
        .replace(/Technologies de détection avancées/gi, '<strong>Technologies de détection avancées</strong>')
        .replace(/détection de phase/gi, '<strong>détection de phase</strong>')
        .replace(/Principe physique/gi, '<strong>Principe physique</strong>')
        .replace(/Modes de mise au point avancés/gi, '<strong>Modes de mise au point avancés</strong>')
        .replace(/Eye AF/gi, '<strong>Eye AF</strong>')
        .replace(/Suivi des yeux/gi, '<strong>Suivi des yeux</strong>')
        .replace(/Animal AF/gi, '<strong>Animal AF</strong>')
        .replace(/Suivi 3D/gi, '<strong>Suivi 3D</strong>')
        .replace(/gyroscopiques/gi, '<strong>gyroscopiques</strong>')
        .replace(/Précision et innovations récentes/gi, '<strong>Précision et innovations récentes</strong>')
        .replace(/Cas d'usage/gi, '<strong>Cas d\'usage</strong>')

        .replace(/Obturateur mécanique/gi, '<strong>Obturateur mécanique</strong>')
        .replace(/Obturateur électronique/gi, '<strong>Obturateur électronique</strong>')
        



        .replace(/\n/g, '<br>');
      infoImage.src = data.image;

      // Positionne le panneau
      const isLeftBubble = bubble.closest('.left') !== null;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        infoPanel.classList.add('center');
        infoPanel.classList.remove('left', 'right');
      } else {
        if (isLeftBubble) {
          infoPanel.classList.add('left');
          infoPanel.classList.remove('right', 'center');
        } else {
          infoPanel.classList.add('right');
          infoPanel.classList.remove('left', 'center');
        }
      }

      // Affiche le panneau
      infoPanel.classList.add('active');
      currentActiveBubble = bubble;
    });
  });

  // Ferme le panneau si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.info-bubble-circle') && !e.target.closest('.info-panel')) {
      infoPanel.classList.remove('active');
      currentActiveBubble = null;
    }
  });

  // Met à jour la position du cadre en cas de redimensionnement
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && infoPanel.classList.contains('active')) {
      infoPanel.classList.add('center');
      infoPanel.classList.remove('left', 'right');
    }
  });
});
