---
title: "Účetnictví - aktiva - zásoby"
slug: "/zapisky/podnikani/ucetnictvi-aktiva-zasoby"
category: "podnikani"
image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
---

- výroba/nákup nemají vliv na výnosy/náklady

> [!example] Pořizovací cena
> 
> **Pořizovací cena** (PC) = **cena pořízení** (cena produktu) + **vedlejší pořizovací náklady** (doprava, pojištění...)

## Způsob výpočtu zásob
- Nezaměnitelné zásoby
	- Skutečná pořizovací cena
- Zaměnitelné zásoby
	- Vážený aritmetický průměr
	- First in, first out
	- ~~Last in, first out~~ (zakázané)

> [!example] Skutečná pořizovací cena
> 20 zboží. 2 doprava
>  
>  Celkem 500 m za 66 Kč (33 000/500)
> 400 m za 26,4 k (66 * 400)
>  
> Dodavatel - +20 +2
> Pořízení zboží - +20 +2, -22
> Zboží - +22, -22
> Náklad - -22 (vyskladnění)

> [!example] VAP
> 1. Počáteční 200 m za 60 Kč (12 k)
> 2. 300 m za 70 Kč (21 k)
> 3. Vyskladnění 400 m
>  
>  Celkem 500 m za 66 Kč (33 000/500)
> 400 m za 26,4 k (66 * 400)
>  
> Dodavatel - +21
> Zboží - PZ +12, +21, -26,4
> **Náklad - 27,6**

> [!example] FIFO
> 1. Počáteční 200 m za 60 Kč (12 k)
> 2. 300 m za 70 Kč (21 k)
> 3. Vyskladnění 400 m
>  
>  200 m za 60 Kč + 200 m za 70 Kč = 26 k
>  
> Dodavatel - +21
> Zboží - PZ +12, +21, -26
> **Náklad - 26**

> [!example] LIFO (zakázano)
> 1. Počáteční 200 m za 60 Kč (12 k)
> 2. 300 m za 70 Kč (21 k)
> 3. Vyskladnění 400 m
>  
>  100 m za 60 Kč + 300 m za 70 Kč = 27 k
>  
> Dodavatel - +21
> Zboží - PZ +12, +21, -27
> **Náklad - 27**


Výše nákladů - FIFO < VAP < ~~LIFO~~ (zakázané)

Proč je LIFO zakázané
1. Daňový důvod
	1. LIFO má největší náklady, tudíž i nejmenší daně pro stát
2. Učetní důvod
	1. Existuje inflace a nikdy bychom se nedostali k tomu nejlevnějšímu, ale prodávali jen to drahé
	2. Zkresluje představy o hodnotě zásob (kvůli infaci by za pár let vypadalo, že máme malé nehodnotné rezervy, ale tehdy stály hodně)
	- 100 * 6 Kč = 600 (k této zásobě bychom se nikdy nedostali)
	- 100 * 7 Kč = 700
	- 100 * 8 Kč = 800

- Nejpřesnější je využívat skutečné pořizovací ceny
- Při zaměnitelných FIFO/VAP
	- Ale nelze měnit v průběhu (zkresluje realitu)

## Způsoby účtování
- Průběžný způsob účtování (způsob A)
	- =účtujeme každý přírustek a úbytek zásob
![[../../../Assets/Podnikání/ucetnictvi/Images/Prubezny.png]]

- Periodický způsob účtování (způsob B)
	- =pohyby zboží se vůbec neúčtují
	- Vedeme skladovou evidenci, ze které lze vypočíst příjmy a výdaje zboží
	- 1x za rok se podíváme do kladové evidence a opravíme náklady
![[../../../Assets/Podnikání/ucetnictvi/Images/Periodicky.png]]