const toggleColor = (event) => {
    event.currentTarget.classList.toggle("blauw");
};

const setup = () => {
    let knoppen = document.getElementsByClassName("color-btn");
    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].addEventListener("click", toggleColor);
    }
};

window.addEventListener("load", setup);