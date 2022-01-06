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

## Création d'une nouvelle machine virtuelle

Si vous avez acheté une licence et désirez l'utiliser dans une machine virtuelle, les instructions fournies par ce [billet](https://blogs.oracle.com/virtualization/post/install-microsoft-windows-11-on-virtualbox) de la compagnie Oracle qui maintient le logiciel libre VirtualBox devraient suffirent pour vous guider.
Bien que les instructions soient en anglais, chaque étape présente une saisie d'écran relativemetn claire permettant de bien suivre la configuration de la machine virtuelle et l'installation de Windows.

Avant de vous lancer, il faudra créer un nouveau bureau virtuel, aussi appelé une **machine virtuelle**, en cliquant sur le bouton **New**, ce qui ouvrira une nouvelle fenêtre avec un guide d'installation.

1. Vous pouvez choisir le nom de la machine virtuelle que vous désirez dans la boîte de texte **Name**.
2. L'option **Machine Folder** indique l'emplacement sur votre ordinateur où la machine virtuelle sera installée.
Laissez cette option inchangée.
1. Le **Type** de machine virtuel à sélectionner devrait être **Microsoft Windows**.
1. La **Version** devrait concorder avec celle de l'image téléchargée dans la première partie de ce guide.
Au moment de rédiger cet article, la version de Windows téléchargée était **Windows 11 Entreprise, en 64 bits**.
Le choix de la version permet à VirtualBox d'établir les configurations recommendées pour chaque types de systèmes d'opérations supportés.
1. La page suivante présente le choix du niveau de mémoire vive disponible.
   - Dans le guide mis en référence, une mise en garde est clairement indiquée afin que l'utilisateur choisisse une quantité adéquate de mémoire vive.
  Par adéquate, on veut ici dire qu'il faut assez de mémoire vive pour pouvoir utiliser Windows, mais ne pas dépasser ce dont macOS a besoin pour bien fonctionner.
   - En général, il faut environ 2 Go de mémoire vive disponible pour que macOS continue de fonctionner sans planter.
  Les ordinateurs récents on la plus part du temps entre 8 et 16 Go par défaut donc on peut facilement mettre entre 2 et 4 Go de mémoire pour la machine virtuelle de Windows.
1. La page suivante offre les options d'espace de stockage, le **Hard Disk**.
     - Pour ce guide, nous utiliserons l'option de créer un nouveau disque, soit **Create a virtual hard disk now**.
     - Il faudra ensuite choisir le type de stockage, soit un disque pouvant prendre plus d'espace avec l'utilisation ou avec un espace prédéfini.
     Comme nous ne faisons que préparer une machine pour tester des applications simples, un stockage dynamique permettra de garder la taille la plus petite possible.
     Si vous prévoyez cependant utiliser la machine virtuelle avec des fichiers volumineux, définir à l'avance un espace de stockage pourrait être utile.
1. La page suivante est la dernière avant la création de la machine virtuelle et le début de l'installation de Windows, soit **File location and size**.
Simplement cliquer sur **Create** pour que l'image soit créée et apparaisse dorénavant dans la liste de gauche mentionnée au début de ce guide gauche.

Lorsque la machine virtuelle est créée, il faudra Le reste des étapes peuvent être suivies directement du billet mentionné précédemment, jusqu'à l'étape d'installer Windows.

## Installer Windows

Pour lancer une machine virtuelle, il suffit de double-cliquer sur celle de votre choix dans la liste à la gauche de la fenêtre principale de VirtualBox.

La première fois que vous lancerez une machine virtuelle, une nouvelle fenêtre s'ouvrira et vous présentera un guide d'installation.
La raison est que la machine virtuelle que vous venez de créer est l'équivalent d'un ordinateur neuf sur lequel aucun système d'opération n'a été installé.
Démarrer un tel appareil nécessiterait l'installation de Linux ou Windows avant de pouvoir l'utiliser, exactement comme pour la machine virtuelle que vous venez de démarrer.

Dans le cas présent, nous allons utiliser l'image de Windows téléchargée au début du guide, extraite du fichier Zip.
Il s'agit d'un fichier ISO qui peut être sélectionné à partir du guide en naviguant jusqu'à l'endroit où vous avez extrait le contenu du fichier Zip.

Pour un guide complet (en anglais), ce billet de la compagnie Oracle
