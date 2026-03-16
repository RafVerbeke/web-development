let tekst = "onoorbaar";
let aantalIndexOf = 0;

while (aantalIndexOf < tekst.length) {
    if (tekst.length - aantalIndexOf >= 3) {
        console.log(tekst.slice(aantalIndexOf, aantalIndexOf + 3));
        aantalIndexOf += 1;
    }
    else {
        console.log(tekst.slice(aantalIndexOf, tekst.length - aantalIndexOf));
    }
}
