const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        let huidigKarakter = inputText[i];
        if (huidigKarakter != " ") {
            result = result + huidigKarakter + " ";
        }
    }

    return result;
}
let invoer = "Dit is een tekst.";
console.log(maakMetSpaties(invoer));