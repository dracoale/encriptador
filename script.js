document.querySelector(".encriptar").onclick = encriptar;
document.querySelector(".desencriptar").onclick = desencriptar;
document.querySelector(".copiar").onclick = copiarTexto;

function encriptar() {
    actualizarResultado(encriptarTexto(obtenerTexto()));
}

function desencriptar() {
    actualizarResultado(desencriptarTexto(obtenerTexto()));
}

function obtenerTexto() {
    return document.querySelector(".input-text").value;
}

function actualizarResultado(texto) {
    document.querySelector(".output-image").style.display = "none";
    document.querySelector(".output-message").style.display = "none";
    document.querySelector(".result-text").textContent = texto;
}

function encriptarTexto(texto) {
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            textoFinal += "ai";
        } else if (texto[i] === 'e') {
            textoFinal += "enter";
        } else if (texto[i] === 'i') {
            textoFinal += "imes";
        } else if (texto[i] === 'o') {
            textoFinal += "ober";
        } else if (texto[i] === 'u') {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(texto) {
    let textoFinal = "";
    let i = 0;

    while (i < texto.length) {
        if (texto[i] === 'a' && texto[i + 1] === 'i') {
            textoFinal += "a";
            i += 2;
        } else if (texto[i] === 'e' && texto.substr(i, 5) === 'enter') {
            textoFinal += "e";
            i += 5;
        } else if (texto[i] === 'i' && texto.substr(i, 4) === 'imes') {
            textoFinal += "i";
            i += 4;
        } else if (texto[i] === 'o' && texto.substr(i, 4) === 'ober') {
            textoFinal += "o";
            i += 4;
        } else if (texto[i] === 'u' && texto.substr(i, 4) === 'ufat') {
            textoFinal += "u";
            i += 4;
        } else {
            textoFinal += texto[i];
            i++;
        }
    }

    return textoFinal;
}

function copiarTexto() {
    const resultado = document.querySelector(".result-text").textContent;
    navigator.clipboard.writeText(resultado);
   // alert("Texto copiado al portapapeles");
}
