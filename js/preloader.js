// Esperamos un breve tiempo antes de mostrar el preloader
let showPreloader = true;

const preloader = document.getElementById("preloader");

// Solo mostrar el preloader si la carga tarda más de 300ms
const delay = setTimeout(() => {
    if (preloader && showPreloader) {
        preloader.style.display = "block";
    }
}, 5000); // puedes ajustar este número (en ms)

window.addEventListener("load", function () {
    showPreloader = false;
    clearTimeout(delay); // cancela el preloader si ya no es necesario

    if (preloader) {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 800); // igual al tiempo de transición en CSS
    }
});
