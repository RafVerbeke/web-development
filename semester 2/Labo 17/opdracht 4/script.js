const toonResultaat = () => {
    let isRoker = document.getElementById("roker").checked;
    console.log(isRoker ? "is een roker" : "is geen roker");
    let talen = document.getElementsByName("taal");
    let gekozenTaal = "";
    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            gekozenTaal = talen[i].value;
        }
    }
    console.log("moedertaal is " + gekozenTaal);

    let buurlandSelect = document.getElementById("buurland");
    let gekozenLand = buurlandSelect.options[buurlandSelect.selectedIndex].text;
    console.log("favoriete buurland is " + gekozenLand);

    let bestellingSelect = document.getElementById("bestelling");
    let bestellingTekst = "bestelling bestaat uit";
    for (let i = 0; i < bestellingSelect.options.length; i++) {
        if (bestellingSelect.options[i].selected) {
            bestellingTekst += " " + bestellingSelect.options[i].text;
        }
    }
    console.log(bestellingTekst);
};