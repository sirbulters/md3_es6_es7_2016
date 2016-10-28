//Nieuwe methode
//Zoals je wel kan zien, hoef je bij de nieuwe methode geen '+' te gebruiken als je een twee of meerdere strings aan elkaar wilt plakken

let greeting = "Hoi";
let message = `${greeting} MD3A`;

console.log(message);

//De nieuwe methode herkent ook spaces tussen de strings. De regels en spaties tussen de strings worden ook weergeven in je console.
let greeting2 = "Hoi";
let message2 = `${greeting2}

        iedereen           van
MD3A`;

console.log(message2);

//Met de nieuwe methode kan je ook expressions gebruiken.
//Hier gebruik je uiteraard wel een '+' en een '=', omdat je deze wilt laten zien in je console als tekst.
let x = 5;
let y = 8;
var som = `${x} + ${y} = ${x+y}`;

console.log(som);

//Oude methode
//Voor ES6 en ES7 moest je de strings op deze manier concatinaten.
//Deze methode lijkt erg veel op wat we allemaal wel kennen uit PHP. Erg simpel en makkelijk te begrijpen.
var first = "Hoi ";
var second = first + "MD3A";

console.log(second);
