## Hesla a přihlašování
- Používat passwordless, kde to jde
- Délka
	- 17 znaků - správci státu
	- Min. 12 znaků
- Mohou být i random věty
- Speciální znak co vyžaduje stisknutí 2 kláves  
- Měnit hlavní hesla (2x do roka)

## Password Managers
- Jen pro méně významná hesla (ne bankovnictví, ani email, google)
- Možnosti
	- KeePass
		- Lze mít i jako lokální správce hesel na USB
	- BitWarden
	- NE správce v prohlížeči (lze smazat, není bezpečné)
- Mít obnovu a zálohu

## 2FA & MFA
- Faktory a typy MFA ovlivňující sílu:
	1. Znalost - heslo, otázka, username
	2. Vlastněná věc - klíč, token, zařízení...
	3. Já - biometrie
- Znalost
	- Bezpečnostní otázky
		- Neodpovídat pravdivě (jednoduché na uhodnutí a dohledání)
- Vlastněná věc
	- SMS
		- Radši ne
		- Ideálně na jiný mobil, který nelze ukrást a ztratit
		- Nebo si napsat kódy od SIM pro obnovení
	- Tokeny/OTP
		- Záloha recovery codes (při ztrátě jsme v ...)
	- HW key
		- Nejbezpečnější, ale duplikát pro ztrátu/rozbití
		- Private and public keys
	- Security keys
		- Windows Hello
		- Private and public keys
		- Na rozdíl od jiných MFA žádné credentials (password) se nevyměňuje se serverem
		- Public key může být ukradnut a ničeho se nemusíme bát (proto je public)

## Types of attacks
- Brute force
	- Keyspace - čím delší, tím lepší
	- Vzorec pro výpočet síly - 26^8 (26 = alphabet letter, 8 = length)
- Dictionairy attack
	- Users should not pick random passwords, generators are better
	- Replacing letters with numbers does not work

## Entropy
- Measures password strength
	- log2(26^8) - 26 aplhabet, 8 length
	- Strength
		- < 28 bits = very weak; might keep out family members
		- 28-35 bits = weak; should keep out most people, often enough for desktop login passwords
		- 36-59 bits = reasonable; fairly secure passwords for network and company passwords
		- 60-127 bits = strong; can be good for guarding financial information
		- 128+ bits = very strong; often overkill

## Hashing
- 1 way (encryption is 2 way)
- Rainbow tables = table of hashed examples and outputs
- Usually hashed multiple times
- Salting
	- Salt added before hashing
- Hash collision - 2 inputs have same outputs
	- Then the algorithm is broken

![Passwords](../../Assets/IT/Privacy+security/Images/Passwords.png)
