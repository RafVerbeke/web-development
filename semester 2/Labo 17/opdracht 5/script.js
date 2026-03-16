const isGetal = (tekst) => !isNaN(tekst);

const valideer = () => {
    let email = document.getElementById("email").value.trim();
    let datum = document.getElementById("geboortedatum").value.trim();

    let atPositie = email.indexOf("@");
    let laatsteAtPositie = email.lastIndexOf("@");
    if (atPositie > 0 && atPositie === laatsteAtPositie && atPositie < email.length - 1) {
    } else {
        console.log("geen geldig email adres");
    }

    let jaar = datum.slice(0, 4);
    let streep1 = datum.slice(4, 5);
    let maand = datum.slice(5, 7);
    let streep2 = datum.slice(7, 8);
    let dag = datum.slice(8, 10);

    if (jaar.length === 4 && isGetal(jaar) &&
        streep1 === "-" && streep2 === "-" &&
        maand.length === 2 && isGetal(maand) &&
        dag.length === 2 && isGetal(dag)) {
    } else {
        console.log("formaat is niet jjjj-mm-dd");
    }
};