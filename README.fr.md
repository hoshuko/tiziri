<div align="center">

<a href="https://hoshuko.github.io/tiziri/"><img src="https://hoshuko.github.io/assets/readme/tiziri-banner-fr.jpg" alt="Tiziri sur ordinateur et sur téléphone" width="100%"></a>

# Tiziri

**La garde-robe d’une boutique de vêtements en ligne : chaque pièce, photographiée en magasin, est portée par un mannequin en bois qui prend vie.**

[English](README.md) · **Français** · [Español](README.es.md)

[![Démo en ligne](https://img.shields.io/badge/D%C3%A9mo_en_ligne-hoshuko.github.io-B4532F?style=for-the-badge)](https://hoshuko.github.io/tiziri/) [![Vidéo promo](https://img.shields.io/badge/Vid%C3%A9o_promo-60_s_%C2%B7_3_formats-1C1714?style=for-the-badge)](https://hoshuko.github.io/#tiziri) [![Langues](https://img.shields.io/badge/Langues-FR_%C2%B7_AR_%C2%B7_EN_%C2%B7_ES-555555?style=for-the-badge)](#langues) [![Licence](https://img.shields.io/badge/Licence-PolyForm_Noncommercial-555555?style=for-the-badge)](LICENSE)

</div>

## Aperçu

<a href="https://hoshuko.github.io/#tiziri"><img src="https://hoshuko.github.io/assets/readme/tiziri-preview-fr.webp" alt="Aperçu animé de Tiziri" width="100%"></a>

L’animation phare du site, extraite de sa vidéo promo de 60 secondes. [Voir la vidéo promo en entier →](https://hoshuko.github.io/#tiziri)

## Points forts

- **Un studio 3D en direct.** Sur l’accueil, Elle et Lui, des mannequins en bois modélisés par le code, prennent la pose dans un studio baigné de soleil et suivent le curseur.
- **De la photo au défilé.** Chaque vêtement est photographié tel quel en boutique, détouré, puis porté par Elle ou Lui, des mannequins articulés en bois qui se mettent en marche.
- **Cabine d’essayage.** Choisissez une pièce : le mannequin l’essaie, pose après pose, puis défile.
- **Le défilé.** Toute la boutique défile sur un podium épinglé, piloté par le défilement.
- **Chaque pièce de près.** Portée, mannequin invisible, studio et photo brute : la vue brute montre les vrais pixels, et les couleurs sont relevées sur la photo.
- **Quatre langues.** Français, arabe (de droite à gauche), anglais et espagnol.
- **Commande sur WhatsApp.** Chaque pièce rédige son message : nom, prix et lien ; retrait en boutique ou paiement à la livraison.

## Captures d’écran

| Ordinateur | Mobile |
| :---: | :---: |
| <img src="https://hoshuko.github.io/assets/shots/tiziri-desktop-fr.webp" alt="Tiziri sur ordinateur" width="560"> | <img src="https://hoshuko.github.io/assets/shots/tiziri-mobile-fr.webp" alt="Tiziri sur téléphone" width="200"> |

## Vidéos promo

Trois formats de 60 secondes, avec une musique et des bruitages créés de toutes pièces (aucun son sous droits). Cliquez sur une affiche pour lancer la vidéo.

| Paysage · 16:9 | Fil · 4:5 | Vertical · 9:16 |
| :---: | :---: | :---: |
| <a href="https://hoshuko.github.io/assets/video/tiziri-169-fr.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-169-fr.jpg" alt="Vidéo promo Tiziri, Paysage · 16:9" width="360"></a> | <a href="https://hoshuko.github.io/assets/video/tiziri-45-fr.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-45-fr.jpg" alt="Vidéo promo Tiziri, Fil · 4:5" width="180"></a> | <a href="https://hoshuko.github.io/assets/video/tiziri-916-fr.mp4"><img src="https://hoshuko.github.io/assets/video/tiziri-916-fr.jpg" alt="Vidéo promo Tiziri, Vertical · 9:16" width="152"></a> |
| <sub>YouTube, sites web</sub> | <sub>Fils Facebook et Instagram</sub> | <sub>Reels, Stories, WhatsApp</sub> |

## Langues

Le site existe en français (à la racine, par défaut), en arabe (`ar/`, de droite à gauche), en anglais (`en/`) et en espagnol (`es/`). Chaque page existe dans chaque langue en HTML statique : les moteurs de recherche et les aperçus de liens voient le bon texte, et le sélecteur de langue se trouve dans l’en-tête.

## Sous le capot

- Chaque vêtement est traité une seule fois et rangé dans une « garde-robe » : détourage sur le Mac (Apple Vision), puis vues portées, mannequin invisible et vidéo de 8 secondes générés avec Google Flow à partir de la photo. Rien n’est généré à la construction du site ni à la visite.
- Construit avec Astro (site statique) : ce dépôt est le site publié, prêt à servir. GSAP, Lenis et Three.js animent les pages.
- Images WebP, polices hébergées avec le site, prise en compte de `prefers-reduced-motion`, vidéos chargées seulement quand il le faut, et mise en page vérifiée dès 360 px de large.
- Respect de la vie privée : ni cookies, ni mesure d’audience, ni requête vers un service tiers, et une politique de sécurité du contenu (CSP) stricte.

## Lancer en local

Le site est construit pour vivre sous `/tiziri/`, comme sur GitHub Pages. Servez le dossier qui le contient avec n’importe quel serveur statique, par exemple Python :

```bash
git clone https://github.com/hoshuko/tiziri.git
python3 -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000/tiziri/>.

## Personnaliser

Ce dépôt contient le site construit. Sa source, un projet Astro avec la garde-robe (un dossier par vêtement : photo, détourage, vues, vidéo et textes en quatre langues), est dans un espace de travail privé. Les informations de la boutique (nom, numéro WhatsApp, adresse, horaires, livraison) tiennent dans un seul fichier de configuration ; `demo: true` affiche la mention de démonstration et ouvre WhatsApp sans numéro. Vous voulez ce site pour votre boutique ? Ouvrez un ticket (issue).

## Crédits

Quatre vêtements ont été photographiés dans une boutique de Tigzirt ; les huit pièces de démonstration viennent de photos Unsplash. Elle et Lui, les mannequins en bois, sont modélisés par le code (Three.js) ; les vues portées, les vues en mannequin invisible et les vidéos ont été générées avec Google Flow à partir de leurs rendus et de ces photos, et sont signalées comme telles sur chaque fiche. Tous les crédits sont dans [CREDITS.md](CREDITS.md). Les polices sont sous licence SIL Open Font License 1.1 ([`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)). Le nom de la boutique, le numéro et les prix sont fictifs.

## Licence

Le code est publié sous [licence PolyForm Noncommercial 1.0.0](LICENSE). Vous pouvez l’utiliser, l’étudier et le modifier pour tout usage non commercial : projets personnels, apprentissage, enseignement, associations. Un usage commercial, par exemple livrer cette maquette à un client, demande une licence à part : ouvrez un ticket (issue) sur ce dépôt pour en faire la demande. Les photos et les polices gardent leurs propres licences (voir plus haut).

## Sécurité

Vous avez trouvé une faille ? Signalez-la en privé depuis l’onglet **Security** du dépôt (« Report a vulnerability »), plutôt que dans un ticket public. Voir [SECURITY.md](SECURITY.md).

## Autres maquettes

Cette maquette fait partie de **Vitrines en mouvement**, une série de quatre sites animés au défilement :

- **[Maison Billot](https://github.com/hoshuko/maison-billot/blob/main/README.fr.md)**: Le site vitrine animé d’une boucherie artisanale : la découpe du bœuf expliquée pièce par pièce.
- **[Tafat](https://github.com/hoshuko/tafat/blob/main/README.fr.md)**: Le site d’une équipe de femmes qui fait le ménage à domicile sur la côte kabyle : au défilement, une raclette nettoie la vitre.
- **[Atelier Nacre](https://github.com/hoshuko/atelier-nacre/blob/main/README.fr.md)**: Le site d’un atelier de prothésiste ongulaire à Bordeaux : une pose démontée couche par couche, un essayage de couleur et la réservation en ligne.

Portfolio: <https://hoshuko.github.io/> · YouTube: <https://www.youtube.com/@Hosh-uko>
