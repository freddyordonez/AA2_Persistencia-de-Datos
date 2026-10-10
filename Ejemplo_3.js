function ejecutarEjemplo3(valor) {
    // Guarda el texto en vivo conforme el usuario escribe
    localStorage.setItem("texto_borrador", valor);
    document.getElementById("lblInput").innerText = localStorage.getItem("texto_borrador");
}

// Recuperar el texto guardado al cargar la página si el usuario refresca
window.addEventListener("DOMContentLoaded", () => {
    const textoGuardado = localStorage.getItem("texto_borrador");
    if (textoGuardado) {
        document.getElementById("txtInput").value = textoGuardado;
        document.getElementById("lblInput").innerText = textoGuardado;
    }
});