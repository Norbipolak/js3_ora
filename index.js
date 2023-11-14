/*
    A const a let és a var közötti különbség
*/

var a = 0;
var a = 0;

let b = 0;
let b = 0;

if (true) {
    /*
        A blokkon belül elkészített változónak
        lokális változónak kellene lennie.
        Tehát, nem kéne, hogy létezzen a 
        blokkon kívül.
    */
    var a = 0;
}
console.log(a); // 0 

if (true) {
    let b = 0;   // hibaüzenetet fogunk kapni 
}
console.log(b);

if (true) {
    let c = 0;   // itt is hibsüzenetet fogunk kapni
}
console.log(c);

/*
    A konstansnak futási időben nem 
    módosulhat az értéke 
    A konstansnak valamilyen kezdőértéket meg kell adni
*/
const c = 5;
let d;

let nev = prompt("Add meg a neved!");   // a promptnak az a vissztérési értéke amit beírunk az input mezőbe
console.log("A neved a következő" + nev);

let db = prompt("Add meg, hogy hány darab krumplit akarsz venni"); // prompt-ból mindig stringet kapunk vissza 
db += 5;
console.log(typeof db);
/*
    NaN -> not a number, akkor fog megjelenni ha nem számot írunk be
*/
if (isNaN(db)) {
    console.log("A db változó értéke nem egy number") // akkor lesz igaz, ha amit beírunk az nem egy szám és kiírja amit beleírtunk ide a console-logba
}
console.log("krumplik száma: " + db);

// beírjuk hogy hány krumplit szeretnénk venni pl.5 + a második sorba hozzáadunk 5-t 
// mivel stringet irtunk be ezért nem 10-t kapunk hanem 55-t (a második 5-t hozzárakja az első 5-s után) -> összefüzés

// ezért integerré kell parse-olni a visszatérési értéket ->
// let db = parseInt(prompt("Add meg hány krumplit akarsz venni")) -> így az eredmény 10 lesz

let pi = parseFloat(prompt("Add meg a pi értékét!"));
console.log("A pi értéke: " + pi); // eredmény 3 lesz, mert a parseInt csak egész számot ad meg végeredménynek ->parseFloatot kell használni

/*
    Kérjünk be a felhasználótól két egész számot,
    majd adjuk meg az összegüket, a hányadosukat.
*/

function feladat1() {
    const a = parseInt(prompt("Adj meg egy egész számot!"));
    const b = parseInt(prompt("Adj meg egy újabb egész számot!"));

    const összeg = a + b;
    const hanydos = a / b;

    console.log(${a} + ${b} = ${osszeg});
    console.log(${a} / ${b} = ${hanyados});
}

function feladat2() {
    const atmero = parseFloat(prompt("Add meg a medence átmérőjét!"));
    const melyseg = parseFloat(prompt("Add meg a medence mélységét!"));

    // const T = Math.pow(atmero/2, 2) * Math.PI; Math.pow (hatványra emelés) két értéket kér, 1 -> amit hatványra emelünk, 2 -> amivel hatványra emelünk
    const T = (atmero / 2) ** 2 * Math.PI; // ** kétszer szorzás jel = hatvanyra emelés 
    // const V = T * melyseg; sok lesz a tizedes ezért a Math.round * 100 /100-val két tizedesjegyre kerekítünk

    const V = Math.round(T * melyseg * 100) / 100;

    console.log(`A megadott medencébe ${V}m^3 víz fér bele`);
}


function feladat3() {
    const a = parseFloat(prompt("Add meg 'a' értékét!"));
    const b = parseFloat(prompt("Add meg 'b' értékét!"));

    const x = Math.round(-b / a * 100) / 100;
    console.log(`x = ${x}`);
}

/*
    Számoljuk ki, hogy mennyi pénzt kell magunkkal vinni, ha 
    krumplit szeretnénk vásárolni. Ehhez kérjük be a felhasználótól,
    hogy mennyibe kerül egy kiló krumpli, és hogy hány kilót szeretnénk venni.
*/

function feladat4() {
    const mennyiseg = parseFloat(prompt("Add meg a mennyiséget!"));
    const egysegar = parseInt(prompt("Add meg a krumpli kilónkénti árát!"))

    const vetelar = Math.round(egysegar * mennyiseg / 5) * 5;

    console.log(`A vételár: ${vetelar} forint!`);

}

