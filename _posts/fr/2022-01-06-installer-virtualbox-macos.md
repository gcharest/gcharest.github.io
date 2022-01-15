---
layout: post
title:  "Installer VirtualBox et Windows sur un Mac"
ref: installer-virtualbox-windows-mac
lang: fr
date:   2022-01-15 09:30:00 -0500
author: Guillaume Charest
excerpt_separator: <!--more-->
---
Guide pour installer et tester Windows sur un ordinateur conçu par Apple, communément appelé un "Mac", à l'aide du logiciel libre VirtualBox.
La durée totale d'installation peut varier entre 45 et 60 minutes selon votre connexion internet pour les téléchargements et de votre niveau de confort avec les différents logiciels présentés.
<!--more-->

## Préparation

Tout d'abord, pour pouvoir utiliser VirtualBox avec Windows, il faut que votre Mac ait:

- une version de son système d'exploitation de 10.9 ou plus récente,
- au moins 16 Go de mémoire vive pour que les performances soient acceptables car celle-ci sera partagée entre le système de votre Mac et la machine virtuelle exécutant Windows,
- un disque dur ayant un espace libre d'environ 20 Go pour pouvoir installer Windows et les différentes applications que vous voulez y installer, selon les [recommandations de Microsoft](https://support.microsoft.com/fr-fr/windows/configuration-requise-pour-windows-10-6d4e9a79-66bf-7950-467c-795cf0386715).

