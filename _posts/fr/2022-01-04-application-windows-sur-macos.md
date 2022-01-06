---
layout: post
title:  "Application Windows sur macOS"
ref: application-windows-macos
lang: fr
date:   2022-01-05 21:30:00 -0500
author: Guillaume Charest
excerpt_separator: <!--more-->
---
Des contacts mon récemment demandé s'il était possible d'utiliser une application conçue uniquement pour Windows sur un ordinateur Apple, ceux-ci utilisant le système d'opérations macOS.
C'est techniquement possible d'utiliser de telles applications, mais il y a parfois certaines contraintes.
<!--more-->
Dans les faits, à moins que l'application n'est été conçue spécifiquement pour un système d'opérations comme macOS, il n'est pas possible d'installer directement celle-ci.

Néanmoins, il y a quelques options permettant de l'utiliser sur un ordinateur Apple.
Les approches les plus fréquentes sont:

- Utiliser un bureau virtuel avec Windows dans macOS
- Installer Boot Camp et Windows
- Utiliser une application tierce pour simuler l'environnement de Windows

## Bureau virtuel

Pour utiliser un bureau virtuel, on installe une application qui simule un ordinateur complet sur lequel on va ensuite installer Windows.
Puis, on y installe et utilise des applications.

En d'autres termes, c'est un peu comme utiliser un ordinateur Windows dans une fenêtre de votre ordinateur macOS.

Cette approche nécessite plusieurs manipulations mais demeure relativement simple.
Néanmoins, les performances peuvent être moins bonnes qu'une application installée directement sur le système d'opérations de l'ordinateur, qu'il s'agisse de Windows ou macOS, puisque ça revient un peu à faire rouler deux "ordinateurs" l'un dans l'autre.

Parmi les différentes options disponibles pour les bureaux virtuels, les plus fréquemment utilisées sont probablement les suivantes:

[VirtualBox](https://www.virtualbox.org/), un logiciel libre et gratuit, maintenue par Oracle.

L'installation, la configuration et l'utilisation de VirtualBox seront pour un prochain billet.

[Parallels](https://www.parallels.com/ca/), une application propriétaire et supportée par une compagnie en échange d'un certain prix.

Dans les deux cas, une licence Windows doit être utilisée puisqu'il s'agit également d'une application propriétaire.

Pour faire des tests et se familiariser avec le processus avant d'acheter une licence complète, il est possible d'utiliser une copie d'une [image de Windows pour développement](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/).
Cependant, ces images ont une utilisation limitée dans le temps ce qui veut dire que vos données seront perdues après le délai d'utilisation permis.

## Boot Camp

Apple offre la possibilité d'installer deux système d'opérations en parallèle sur un ordinateur Mac.

Cette option est différente de la première car l'utilisateur doit redémarrer sa machine d'un système d'opérations à l'autre entre chaque utilisation, contrairement à utiliser Windows dans un bureau virtuel sur macOS.

Pour pouvoir utiliser Windows en parallèle, Boot Camp permet de diviser l'espace libre du disque dur de l'ordinateur en deux et d'ensuite installer Windows directement sur l'ordinateur.
Votre ordinateur Apple peut désormais démarrer soit en macOS, soit en Windows.

Cette option est relativement simple à utiliser puisque Apple la supporte activement.
Il suffit de démarrer l'ordinateur et suivre les [instructions fournies par Apple](https://support.apple.com/fr-ca/HT201468)

Une fois Windows installé, il est important de bien installer le programme d'installation de Boot Camp car celui-ci sera utile pour pouvoir redémarrer en macOS ainsi que pour installer les pilotes Windows compatibles avec votre Mac.

Comme pour l'utilisation du bureau virtuel, il faut cependant acheter une licence Windows complète car il s'agit d'un logiciel propriétaire.
On peut tout de même faire des essais avec les images pour environnement de développement mentionnés précédemment.

## Application tierce

Il existe aussi un logiciel libre, [Wine](https://www.winehq.org/), qui simule l'environnement Windows et permet d'installer certaines applications sur macOS.

En général, le succès dépend beaucoup de l'application Windows et si les développeurs ont pris le temps de supporter celle-ci pour débugger sont utilisation.

Dans la plus part des cas, si on cherche à utiliser une application très peu connue sur le marché, cette option n'est malheureusement pas possible.
