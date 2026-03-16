let gemeenten = [];
let stop = false;

while (!stop) {
    let input = prompt("Geef een gemeente in of typ 'stop' om te eindige");
    if (input === null || input.toLowerCase().trim() === "stop") {
        stop = true;
    } else {
        gemeenten.push(input.trim());
    }
}
gemeenten.sort((a, b) => a.localeCompare(b));
let html = "<select>";
for (let i = 0; i < gemeenten.length; i++) {
    html += `<option>${gemeenten[i]}</option>`;
}
html += "</select>";
document.body.innerHTML += html;