const berekenTotaal = () => {
    // Verzamel alle elementen per kolom, deze staan op dezelfde index 'i' in elke lijst
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseFloat(aantallen[i].value);
        let btw = parseFloat(btws[i].textContent);
        let subtotaal = (prijs * aantal) * (1 + (btw / 100));
        subtotalen[i].textContent = subtotaal.toFixed(2) + " Eur";
        totaal += subtotaal;
    }
    document.getElementById("totaal").textContent = totaal.toFixed(2) + " Eur";
};

const setup = () => {
    let knop = document.getElementById("btnHerbereken");
    knop.addEventListener("click", berekenTotaal);
};
window.addEventListener("load", setupD);