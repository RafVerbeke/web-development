const updateColor = () => {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    let colorString = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("swatch").style.backgroundColor = colorString;
};
const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", updateColor);
        sliders[i].addEventListener("change", updateColor);
    }
    updateColor();
};

window.addEventListener("load", setup);