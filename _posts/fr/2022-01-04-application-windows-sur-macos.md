---
layout: post
title:  "Application Windows sur macOS"
ref: application-windows-macos
lang: fr
date:   2022-01-04 21:30:00 -0500
author: Guillaume Charest
excerpt_separator: <!--more-->
---
Plusieurs connaissances mon récemment demandé s'il était possible d'utiliser une application conçue uniquement pour Windows sur un ordinateur Apple, ceux-ci utilisant le système d'opérations macOS.
C'est techniquement possible mais il y a parfois certaines contraintes.
<!--more-->
Il y a quelques options plus fréquentes pouvant être considérées:

- Utiliser un bureau virtuel dans macOS
- Installer Boot Camp
- Utiliser une application tierce pour simuler l'environnement de Windows

Dans tous les cas, l'application n'est pas conçue pour être installée sur macOS alors des problèmes peuvent évidemment survenir.

## Bureau virtuel

Pour utiliser un bureau virtuel, on installe une application qui simule un ordinateur sur lequel on installe Windows.
Puis, on y installe et utilise des applications sur Windows.

En d'autres termes, c'est un peu comme utiliser un ordinateur Windows dans votre ordinateur macOS.

Cette approche nécessite plusieurs manipulations mais demeure relativement simple et sans trop de risques.
Néanmoins, les performances peuvent être moins bonnes qu'une application installée directement sur

Parmi les différentes options disponibles, les plus fréquemment utilisées sont probablement les suivantes:

[VirtualBox](https://www.virtualbox.org/), un logiciel libre et gratuit, maintenue par Oracle.

L'installation, la configuration et l'utilisation de VirtualBox seront pour un prochain billet.

[Parallels](https://www.parallels.com/ca/), une application propriétaire et supportée par une compagnie en échange d'un certain prix.

Dans les deux cas, une licence Windows doit être utilisée puisqu'il s'agit également d'une application propriétaire.

Pour faire des tests, il est possible d'utiliser une copie d'une [image de Windows pour développement](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/).
Cependant, ces images ont une utilisation limitée dans le temps.

## Boot Camp

Apple offre la possibilité d'installer deux système d'opération en parallèle sur un ordinateur Mac.

Cette option est différente de la première car l'utilisateur doit redémarrer sa machine d'un système d'opération à l'autre, contrairement à utiliser Windows "par dessus" macOS.

Pour pouvoir utiliser Windows en parallèle, Boot Camp permet de diviser l'espace libre du disque dur de l'ordinateur et de 

## Application tierce

Dans le premier cas, l'application tierce est Wine, 