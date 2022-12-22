Umění získávání poznatků z dat (**data mining**)

## Rozdělení
1. Supervised learning (s učitelem)
	- Data mají správné odpovědi
	- Labels/names
	- Klasifikace (labels), regrese (numbers)
2. Unsupervised learning
	- Data nemají správné odpovědi
	- Clustering, vizualizace, patterns, generativní modelování, GAN...
3. Reinforcement learning (zpětnovazebné)
	- Autonomní vozidla
	- Zpětnou vazbu dostávají se zpožděním
4. Semisupervised learning

## Faktory ovlivňující výsledek
- Obtížnost úkolu
- Metoda strojového učetní - některé jsou pro konkrétní úkol lepší
- Množství trénovacích dat
- Kvalita dat

## Modely
### Klasifikace (supervised)
- Tréninková a testovací data
- Pozor na přeučení, důležité jen zobecňovat (overfitting)
![[../Assets/IT/AI/Images/Overfitting.png]]
-
#### Metodou nejbližšího souseda
- Zvolení správné metriky vzdálenosti
- (Není omezeno na 2 dimenze)
- Způsobuje filtrové bubliny
- Doporučování Spotify, předvídání chování podle ostatních...
- **Kolaborativní filtrování** (v doporučení bude jen co se ostatním líbílo a nám by moglo taky)
	- Vytváření filtrových bublin - uživatelé vidí jen obsah, co se jim a dalším v bublině libí
![[../Assets/IT/AI/Images/Nejblizsi_soused.svg]]

### Regrese (supervised)
- Výsledek není class label, ale číslo

#### Lineární regrese (numbers)
```ad-summary
title: Key concept
**intercept** + **vstupy** * **váhy** = **výstup** (neboli lineární kombinace)
```
![[../Assets/IT/AI/Images/Regrese_linearni.png]]
- Lineární = zvýšení o 1 vstup je vždy stejně velké
- Odborně lineární kombinace
![[06a8dab6b20c2d8f396fac1847e39cc3e1a3e7dc 1.svg]]
- Jako účtenka na nákup
- **Intercept** neboli posun
- Hledání koeficientů/váh je často zajímavější než výstup
	- Př.: předpovídání věku podle zeleniny, cigaret... (hledání, váh pro zeleninu, cigarety je zajímavější)
- Nikdy nebude 100 % přesné, jelikož skutečný výstup není vždy jen podle vstupu (protože nejistota, šum)
	- Pravděpodobný x skutečný výstup
- K hledání vah a křivky, lze využít metody nejmenších čtverců
- Korelace ≠ kauzace


#### Logistická regrese (labels)
![[../Assets/IT/AI/Images/Regrese_logisticka.png]]
- Lze měřit nejistotu předpovědi

