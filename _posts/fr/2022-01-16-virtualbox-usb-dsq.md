---
layout: post
title:  "Windows, VirtualBox et besoins particuliers liés aux ports USB"
ref: virtualbox-windows-usb
lang: fr
date:   2022-01-165 15:30:00 -0500
author: Guillaume Charest
excerpt_separator: <!--more-->
---
Guide pour configurer et utiliser Windows sur VirtualBox lorsque des besoins particuliers liés aux ports USB sont présents.
La durée totale d'installation peut varier entre 15 et 30 minutes selon votre niveau de confort avec les différents logiciels présentés.
<!--more-->
Pour les besoins de ce guide, j'utiliserai l'application web DSQ qui demande l'installation locale d'un logiciel Windows conjointement à l'utilisation d'un jeton physique chiffré dont seuls les utilisateurs autorisés peuvent avoir une copie.
Ce type de jeton, parfois appelé SmartCard, est essentiellement une clé USB sur laquelle est installée un fichier avec une signature unique pour chaque utilisateur du service.
Néanmoins, les grandes lignes du guide fonctionneraient aussi pour les personnes qui auraient des problèmes à accéder à une clé USB.

## Préparation

Tout d'abord, pour pouvoir utiliser les fonctions avancées de VirtualBox, plus précisément les ports USB 2.0 et 3.0 pour ce guide, il faudra télécharger le paquet d'extensions offert sur le site de VirtualBox dans la section téléchargements à partir de votre Mac.
Le fichier devrait se trouver sous le titre [**VirtualBox 6.1.30 Oracle VM VirtualBox Extension Pack**](https://www.virtualbox.org/wiki/Downloads#VirtualBox6.1.30OracleVMVirtualBoxExtensionPack) et le lien pour lancer le téléchargement se nommer **All supported platforms**

*Note*: Il est important de télécharger le paquet correspondant à la version de VirtualBox que vous avez installée lors du précédent guide pour vous assurer qu'elles sont compatibles.
En date de ce guide, les versions de VirtualBox et du paquet d'extensions étaient 6.1.30.

## Installation du paquet d'extensions

Une fois le téléchargement terminé, on peut démarrer VirtualBox pour installer les extensions.

1. Dans la fenêtre principale de VirtualBox où se trouve la liste des machines virtuelles installées, une section en haut à gauche affiche le mot **Tools**.
Cliquez une fois sur celle-ci pour afficher les différentes fonctions offertes et vous devriez maintenant voir 5 boutons s'afficher sur la droite: Preferences, Import, Export, New, Add.
1. Cliquez sur **Preferences** et une nouvelle fenêtre devrait s'ouvrir.
1. Cliquez sur **Extensions** et vous devriez pouvoir voir un tableau listant les paquets d'extensions installés.
Si c'est la première fois que vous faites ce type d'installation, le tableau devrait être vide.
1. Cliquez sur le carré ayant un signe "+" et une nouvelle fenêtre devrait s'ouvrir.
1. Naviguez jusqu'à l'endroit où vous avez sauvegardé le paquet d'extensions téléchargé précédemment, sélectionnez le fichier et cliquez sur **Open**.
Une nouvelle fenêtre devrait s'ouvrir.
1. Dans la nouvelle fenêtre, cliquez sur **Install** puis sur **I agree**.
1. Votre Mac devrait alors afficher une fenêtre vous demandant d'entrer votre mot de passe pour autoriser l'installation.
Entrez votre mot de passe et cliquez sur **OK**.
1. Lorsque l'installation est terminée, cliquez sur **OK**.
1. Si la fenêtre **VirtualBox - Extensions** est toujours affichée après l'installation, vous pouvez cliquer sur OK pour revenir à l'écran principal de VirtualBox.

## Configuration des ports USB

Une fois les extensions installées, il est désormais possible de configurer votre machine virtuelle Windows pour utiliser les ports USB de votre Mac.

Si vous utilisez un Mac assez récent, il est possible que vous n'ayez que des ports USB-C de forme ovale et plus petite que les ports USB traditionnels qui ont une forme rectangulaire.
Comme de nombreuses clés en circulation sont toujours sous la forme traditionnelle, il est possible que vous ayez besoin d'un adaptateur pour l'utiliser avec votre Mac, ce qui fut le cas lors de mes tests pour ce guide.

1. Dans un premier temps, branchez la clé USB contenant le jeton chiffré dans votre Mac.
Si vous devez utiliser un adaptateur, assurez-vous de brancher l'adaptateur et la clé USB à ce point-ci.
1. À partir de l'écran principal de VirtualBox, sélectionnez la machine virtuelle Windows que vous avez installé lors du précédent guide en cliquant une seule fois afin de pouvoir afficher à la droite ses configurations.
1. Cliquez sur le bouton **Settings** situé dans la partie supérieure de la fenêtre.
1. Cliquez sur **Ports**, puis cliquez sur **USB** pour afficher les configurations USB.
1. La fonction USB devrait être déjà sélectionnée si vous avez suivi le guide précédent.
Si ce n'est pas le cas, cochez **Enable USB Controller** afin de pouvoir modifier et utiliser les ports USB de votre Mac dans la machine virtuelle.
1. Sélectionnez **USB 3.0 (xHCI) Controller**.
1. Cliquez sur l'icône ressemblant à un connecteur USB ayant un signe de plus "+" afin d'ajouter un nouveau filtre pour les appareils USB.
1. Lorsque vous aurez cliqué sur l'icône, une liste de périphérique devrait apparaître.
Dans la liste, vous devrez cliquer sur le nom du périphérique correspondant à la clé USB que vous voulez ajouter.
Pour ce guide, il faudra choisir le nom **Gemalto USB SmartCard Reader [0200]**, qui est le périphérique USB stockant votre clé DSQ.
1. Lorsque vous aurez cliqué sur le nom du périphérique, le tableau devrait avoir une nouvelle entrée avec un nom correspondant à celui que vous avez sélectionné à l'étape précédente.
Cliquez une fois sur le périphérique pour qu'il soit en surbrillance bleue, puis cliquez sur l'icône ressemblant à un connecteur USB avec une roue d'engrenage pour ouvrir les configurations.
1. Une nouvelle fenêtre devrait apparaître avec de nombreux filtres remplis.
Assurez-vous de garder les champs **Name**, **Vendor ID** et **Product ID** tels quels, mais effacez le contenu de tous les champs suivants:
   - Revision
   - Manufacturer
   - Product
   - Serial No.
   - Port
1. Changez la valeur du champ **Remote** pour **Any**
1. Cliquez sur **OK** pour enregistrer les changements et retourner à la fenêtre affichant la liste de filtres.
1. Cliquez sur **OK** pour enregistrer les changements et retourner à l'écran principal de VirtualBox.

Les filtres créés à cette étape sont utilisés pour que la machine virtuelle capture automatiquement le contrôle des appareils USB que vous branchez à votre ordinateur, plutôt que votre Mac.
C'est ce qui permettra de vous assurer que votre machine virtuelle Windows détecte bien votre clé DSQ.

> **IMPORTANT**: Afin d'éviter certains problèmes fréquemment observées et documentées dans les [forums de VirtualBox](https://forums.virtualbox.org/viewtopic.php?t=82639), assurez-vous d'effectuer les étapes suivantes:
>
> 1. Retirez votre clé USB de votre Mac.
> 1. Si votre machine virtuelle est en marche, éteignez-la par le menu Windows.
> 1. Redémarrez complètement votre Mac.
> 1. Ne branchez pas votre clé USB immédiatement; attendez que la machine virtuelle Windows soit complètement démarrée.

## Utiliser votre clé USB dans la machine virtuelle Windows

Une fois votre Mac redémarré, il est temps de tester votre configuration.

*Rappel: Ne branchez pas votre clé USB!*

1. Lancez l'application **VirtualBox**.
2. Démarrez la machine virtuelle Windows.
3. Ouvrez votre session Windows.

À ce point-ci du guide, vous devrez installer des pilotes spécifiques à la clé DSQ.
Les prochaines étapes se déroulent dans votre machine virtuelle Windows.

1. Lancez le fureteur Edge et téléchargez [l'utilitaire DSQ](http://www.ti.msss.gouv.qc.ca/DSQ-Documents-de-soutien/UtilitaireDSQ.aspx).
1. Lancez l'utilitaire en double-cliquant sur le fichier que vous avez téléchargé.
*Le nom du fichier devrait ressembler à **UtilitaireDSQ_V2_2.exe** mais il est possible que les chiffres après le "V" soient différents si des mises à jour ont été effectuées depuis la rédaction de ce guide.*
1. La première fois que vous exécuterez cet utilitaire, Windows devrait vous aviser d'un risque de sécurité, un peu comme votre Mac l'a fait lors de l'installation de VirtualBox.
Une fenêtre avec le titre **Windows protected your PC** devrait donc s'afficher.
1. Pour pouvoir continuer, vous devrez cliquer sur **More Info**, ce qui devrait faire apparaître un nouveau bouton en bas à droite nommé **Run Anyway**.
Cliquez sur **Run Anyway**.
1. Une nouvelle fenêtre de sécurité devrait s'afficher avec le titre **User Account Control**, vous demandant si vous voulez permettre à cette application d'effectuer des changements sur votre ordinateur.
Cliquez sur **Yes**.
1. Une nouvelle fenêtre avec le titre **Utilitaire DSQ** devrait maintenant s'afficher.
Sélectionnez les trois options suivantes:
   - Installation du Visualiseur DSQ 5.8
   - Configuration Internet Explorer
   - Installation de Safenet 10.8.1083.0
1. Cliquez sur **Suivant** et attendez la fin de l'installation qui pourrait prendre quelques minutes.
1. Une fois l'installation terminée, cliquez sur **Fermer**.

### Lancer le DSQ avec la clé

Vous devriez maintenant avoir de nouveaux icônes sur votre bureau, incluant un lien pour **DSQ Production**.

1. Insérez votre clé DSQ dans votre Mac.
1. Double-cliquez sur le lien **DSQ Production**.
1. Une fenêtre Internet Explorer devrait s'ouvrir ainsi qu'une fenêtre **Windows Security** contenant les information de votre clé DSQ.
1. Cliquez sur OK et vous devriez pouvoir entrer votre NIP.

## Sauvegarder les configurations

Il est important de se rappeler que la version de Windows de votre machine virtuelle a une durée limitée de 90 jours, après quoi il faudra procéder à une réinstallation complète de celle-ci.

Afin de préserver une copie de votre machine virtuelle à un point spécifique dans le temps, vous pouvez utiliser la fonction **Snapshots** de VirtualBox afin de "revenir dans le temps".
Cette fonction est utile si vous n'utilisez que des applications Web et que vous ne sauvegardez aucune information directement dans la machine virtuelle.

> Ce dernier détail est **critique**:
> Tous les changements que vous aurez effectués sur la machine virtuelle après un "snapshot" (e.g.: télécharger des fichiers, créer un document texte, etc.) seront perdus si vous lancez la machine virtuelle à partir d'un "snapshot".

Pour créer un "snapshot", assurez-vous d'avoir éteint votre machine virtuelle avec le menu Windows, puis.

1. À partir de l'écran principal de VirtualBox, cliquez sur l'icône ressemblant à une liste situé à la droite de la machine virtuelle de votre choix.
1. Un menu déroulant devrait s'afficher avec trois options: Details, Snapshots et Logs.
Cliquez sur **Snapshots**.
1. La partie de droite de la fenêtre de VirtualBox devrait avoir changée et maintenant afficher un tableau avec une seule entrée nommée **Current State**.
De plus, la partie supérieure de la fenêtre devrait maintenant offrir différentes options incluant un bouton nommé **Take** ressemblant à un appareil photo avec un signe plus "+".
Cliquez sur le bouton **Take** ce qui devrait ouvrir une nouvelle fenêtre.
1. Saisissez un nom de votre choix dans le champs **Snapshot Name** pour cette copie du "snapshot" de la machine virtuelle.
1. Si vous le désirez, entrez une description dans le champ Snapshot Description pour vous souvenir des détails de configuration que vous aviez effectué avant l'enregistrement.
Par exemple, vous pourriez y détailler les logiciels qui ont été installés et configurés dans Windows jusqu'à ce point.
1. Cliquez sur OK.
Une nouvelle entrée correspondant au nom que vous avez saisi devrait s'ajouter dans la liste, au-dessus de l'élément **Current State**.

À présent, si vous voulez "reculer" votre machine virtuelle dans le temps, il faudra naviguer jusqu'aux **Snapshots**, cliquer sur le "snapshot" de votre choix, puis cliquer sur le bouton Restore situé dans la partie supérieure de la fenêtre de VirtualBox.

Cela effacera la version **Current State** et restaurera la machine virtuelle selon l'enregistrement que vous en avez fait lors du "snapshot".

## Conclusion

Après les étapes précédentes, vous devriez être en mesure d'utiliser les fonctions avancées de VirtualBox, incluant des clés USB 2.0 et 3.0, des jetons chiffrés de type SmartCard, etc.

De plus, vous devriez pouvoir sauvegarder l'état de votre machine virtuelle à un point dans le temps et la restaurer.
