let text = "Gisteren zat de jongen op de stoep en at de helft van de appel";
let resultaat = "";
let i = 0;

while (i < text.length) {
    if (text.slice(i, i + 2) === "de") {
        resultaat += "het";
    } else {
        resultaat += text.slice(i, i + 1);
        i++;
    }
}
console.log(resultaat);