function konvertacija(eurai) {
    let kursoKaina = 1.050;
    console.log(`Eur kursas ${kursoKaina.toFixed(2)}`);
    let usd = eurai * kursoKaina;

    return usd
}

// console.log(konvertacija(20) )
// let dollar = konvertacija(30)
// console.log(dollar.toFixed(2))
let atsitiktinisSkaicius = Math.floor(Math.random() * 1000) + 1;
console.log("eurai:", atsitiktinisSkaicius)
let dollar = konvertacija(atsitiktinisSkaicius)
console.log("doleriai", dollar.toFixed(2))


// 2. Sukurkite funkciją, kuri paverstų dolerius į eurus.

// Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// eurais.

function konvertcija(doleriai) {
    let kursoKaina = 0.95;
    console.log(`Dolerio kursas ${kursoKaina.toFixed(2)}`);
    let eur = doleriai * kursoKaina;

    return eur

}

let sugeneruotasSkaicius = Math.floor(Math.random() * 1000) + 1;
console.log("doleriai", sugeneruotasSkaicius)
let euras = konvertacija(sugeneruotasSkaicius)
console.log("eurai", euras.toFixed(2))

// 3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body

//     mass index), kai yra žinomas žmogaus ūgis ir svoris.

console.log("\n");

function suskaiciuotiBMI(zmogausUgis, zmogausSvoris) {

    let ugisMetrais = zmogausUgis / 100;
    let bmi = zmogausSvoris / (ugisMetrais * ugisMetrais)

    if (bmi < 18.5) {
        console.log("Jusu BMI yra:", + bmi.toFixed(2), "Per mazas");
    } else if (bmi >= 18.5 && bmi < 24.99) {
        console.log("Jusu BMI yra:", + bmi.toFixed(2), "Normalus");
    } else if (bmi >= 25 && bmi < 29.99) {
        console.log("Jusu BMI yra:", + bmi.toFixed(2), "Virssvoris");
    } else {
        console.log("Jusu BMI yra:", + bmi.toFixed(2), "1 laipsnio nutukimas");
    }

    return bmi;

}


suskaiciuotiBMI(186, 200);
suskaiciuotiBMI(186, 85);


console.log("\n");

// 4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
// pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
// dienomis.

function programaMetaiValandosMinutes(amziusMetais) {


    let metuoseDienu = 365;
    let metuoseValandu = metuoseDienu * 24;
    let metuoseMinuciu = metuoseValandu * 60;
    let metuoseSekundziu = metuoseMinuciu * 60;


    let dienuIsViso = amziusMetais * metuoseDienu;
    let valanduIsViso = amziusMetais * metuoseValandu;
    let minuciuIsViso = amziusMetais * metuoseMinuciu;
    let sekundziuIsViso = amziusMetais * metuoseSekundziu;

    return {
        metai: amziusMetais,
        dienos: dienuIsViso,
        valandos: valanduIsViso,
        minutes: minuciuIsViso,
        sekundes: sekundziuIsViso
    }
}

let rezultatai = programaMetaiValandosMinutes(8);
// console.log("zmogauasInfo:", rezultatai);
console.log("metai", rezultatai.metai)
console.log("dienos", rezultatai.dienos)
console.log("valandos", rezultatai.valandos)
console.log("minutes", rezultatai.minutes)
console.log("sekundes", rezultatai.sekundes)

// 5. Parašykite programą, kuri konvertuos termometro
// duomenis iš Farenheito į Celsijų, ir atvirkščiai.

console.log("\n");

function farenheitaiToCelcijus(farenheitai) {
    let celcius = (farenheitai - 32) * 5 / 9;
    return {
        celcius: celcius.toFixed(2),
    }

}
let rezultatas1 = farenheitaiToCelcijus(45);
console.log("Celcius", rezultatas1.celcius);

function celciusToFarenheitai(celcius) {
    let farenheitai = (celcius * 9 / 5) + 32;
    return { farenheitai: farenheitai.toFixed(2) }
}
let rezultas2 = celciusToFarenheitai(7.22)
console.log("Farenheitai", rezultas2.farenheitai)

// 6. Sukurkite kodą, kuris išspausdins į konsolę
// 1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
// dešimties neturėtų būti brūkšniuko.

console.log("\n");


function kodasSkaiciams() {
    let rezultatas = "";

    for (let i = 1; i <= 10; i++) {
        if (i === 10) {
            rezultatas += i;
        } else {
            rezultatas += i + "-";
        }
        console.log(rezultatas)
    }

    return rezultatas;
}
console.log(kodasSkaiciams())

// 7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
console.log("\n");

function sukurtiTokiVaizda() {
    let simbolis = "";
    for (let i = 1; i <= 5; i++){
        
  simbolis += "*";

    console.log(simbolis);
}

return simbolis; 
}

 sukurtiTokiVaizda() 


console.log("\n");

// 8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

function dienuIkiKaledu() {

    let dabar = new Date();

    let kaledos = new Date(dabar.getFullYear(), 11, 25);

    let skirtumas = kaledos - dabar;

    let dienosIkiKaledu = Math.floor(skirtumas / (1000 * 60 * 60 * 24))

    console.log("liko iki kaledu", dienosIkiKaledu);
}

dienuIkiKaledu();