Ensuite, il faudra télécharger les différents logiciels suivants (il est recommandé d'utiliser les versions les plus récentes lorsque possible):

- VirtualBox
  - La dernière version est généralement clairement identifiée sur la [page d'accueil](https://www.virtualbox.org/) avec un très gros bouton indiquant "Download VirtualBox" ainsi que le numéro de la version (e.g.: Download VirtualBox 6.1)
  - En cliquant sur le lien, vous vous retrouverez dans une nouvelle page où vous devrez télécharger la version correspondant à votre ordinateur actuel, soit **OS X Hosts**.
- Windows
  - Au moment d'écrire cet article, Microsoft offre [différentes configurations de Windows](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) sous formes de machines virtuelles, chacune avec une version spécifiquement conçue pour VirtualBox.
  Il s'agit donc de télécharger la machine virtuelle nommée VirtualBox pour la configuration de votre choix.
  - Pour ce guide, la configuration **MSEDGE on Win10 (x64) Stable 1809** pour la plateforme **VirtualBox** sera utilisée.
  - Autre fait important à noter, une image de Windows, soit le fichier à télécharger pour utiliser avec VirtualBox, est d'environ 7 GB. Cela veut donc dire qu'il faudra un certain temps et une quantité importante de données à télécharger.
  Il n'est donc pas recommandé de faire ce téléchargement à partir d'une connexion mobile ou limitée.
  - Une fois le fichier ZIP téléchargé, il faudra l'extraire dans un dossier de votre choix afin de pouvoir utiliser son contenu lors des prochaines étapes.
  Comme le fichier est très volumineux, cela peut prendre de nombreuses minutes avant de compléter l'extraction.
  - Un autre détail important à noter est que ces machines virtuelles ont une durée de vie utilisables de 90 jours à partir du moment de l'installation.
  Passé ce délai, il faut soit activer une licence ou réinstaller la machine virtuelle à partir de zéro.
- Les applications Windows que vous voulez tester
  - Par exemple, une application conçue uniquement pour Windows telle que le [visualiseur DSQ](http://www.ti.msss.gouv.qc.ca/DSQ-Documents-de-soutien/UtilitaireDSQ.aspx) ou encore une version Windows d'une application populaire comme [Firefox](https://www.mozilla.org/fr/firefox/windows/).
  Dans les deux cas, tenter d'installer ces applications directement sur votre Mac ne serait pas possible.

## Installation de VirtualBox

Les [instructions](https://www.virtualbox.org/manual/ch02.html#installation-mac) étant en anglais seulement, voici un rapide survol des étapes pour installer VirtualBox sur un ordinateur Mac.

Le processus est assez similaire que pour la plupart des applications installées manuellement, c'est à dire les applications que vous téléchargez en ligne et non sur le Mac App Store.

À noter que par défaut, votre Mac prévient l'installation d'application non-signées ou provenant d'autres sources que le Mac App Store.
Il est donc possible que vous ayez besoin d'aller dans les **Préférences Système**, puis dans **Sécurité et confidentialité** pour autoriser les applications téléchargées et manuellement autoriser son utilisation. Veuillez suivre les ([instructions complètes d'Apple](https://support.apple.com/fr-ca/HT202491)) pour y arriver.

1. Lorsque VirtualBox est téléchargé, vous pouvez double-cliquer sur le fichier **VirtualBox.dmg**.
2. Une fenêtre devrait normalement s'ouvrir pour que vous puissiez double-cliquer sur le fichier **VirtualBox.pkg**.
3. L'installateur devrait ensuite se lancer et vous demander de confirmer l'endroit où installer l'application.
Pour les fins de ce guide, vous pouvez simplement accepter les configurations de base et poursuivre l'installation.
4. À la fin de l'installation, un icône VirtualBox devrait maintenant être disponible dans votre dossier **Applications**

## Démarrage de VirtualBox

L'application VirtualBox peut être lancée en double-cliquant sur son icône dans le fichier **Applications** ou en la cherchant dans le **Finder**.

Une fois démarrée, l'application présente une interface rudimentaire qui permet de gérer les bureaux virtuels, soit en installer des nouveaux, modifier ceux qui sont déjà installés ou encore en désinstaller.

## Installation de la machine virtuelle Windows

En temps normal, on peut créer une machine virtuelle sur mesure puis installer un système d'exploitation de son choix.
Dans le cas présent, le fichier téléchargé sur le site de Microsoft est une machine virtuelle déjà configurée et prête à être utilisée après de petits ajustements.

1. Au lieu de cliquer sur **New**, il faudra donc cliquer sur **Import**.
1. Dans la fenêtre, cliquez sur le bouton à la droite de la boite de texte pour ouvrir l'explorateur de fichier, puis sélectionnez l'image Windows extraite suite au téléchargement du début de ce guide.
1. Une fois l'image sélectionnée, cliquez sur **Next**.
Une nouvelle fenêtre affichera les configurations de la machine virtuelle téléchargée.
1. Cliquez sur **Import**
Le processus d'importation démarrera et prendra de quelques minutes.
Lorsque l'importation sera terminée, vous devriez être de retour sur l'écran initiale avec la liste des machines virtuelles sur la gauche.
Une nouvelle machine, celle que vous venez d'importer, devrait maintenant s'y trouver.
Dans le cas présent, l'image porte le nom **MSEdge - Win10** car c'est celle qui a été téléchargée lors des étapes précédentes de ce guide.

## Configuration de la machine virtuelle Windows

Avant d'utiliser la machine virtuelle Windows 10, les paramètres devraient être modifiés car ceux de base ne sont pas optimaux basé sur les tests effectués pour rédiger ce billet.

1. Dans la liste de la colonne de gauche, cliquez une fois sur l'entrée correspondant à la machine virtuelle que vous venez d'installer.
1. Au lieu de cliquer sur **Start**, cliquez plutôt sur **Settings**. Une nouvelle fenêtre s'ouvrira et l'onglet **General** sera sélectionné.
1. Cliquez sur l'onglet **System** et changez la valeur de **Base Memory** pour au moins *8000 MB*.
En glissant le curseur vers la droite sur la ligne, la valeur devrait s'arrondir à **8192 MB**, sinon vous pouvez l'entrer manuellement.
1. Cliquez sur l'onglet **Display**, puis changez la valeur de **Video Memory** pour le maximum disponible, qui devrait être **128 MB**.
1. Toujours dans le même onglet **Display**, changez la valeur de **Graphics Controller** pour **VBoxSVGA** (la valeur originale étant normalement *VBoxVGA)*.
1. Cliquez sur l'onglet **Storage** puis sur le bouton avec l'icône d'une disquette ayant le symbole "+".
En survolant l'icône, le texte affiché devrait indiquer "Adds a new storage attachment".
Lorsque vous aurez cliqué, un menu devrait afficher deux options: "Optical Drive" et "Hard Disk".
Cliquez sur sur **Optical Drive**.
1. Une nouvelle fenêtre devrait s'ouvrir avec une liste d'au moins un élément nommé "VBoxGuestAdditions.iso".
Sélectionnez cet élément et cliquez sur **Choose**.
(Cette étape sert à ajouter à la machine virtuelle un disque virtuel qui sera utilisé plus tard pour améliorer les fonctionnalités de la machine virtuelle sous Windows.)
1. Cliquez sur l'onglet **Ports** puis sur l'onglet **USB**, situé juste en dessous.
Cochez l'option **Enable USB Controller**.
1. Lorsque tous les changements ici-haut sont effectués, cliquez sur **OK** situé en bas à droite pour sauvegarder les nouvelles configurations.
Vous devriez maintenant être de retour sur la fenêtre principale avec la liste des machines virtuelles installées dans la colonne de gauche.

## Utilisation de la machine virtuelle Windows

C'est maintenant le temps d'essayer la machine virtuelle Windows.

1. Dans la colonne de gauche, double-cliquez sur la machine virtuelle de votre choix pour la démarrer.
Alternativement, vous pouvez la sélectionner puis cliquer sur **Start**.
1. Une nouvelle fenêtre devrait s'ouvrir et vous y verrez le logo de Windows apparaître, puis une session Windows avec l'utilisateur **IEUser** sera démarrée.
Pour déverrouiller la session, il faut entrer le mot de passe de cet utilisateur qui est **Passw0rd!**, tel qu'indiqué sur la page de téléchargement de la machine virtuelle Windows.
1. La fenêtre risque d'être petite lors du premier démarrage mais comme les configurations de la machine virtuelle ont été ajustées dans la section précédente, vous devriez être capable de redimensionner la taille de la fenêtre et la résolution de la machine virtuelle devrait s'ajuster en conséquence.
Par exemple, si vous double-cliquez dans la partie supérieure de la fenêtre où est affiché le nom de la machine virtuelle, la fenêtre devrait se redimensionner pour prendre l'ensemble de votre écran d'ordinateur.
1. Si vous utilisez un Mac avec un écran à très haute résolution, du type Retina Display par exemple, les icônes et le texte risquent d'être très petits.
     1. Pour les ajuster, il est possible d'utiliser la fonction **Make everything bigger** de Windows 10.
    Pour lancer le menu, vous pouvez cliquer dans l'outil de recherche située en bas à gauche et commencer à taper **Make everything bigger**, ce qui devrait faire s'afficher les résultats de recherche et vous devriez voir un résultat dans **Best match** concordant avec le texte entré.
    Cliquez sur le résultat **Make everything bigger** et une nouvelle fenêtre s'ouvrira.
     1. Dans la section **Make everything bigger**, située sous la section **Make text bigger** augmentez la taille des applications et du texte de **100% (Recommended)** à **200%**.
    Cela devrait rendre l'interface beaucoup plus lisible.
1. Lorsque vous lancez la machine virtuelle pour la première fois, il est possible que celle-ci devienne notablement lente.
   - Un des raisons possibles est que les mises à jour critiques de Windows seront lancées automatiquement et comme il s'agit d'une machine virtuelle, les performances sont moins bonnes qu'un ordinateur normal, comme expliqué dans mon précédent billet.
   Il faudra sans doute attendre que les mises à jour se terminent et que la machine virtuelle redémarre pour que les performances s'améliorent.
   - Même si les performances ne sont pas dégradées, il serait tout de même important de mettre à jour Windows pour éviter des risques de sécurités lors de l'utilisation de la machine virtuelle.
   Pour ce faire, cliquez sur le bouton **Start**, soit le logo de Windows, en bas à gauche de votre écran, puis sur l'icône d'engrenage situé au-dessus qui ouvrira la fenêtre **Settings**.
   Cliquez sur **Update & Security**, ce qui devrait ouvrir l'écran **Windows Update**.
   Cliquez sur **Check for Updates** et lancez l'installation des mises à jour.
   - Un redémarrage de la machine virtuelle sera probablement requis pour finaliser toutes les mises à jour.
1. Comme votre souris et votre clavier de votre Mac sont utilisés pour interagir avec la machine virtuelle Windows et que celle-ci peut également demander accès à certains dossiers de votre ordinateur local pour bien fonctionner, il est possible que VirtualBox vous demande d'ajouter des permissions dans votre Mac pour pouvoir les utiliser.
   - Une boîte de dialogue pourrait s'ouvrir lorsque ces permissions sont requises.
   Si c'est le cas, suivez les instructions et autorisez les accès.
   - Sinon, vous pouvez aller dans les **Préférences système**, dans la section **Sécurité et vie privée**, sous l'onglet **Vie privée** et déverrouillez l'accès en cliquant sur le cadenas situé en bas à gauche.
   Puis, sélectionnez dans la section de gauche:
     - **Accessibilité**: Dans la partie de droite, cochez **VirtualBox** pour autoriser les permissions.
     - **Fichiers et Dossiers**: Dans la partie de droite, cochez **Dossiers de fichiers** pour autoriser les permissions.
1. Comme la machine virtuelle de Windows est en anglais, vous pourriez vouloir ajouter une langue de saisie ou même des interfaces tel que le français.
Pour ajouter une langue, vous pouvez suivre ces instructions (en [anglais](https://support.microsoft.com/en-us/windows/install-a-language-for-windows-ccd853d3-9ecd-7da7-9ef0-72b4a055410a) ou en [français](https://support.microsoft.com/fr-fr/windows/installer-une-langue-pour-windows-ccd853d3-9ecd-7da7-9ef0-72b4a055410a)).
1. Lorsque votre machine virtuelle sera bien configurée et que les performances seront acceptables, il sera temps d'installer les outils fournis par VirtualBox pour améliorer les fonctionnalités.
   1. Ouvrez le **File Explorer** en cliquant sur l'icône ressemblant à un fichier beige en bas à gauche ou en faisant une recherche.
   1. Dans la section de gauche du **File Explorer**, vous devriez voir une entrée avec le nom **CD Drive (D:) VirtualBox Guest Additions**.
   Cliquez une fois pour la sélectionner et la section de droite devrait maintenant afficher le contenu du disque virtuel ajouté lors de la configuration de la machine virtuelle.
   1. Lancez l'installateur en double-cliquant sur **VBoxWindowsAdditions.exe**. *Note: il y a 3 fichiers avec un nom similaire donc assurez-vous d'utiliser le bon pour que l'installateur sélectionne les configurations compatibles à votre machine virtuelle.*
   1. Une fenêtre de sécurité appelée **User Account Control** s'ouvrira et vous demandera la permission pour exécuter l'installateur.
   Cliquez sur **Yes** et suivez les instructions de l'installateur.
   1. Lorsque l'installation sera complétée, votre machine virtuelle devrait automatiquement demander à être redémarrée. Si ce n'est pas le cas, vous pouvez le faire manuellement en cliquant sur le bouton **Start** de Windows au bas à gauche de votre écran, puis en cliquant sur le symbole d'un cercle avec une barre verticale dans la partie supérieure.
   Finalement, cliquez sur **Restart**.

## Conclusion

En suivant les étapes précédentes, vous devriez normalement être en mesure d'expérimenter avec le système d'exploitation Windows sans avoir à acheter de licence ou d'abonnements grâce au logiciel libre VirtualBox et à une image de Windows pour développement fournie par Microsoft gratuitement.
Vous devriez également être en mesure d'installer des applications conçues pour Windows sur votre machine virtuelle.
Des cas plus spécifiques existent où des configurations supplémentaires pourraient être requises.
Le prochain billet explorera l'une de ces situations.

Il est important de noter à nouveau que ces images de machine virtuelle ont une durée de vie temporaire de 90 jours et que leur utilisation passé ce délai ne sera plus possible.
Il faudrait alors réinstaller une nouvelle image et la reconfigurer.
En effet, ces images sont conçues pour effectuer des tests, non pour l'utilisation quotidienne.
