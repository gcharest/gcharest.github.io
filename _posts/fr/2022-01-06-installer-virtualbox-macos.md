---
layout: post
title:  "Installer VirtualBox et Windows sur macOS"
ref: installer-virtualbox-windows-macos
lang: fr
date:   2022-01-06 21:30:00 -0500
author: Guillaume Charest
excerpt_separator: <!--more-->
---
Petit guide rapide pour installer et tester VirtualBox ainsi que Windows sur macOS.
<!--more-->
Tout d'abord, il faudra télécharger les différents logiciels suivants (il est recommandé d'utiliser les versions les plus récentes):

- VirtualBox
  - La dernière version est généralement clairement identifiée sur la [page d'accueil](https://www.virtualbox.org/) avec un très gros bouton indiquant "Download VirtualBox" ainsi que le numéro de la version (e.g.: Download VirtualBox 6.1)
- Windows
  - Au moment d'écrire cet article, Microsoft offre 4 versions dont une spécifiquement conçue pour VirtualBox.
  Il s'agit donc ici de télécharger la machine virtuelle nommée VirtualBox.
  - Autre fait important à noter, une image de Windows, soit le fichier à télécharger, est d'environ 18 à 20 Go. Cela veut donc dire qu'il faudra un certain temps et une quantité importante de données à télécharger. Il n'est donc pas recommandé de faire ce téléchargement à partir d'une connexion mobile ou limitée.
- Les applications Windows que vous voulez tester
  - Par exemple, une application conçue spécifiquement pour Windows telle que le [visualiseur DSQ](https://www.ti.msss.gouv.qc.ca/dsq-documents-de-soutien/UtilitaireDSQ.aspx) ou encore une version Windows d'une application populaire comme [Firefox](https://www.mozilla.org/fr/firefox/windows/).
  Dans les deux cas, tenter d'installer ces applications directement sur macOS ne serait pas possible.

## Installation de VirtualBox

Les [instructions](https://www.virtualbox.org/manual/ch02.html#installation-mac) étant en anglais seulement, il peut être plus difficile pour certaines personnes d'utiliser VirtualBox.

Néanmoins, le processus est assez similaire que pour la plupart des applications installées manuellement, c'est à dire les applications que vous téléchargez en ligne et non sur le Mac App Store.

À noter que par défaut, macOS prévient l'installation d'application non-signées ou provenant d'autres sources que le Mac App Store.
Il est donc possible que vous ayez besoin d'aller dans les **Préférences Système**, puis dans **Sécurité et confidentialité** pour autoriser les applications téléchargées et manuellement autoriser son utilisation ([instructions complètes d'Apple](https://support.apple.com/fr-ca/HT202491)).

1. Lorsque VirtualBox est téléchargé, vous pouvez double-cliquer sur le fichier **VirtualBox.dmg**.
2. Une fenêtre devrait normalement s'ouvrir pour que vous puissiez double-cliquer sur le fichier **VirtualBox.pkg**.
3. L'installateur devrait ensuite se lancer et vous demander de confirmer l'endroit où installer l'application.
Pour les fins de ce guide, simplement accepter les configurations et poursuivre l'installation.
4. À la fin de l'installation, un icône VirtualBox devrait maintenant être disponible dans votre dossier **Applications**

## Démarrage et Configuration de VirtualBox

L'application VirtualBox peut être lancée en double-cliquant sur son icône dans le fichier **Applications** ou en la cherchant dans le **Finder**.

Une fois démarrée, l'application présente une interface rudimentaire qui permet de gérer les bureaux virtuels, soit en installer des nouveaux, modifier ceux qui sont déjà installés ou encore en désinstaller.

Dans le cas présent, nous allons simplement créer un nouveau bureau virtuel, aussi appelé une **machine virtuelle**, à partir du fichier Windows téléchargé précédemment.

