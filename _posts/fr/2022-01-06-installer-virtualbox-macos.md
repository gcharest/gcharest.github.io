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

## Préparation

Tout d'abord, pour pouvoir utiliser VirtualBox avec Windows, il faut que votre ordinateur Apple ait:

- une version de macOS assez récente, soit 10.9 en montant
- au moins 16 Go de mémoire vive pour que les performances soient acceptables car celle-ci sera partagé entre macOS et Windows
- un disque dur ayant un espace libre d'au moins 20 à 25 Go pour pouvoir installer Windows et les différentes applications que vous voulez y installer.

Ensuite, il faudra télécharger les différents logiciels suivants (il est recommandé d'utiliser les versions les plus récentes):

- VirtualBox
  - La dernière version est généralement clairement identifiée sur la [page d'accueil](https://www.virtualbox.org/) avec un très gros bouton indiquant "Download VirtualBox" ainsi que le numéro de la version (e.g.: Download VirtualBox 6.1)
- Windows
  - Au moment d'écrire cet article, Microsoft offre 4 versions de Windows 11 Entreprise, dont une spécifiquement conçue pour VirtualBox.
  Il s'agit donc ici de télécharger la machine virtuelle nommée VirtualBox.
  - Autre fait important à noter, une image de Windows, soit le fichier à télécharger, est d'environ 18 à 20 Go. Cela veut donc dire qu'il faudra un certain temps et une quantité importante de données à télécharger.
  Il n'est donc pas recommandé de faire ce téléchargement à partir d'une connexion mobile ou limitée.
  - Une fois téléchargé, il faudra extraire le fichier ZIP afin de pouvoir utiliser son contenu dans les prochaines étapes.
  Comme le fichier est très volumineux, cela peut prendre de nombreuses minutes avant de compléter cette opération donc lancez-la dès que le téléchargement est terminé.
- Les applications Windows que vous voulez tester
  - Par exemple, une application conçue uniquement pour Windows telle que le [visualiseur DSQ](https://www.ti.msss.gouv.qc.ca/dsq-documents-de-soutien/UtilitaireDSQ.aspx) ou encore une version Windows d'une application populaire comme [Firefox](https://www.mozilla.org/fr/firefox/windows/).
  Dans les deux cas, tenter d'installer ces applications directement sur macOS ne serait pas possible.

## Installation de VirtualBox

Les [instructions](https://www.virtualbox.org/manual/ch02.html#installation-mac) étant en anglais seulement, voici un rapide survol des étapes pour installer VirtualBox sur un ordinateur Mac.

Le processus est assez similaire que pour la plupart des applications installées manuellement, c'est à dire les applications que vous téléchargez en ligne et non sur le Mac App Store.

À noter que par défaut, macOS prévient l'installation d'application non-signées ou provenant d'autres sources que le Mac App Store.
Il est donc possible que vous ayez besoin d'aller dans les **Préférences Système**, puis dans **Sécurité et confidentialité** pour autoriser les applications téléchargées et manuellement autoriser son utilisation ([instructions complètes d'Apple](https://support.apple.com/fr-ca/HT202491)).

1. Lorsque VirtualBox est téléchargé, vous pouvez double-cliquer sur le fichier **VirtualBox.dmg**.
2. Une fenêtre devrait normalement s'ouvrir pour que vous puissiez double-cliquer sur le fichier **VirtualBox.pkg**.
3. L'installateur devrait ensuite se lancer et vous demander de confirmer l'endroit où installer l'application.
Pour les fins de ce guide, simplement accepter les configurations et poursuivre l'installation.
4. À la fin de l'installation, un icône VirtualBox devrait maintenant être disponible dans votre dossier **Applications**

## Démarrage de VirtualBox

L'application VirtualBox peut être lancée en double-cliquant sur son icône dans le fichier **Applications** ou en la cherchant dans le **Finder**.

Une fois démarrée, l'application présente une interface rudimentaire qui permet de gérer les bureaux virtuels, soit en installer des nouveaux, modifier ceux qui sont déjà installés ou encore en désinstaller.

## Utilisaton de l'image Windows téléchargée

En temps normal, il faudrait créer une machine virtuelle puis installer Windows.
Par contre, ce ne sera pas nécessaire dans le cas présent puisque nous avons téléchargé une machine virtuelle déjà configurée et prête à être utilisée.

1. Au lieu de cliquer sur **New**, il faudra cliquer sur **Import**, puis sélectionner l'image Windows extraite suite au téléchargement du début de ce guide.
1. Une fois l'image sélectionnée, cliquez sur **Next**.
Une nouvelle fenêtre affichera les configurations de la machine virtuelle téléchargée.
1. Cliquez sur **Import**
Le processus d'importation démarrera et prendra de nombreuses minutes.
Lorsque l'importation sera terminée, vous devriez être de retour sur l'écran initial avec la liste des machines virtuelles sur la gauche.
Une nouvelle machine, celle que vous venez d'importer, devrait maintenant s'y trouver.
1. Double-Cliquez sur la machine virtuelle pour la démarrer.
Une nouvelle fenêtre devrait souvrir et vous y verrez le logo de Windows apparaître, puis une session Windows avec un utilisateur anonyme sera démarée.
1. 
