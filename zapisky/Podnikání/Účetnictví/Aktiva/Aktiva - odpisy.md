---
title: "Účetnictví - aktiva - odpisy"
slug: "/zapisky/podnikani/ucetnictvi-aktiva-odpisy"
category: "podnikani"
image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
---

- Nejde o opotřebení, ale o přiřazení o nákladů k výnosům
- Rozložení odposí musí, co nejpřesněji odpovídat rozložení výnosů, kterých se dosáhlo pomocí dlouhodobého majetku

- Typy
	- Výkonové
	- Časové
		- Rovnoměrné
		- Zrychlené

- Výběr způsobu odpisování
1. Výkonové
	- nejpřesnější realitě, využít vždy pokud jde
2. Časové
	- pak časové
	- musíme odhadnout dobu použitelnosti
3. Lineární/zrychlené
	- Pokud nemáme informace o nerovnoměrných výnosech, tak použijeme lineární
4. Vybrat vzorec pro zrychlené

- Začínáme odpisovat v měsíci po zařazení do užívání
- Končíme v měsíci vyřazení
- Pokud potřebujeme přesnost na měsíce, tak (roční odpis/12) * počet měsíců


> [!example] Pořizovací cena
> 
> **Pořizovací cena** (PC) = **cena pořízení** (cena produktu) + **vedlejší pořizovací náklady** (doprava, pojištění...)

> [!example] Zůstatková cena
> PC..200
> 1. rok = 200 - 50 = 150 (=zůstatková cena)
> 2. rok = 150 - 50 = 100 (=zůstatková cena)
> 3. rok = 100 - 50 = 50 (=zůstatková cena)
> 4. rok = 50 - 50 = 0 (=zůstatková cena)

> [!example] Zbytková hodnota
> Částka, kterou nikdy neodepíšeme
> Stroj..200, po 3 letech prodáme za 50 (=zbytková hodnota)
> 1. rok = 200 - 50 = 150
> 2. rok = 150 - 50 = 100
> 3. rok = 100 - 50 = 50 (=zbytková hodnota)

## Výkonové odpisy
- Stroj za 200
- 1. rok = 20 kusů * 1 Kč = 20 Kč = 20 % výnosů -> 40 odpis
- 2. rok = 30 kusů * 1 Kč = 30 Kč = 30 % výnosů -> 60 odpis
- 3. rok = 40 kusů * 1 Kč = 40 Kč = 40 % výnosů -> 80 odpis
- 4. rok = 10 kusů * 1 Kč = 10 Kč = 10 % výnosů -> 20 odpis
- Celkem 200 odpis

## Časové odpisy
### Rovnoměrné
- Stroj za 200, použitelnost 4 roky
- 200/4=50
- 1. rok = 50 odpis
- 2. rok = 50 odpis
- 3. rok = 50 odpis
- 4. rok = 50 odpis
- Celkem 200 odpis

### Zrychlené
- Největší odpis na začátku, pak odpisy klesají
- Dlouhodobý majetek často přináší největší výnosy na začátku
- Více způsobů výpočtu
	- SYD (Sum of Years Digits)
		- 4 roky...1+2+3+4=10
		- Stroj za 200
		- 1. rok = 200 * 4/10 = 80 odpis
		- 2. rok = 200 * 3/10 = 60 odpis
		- 3. rok = 200 * 2/10 = 40 odpis
		- 4. rok = 200 * 1/10 = 20 odpis
		- Celkem 200 odpis


## Příklad
PC=6000
ZH=500
Životnost=5 let
Rovnoměrné odpisy

6000-500 (částka co nikdy neodepíšeme) = 5500
5500/5=1100 (odpis pro každý rok)


## Učetní vs daňové odpisy

**zisk** = **výnosy** - **náklady** (zahrnuje odpisy, přes které by šlo ovlivňovat zisk a výši daně, proto existují daňové odpisy)

- Zákon o dani z přijmů
	- 6 skupin, různé doby odpisování
- Volba
	- Malé podniky často počítají jen daňové odpisy (aby nepočítali 2x)
	- Větší podniky počítají obě varianty, učetní poskytují nezkreslené stavy

|                    | **Učetní**                                    | **Daňové**                                                        |
| ------------------ | ----------------------------------------- | ------------------------------------------------------------- |
| **Doba použitelnosti** | zohledněna                                | nezohledněna                                                  |
|    **Způsob výpočtu**                | Zohledňují rozložení výnosů aktiva v čase | rovnoměrné/zrychlené odpisy si smíme libovolně zvolit         |
| **Přesnost**           | na měsíce                                 | na roky                                                       |
| **Zbytková hodnota**   | existuje                                  | neexistuje                                                    |
|             **Lze přerušit odpisy?**       | nemůžeme               | můžeme bezdůvodně zpomalit/přerušit (zaplatíme ale vyšší daň) |


> [!example] Prodej stroje
> Faktura stroj 34 k z BÚ, odepsat 30 k, 3. rok prodat za 6 k
> - BÚ - -34
> - Dod. - +34, -34
> 
> 1. Rok
> 	- DA - +34
> 	- Oprávky (AÚ) - -10
> 	- N - odpisy - -10
> 2. Rok
> 	- DA - +34
> 	- Oprávky (AÚ) - PZ -10, -10
> 	- N - odpisy - -10
> 3. Rok
> 	- DA - +34
> 	- Oprávky (AÚ) - PZ -20, -10 -4 (odepíšu zbytek stroje)
> 	- N - odpisy - -10
> 	- N - prodej DA -4
> 	- Odběratel +6
> 	- V +6