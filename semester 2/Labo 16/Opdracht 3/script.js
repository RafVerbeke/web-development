let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let aantalIndexOf = 0;
let positieVanafVoor = tekst.indexOf("an");

while (positieVanafVoor != -1) {
    aantalIndexOf = aantalIndexOf + 1;
    positieVanafVoor = tekst.indexOf("an", positieVanafVoor + 1);
}
console.log("Gevonden met indexOf: " + aantalIndexOf);

let aantalLastIndexOf = 0;
let positieVanafAchter = tekst.lastIndexOf("an");

while (positieVanafAchter != -1) {
    aantalLastIndexOf = aantalLastIndexOf + 1;
    positieVanafAchter = tekst.lastIndexOf("an", positieVanafAchter - 1);
}
console.log("Gevonden met lastIndexOf: " + aantalLastIndexOf);