/*
    Írjunk programot, ami kiszámolja, hogy fizetésemelés utá mennyi lesz a fizetésünk. 
    Ehhez kérjük be a felhasználótól , hogy mennyi most a fizetése, és hogy hány százalékos 
    fizetésemelést kap.
*/

function feladat5() {
    const fizetes = parseInt(prompt("Add meg a jelenlegi fizetésed!"));
    const emeles = parseInt(prompt("Add meg az emelés mértékét!"));

    const szorzo = 1 + emeles / 100;
    const ujFizetes = fizetes * szorzo;

    console.log(`Az emelés utáni fizetés: ${ujFizetes} Ft.`),
}

/*
    Írjunk programot, ami kiszámolja, hogy hány hónapot kell spórolnom, ha laptopot szeretnék venni.
    Ehhez kérje be, hogy havonta mennyi pénzt tudok félre rakni, és hogy mennyibe kerül a kiválasztott laptop.
*/

function feladat6() {
    const sporolas = parseInt(prompt("Add meg mennyit tudsz félretenni!"));
    const laptopAr = parseInt(prompt("Add meg, hogy mennyi a laptop ára!"));

    const honapok = Math.ceil(laptopAr / sporolas);

    console.log(`${honapok} hónapot kell spórolni. hogy megvásárold a laptopot.`);
}

/*
    Készítsünk egy programot, amely segíti a burkoló mesterek munkáját. A szükséges csempe mennyiségének a kiszámításához a
    program kérje be a terület szélességét, valamint a magasságát méterben, majd számolja ki, hogy 20cm * 20cm  méretű csempék
    esetén hány darabra van szükség a munka elvégzéséhez (plusz 10%-ot az illesztések miatt rá kell számolni).
*/

function feladat7() {
    const szeleseg = parseFloat(prompt("Add meg a terület szélességét!"));
    const magassag = parseFloat(prompt("Add meg a terület magasságát!"));

    const db = Math.round(magassag * szelesseg * 25 * 1.1);

    console.log(`a terület lefedéséhez ${db} db. csempe szükséges!`);
}

/*
    Kérjünk be két, egy napon belüli időpontot(elöször órát, aztán percet, vegül másodpercet). Számítsuk ki a két
    időpont közti különbség másodpercekben és irassuk ki.
*/

function feladat8() {
    const oraPercMp1 = prompt("Add meg az első óra-perc-mp hármast a következőképen: o:p:m");
    const oraPercMp2 = prompt("Add meg a második óra-perc-mp hármast a következőképen: o:p:m");

    const splitted1 = oraPercMp1.split(':');
    const splitted2 = oraPercMp2.split(':');

    const ora1 = parseInt(splitted1[0]);
    const perc1 = parseInt(splitted1[1]);
    const mp1 = parseInt(splitted1[2]);

    const ora2 = parseInt(splitted2[0]);
    const perc2 = parseInt(splitted2[1]);
    const mp2 = parseInt(splitted2[2]);

    const idopontMp1 = ora1 * 3600 + perc1 * 60 + mp1;
    const idopontMp2 = ora2 * 3600 + perc2 * 60 + mp2;

    const kulonbseg = Math.abs(idopontMp1 - idopontMp2);
    console.log(`A két időpont között ${kulonbseg} másodperc van!`);
}

/*
    Kérjük be a felhasználótól a kert hosszát és szélességgét,
    majd adjuk meg, hogy mennyi fűmagot kell vennie, ha öt 
    négyzetméter befűvesítéséhez kell egy csomag fűmag.
*/

function feladat9() {
    const szelesseg = parseFloat(prompt("Add meg a szélességet!"));
    const magassag = parseFloat(prompt("Add meg a magasségot!"));

    const T = szelesseg * magassag;
    const cs = Math.ceil(T / 5) 

    console.log(`A terület befűvesítéslhez ${cs} csomagra van szükség`)
}

feladat1();
feladat2();
feladat3();
feladat4();
feladat5();
feladat6();
feladat7();
feladat8();
feladat9();