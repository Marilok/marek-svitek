- Šum - chybná data a nepřesnosti

## Nejistota
- Dříve fuzzy logika
- Dnes pravděpodobnost

## Pravděpodobnost
- Lze vyčíslit
- Potřeba systematicky shromažďovat data pro lepší výsledky
- Může být správná/špatná/nelze určit

## Šance
- Nejsnazší způsob jak znázornit nejistotu
- Šance
	- Může být > 1
	- X:Y = 3:1 = 3
	- 3 výhry, 1 prohra
- Pravděpodobnost
	- Nesmí být > 1
	- Přirozené četnost
		- 3/4 případů
		- 3 výhry, 1 prohry
		-  X/(X+Y)
	- Procenta
		- 75 % pravděpodobnost na výhru

## Bayesova věta/vzorec
- Využití pro řešení rozporů
- Apriorní šance = šance před získáním nových informací
- Podmíněná šance = po nových informacích, aktualizuje apriorní


> [!note] Key concept
> Podmíněná šance = míry pravděpodobnosti x apriórní šance
> 
> Míra pravděpodobnosti = (pravděpodobnost, že událost nastane/pravděpodobnost, že nenastane)

Podmíněnou šanci, lze převést na pravděpodobnost

Naivní bayseovský klasifikátor
- Pravděpodobnost tříd

1. Apriorní šance - P(A)/P(B) (celková šance na rakovinu)
2. Míry pravděpodobnosti (poměr těchto 2)
	1. Pravděpodobnost výskytu v A (test pozitivní a rakovina je/není)
	2. Pravděpodobnost výskytu v B (test negativní a rakovina je/není)
3. Vynásobit míry x apriorní

NKB = P(A)/P(B) x míry pravděpodobnosti

- Místo 0 použít malé číslo
- Pro převod na % - x/(x+y)

Spamový filtr
1. Šance - 1:1 - spam:ham
2. Míry pravděpodobnosti pro slova obsažená v textu
	1. Milion...6
	2. Adclick...20
	3. Konference...0,6
	4. ...
3. Dosadit - 6x20x3 x (1:1)
- Course.elementsofai.com/cs/3/3



[A Level Statistics 1.5 Bayes' Theorem and medical testing - YouTube](https://youtu.be/tRE6mKAIkno)