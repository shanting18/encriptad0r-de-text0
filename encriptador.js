let escrito = document.getElementById("escrito")
let mostrarTexto = document.getElementById("contenido");
let mostrarContenido = document.querySelector(".contenido_invisible");
let quitarContenido = document.querySelector(".contenido_visible");

quitarContenido.style.display = "none"

function encriptarTexto() {
    let contenido = escrito.value;

    let encriptado = contenido
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    if (encriptado != 0) {
        mostrarContenido.style.display = "none";
        quitarContenido.style.display = "block";
    } else {
        mostrarContenido.style.display = "block";
        quitarContenido.style.display = "none";
    }

    mostrarTexto.innerHTML = encriptado;
    quitarTexto();
}

function dencriptarTexto() {
    let contenido = escrito.value;

    let desencriptado = contenido
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    if (desencriptado != 0) {
        mostrarContenido.style.display = "none";
        quitarContenido.style.display = "block";
    } else {
        mostrarContenido.style.display = "block";
        quitarContenido.style.display = "none";
    }

    mostrarTexto.innerHTML = desencriptado;
    quitarTexto();
}

function quitarTexto() {
    escrito.value = "";
}

function copiarTexto() {
    navigator.clipboard.writeText(mostrarTexto.innerHTML);
}

function copiado() {
    copiarTexto();
    alert("copiado")
}
