- Biologická/umělá se sestává z hodně prostých jednotek, neuronům vzájemně přijímají a vysílají signály
- Nutné paralalelní zpracování (třeba GPU), každý neuron počítá a ukládá hodnotu sám

## Hluboké učení (deep learning)
- Několik vrstev jednoduchých zpracovávajících jednotek se spojí, vstupy tak prochází přes více zpracovávácích vrstev

## V praxi
- Stejný princip, jak linerání regrese (účtenka s váhami)
- Po vypočtení - aktivační funkce
	- Např.:
		- Funkce identity - vyšle lineární kombinace
		- Skoková funkce
			- >0 -> ON/1
			- <0 -> OFF/0
		- Sigmoidální funkce
	- Vždy vykazují určitou hodnotu
![[../Assets/IT/AI/Images/Sigmoidni_fce_2.png]]
![[../Assets/IT/AI/Images/Skokove_fce_2.png]]

- Perceptron - jednoduchý model neuronu se skokovou aktivační funkcí
- Vrstvy
	- Vstupní vrstva (zpracovává data)
	- Skryté vrstvy (vyhodnocují výsledky)
	- (Konvuluční vrstva)
	- Výstupní vstva (dává konečný výsledek)

## Příklad jednoduchého klasifikátoru neuronové sítě
Máme 25 vstupů a vah (5x5)
Na základě jenotlivých vstupů se vyhodnotí zda je obličej happy/sad
1 - znamená, že je obličej happy
-1 - znamená, že je obličej sad
![[../Assets/IT/AI/Images/Klasifikator.png]]
- Algoritmus zpětného šíření chyby (backpropagation)

## Konvuleuční neuronové sítě (CNN)
- Mají speciální konvuluční vstvu
	- Bývají ve spodních vrstvách sítě
	- Unsupervised learning (Obvykle se dají vytrénovat učením bez učitelebvykle vytrénovat prostřednictvím učení bez učitele bez konkrétního zadaného úkolu předvídání)
	- Horní vrstvy jsou naučené učitelem (supervised learning) k identifikace/klasifikaci/předvídaní objektů
- Dokáží identifikovat světlé/tmavé body, tvary, okraje
	- Následně lze identifikovat objekty, kdekoliv ve snímku

## Generativní adversariální sítě (GAN)
- Využíváme naučených spodních vrstev

- Myšlenka využití 2 neuronových sítí, které spolu soutěží
	- 1. generuje "reálné" snímky
	- 2. se snaží odhalit vygenerované snímky od skutečných
	- Obě sítě se navzájem učí
