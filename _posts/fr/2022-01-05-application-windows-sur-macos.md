---
layout: post
title:  "Application Windows sur macOS"
ref: application-windows-macos
lang: fr
date:   2022-01-05 21:30:00 -0500
author: Guillaume Charest
excerpt_separator: <!--more-->
---
Des personnes de mon entourage m'ont récemment demandé s'il était possible d'utiliser une application conçue uniquement pour Windows sur un ordinateur Apple, ceux-ci utilisant le système d'opérations macOS.
C'est techniquement possible d'utiliser de telles applications, mais il y a parfois certaines contraintes.
<!--more-->
Dans les faits, à moins que l'application n'est été conçue spécifiquement pour un système d'opérations comme macOS, il n'est pas possible d'installer directement celle-ci.
Il faut donc utiliser Windows sur votre ordinateur Mac.

L'application spécifiquement mentionnée lors de mes échanges était Internet Explorer, l'ancien navigateur web exclusif et propriétaire de Microsoft, requis pour utiliser un site web compatible uniquement avec ce navigateur.
Cette application considérée vétuste même par Microsoft, qui [recommande d'éviter son utilisation pour des raisons de sécurité](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/the-perils-of-using-internet-explorer-as-your-default-browser/ba-p/331732) et [abandonnera officiallement sa maintenance en juin 2022](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/), est disponible uniquement sur Windows.

Ce faisant, il n'est donc pas possible d'installer et d'utiliser Internet Explorer sur macOS directement. Par contre, il y a quelques options permettant au propriétaire d'un ordinateur Apple d'utiliser Windows sur leur appareil.
Les approches les plus fréquentes sont:

- Utiliser un machine virtuelle avec Windows dans macOS
- Installer Boot Camp et Windows
- Utiliser une application tierce pour simuler l'environnement de Windows

## Machine virtuelle

Pour utiliser un machine virtuelle, on installe une application qui simule un ordinateur complet sur lequel on va ensuite installer Windows.
Puis, on installe et utilise des applications sur Windows...

En d'autres termes, c'est un peu comme utiliser un ordinateur Windows complet dans une seule fenêtre de macOS.
Il va sans dire que les performances peuvent être moins bonnes que d'utiliser des applications installées directement sur le système d'opérations de l'ordinateur, qu'il s'agisse de Windows ou macOS, puisque c'est un peu comme rouler deux "ordinateurs" au complet l'un dans l'autre.

On partage en effet le matériel de l'ordinateur entre les deux systèmes d'opérations et, la physique étant ce qu'elle est, impossible d'utiliser la pleine capacité de la mémoire et du processeur de votre ordinateur, que ce soit pour macOS ou Windows.
On coupe la poire en deux.

Cette approche nécessite plusieurs manipulations mais demeure relativement simple d'un point de vue technique.

Parmi les différentes options disponibles pour les bureaux virtuels, les plus fréquemment utilisées sont probablement les suivantes:

[VirtualBox](https://www.virtualbox.org/), un logiciel libre et gratuit, maintenue par Oracle.

L'installation, la configuration et l'utilisation de VirtualBox seront pour un prochain billet.

[Parallels](https://www.parallels.com/ca/), une application propriétaire et supportée par une compagnie en échange d'un certain prix.

Dans les deux cas, une licence Windows doit être utilisée puisqu'il s'agit également d'une application propriétaire.

Pour faire des tests et se familiariser avec le processus avant d'acheter une licence complète, il est possible d'utiliser une copie d'une [image de Windows pour développement](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/).
Cependant, ces images ont une utilisation limitée dans le temps ce qui veut dire que vos données seront perdues après le délai d'utilisation permis.
Pour continuer l'utilisation de la machine virtuelle, il faudrait acheter une licence de Windows 10, au coût de [190$ pour l'édition familiale](https://www.microsoft.com/en-ca/d/windows-10-home/d76qx4bznwk4?rtc=1&activetab=pivot%3aoverviewtab) et de [260$ pour l'édition professionnelle](https://www.microsoft.com/en-ca/d/windows-10-pro/df77x4d43rkt?rtc=1&activetab=pivot%3aoverviewtab).

## Boot Camp

Apple offre la possibilité d'installer deux système d'opérations en parallèle sur un ordinateur Mac.

Cette option est différente de la première car l'utilisateur doit redémarrer sa machine d'un système d'opérations à l'autre entre chaque utilisation, contrairement à utiliser Windows dans un machine virtuelle sur macOS.

Pour pouvoir utiliser Windows en parallèle, Boot Camp permet de diviser l'espace libre du disque dur de l'ordinateur en deux et d'ensuite installer Windows directement sur l'ordinateur.
Votre ordinateur Apple peut désormais démarrer soit en macOS, soit en Windows, mettant à profit la totalité de sa puissance matérielle car un seul système d'opérations est utilisé à la fois.

Cette option est relativement simple à utiliser puisque Apple la supporte activement.
Il suffit de démarrer l'ordinateur et suivre les [instructions fournies par Apple](https://support.apple.com/fr-ca/HT201468)

Une fois Windows installé, il est important de bien installer le programme Boot Camp d'Apple car celui-ci sera utile pour pouvoir redémarrer en macOS ainsi que pour ajouter les pilotes Windows compatibles avec votre matériel Mac.

Comme pour l'utilisation du machine virtuelle, il faut cependant acheter une licence Windows complète.
Si vous avez un disque d'installation ou une clé USB avec un assistant d'installation, il est possible d'installer Windows sans licence et de l'utiliser quelques jours pour tester la configuration, après quoi une activation sera requises

## Application tierce

Il existe aussi un logiciel libre, [Wine](https://www.winehq.org/), qui simule l'environnement Windows et permet d'installer certaines applications sur macOS.

En général, le succès dépend beaucoup de l'application Windows et si les développeurs ont pris le temps de supporter celle-ci pour débugger sont utilisation.

Dans la plus part des cas, si on cherche à utiliser une application très peu connue sur le marché, cette option n'est généralement pas possible.

Internet Explorer étant bien connu, on pourrait croire que l'application est supportée.
Malheureusement, le site web de Wine semble indiquer que le support pour ce logiciel propriétaire a cessé pour IE 9.0 et que les performances étaient médiocres de toute façon.

## Conclusion

Si vous voulez faire quelques tests rapides gratuitement, VirtualBox avec une copie d'essai de Windows peut être une option très intéressante.
J'écrirai un billet détaillant comment procéder prochainement.

Si vous tenez mordicus à rester dans macOS pour travailler et à ne lancer Windows que pour les quelques minutes dont vous en avez besoins, la machine virtuelle avec une licence achetée de Windows pourrait satisfaire à vos besoins.

Finalement, si vous savez que vous aurez à utiliser Windows de façon prolongée, pour le travail par exemple, mais que vous ne voulez pas pour autant laisser tomber votre ordinateur Mac, j'aurais tendance à vous recommender d'utiliser Boot Camp car c'est la solution qui permet les meilleures performances au plus faible coût.
