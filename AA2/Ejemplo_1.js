function ejecutarEjemplo1() {
    const cuerpo = document.getElementById("cuerpoPagina");
    const lblTema = document.getElementById("lblTema");
    
    if (cuerpo.classList.contains("dark-mode")) {
        cuerpo.classList.remove("dark-mode");
        localStorage.setItem("tema_app", "claro");
        lblTema.innerText = "Claro";
    } else {
        cuerpo.classList.add("dark-mode");
        localStorage.setItem("tema_app", "oscuro");
        lblTema.innerText = "Oscuro";
    }
}

// Cargar preferencia al iniciar la página (Evidencia de F5)
window.addEventListener("DOMContentLoaded", () => {
    const temaGuardado = localStorage.getItem("tema_app");
    if (temaGuardado === "oscuro") {
        document.getElementById("cuerpoPagina").classList.add("dark-mode");
        document.getElementById("lblTema").innerText = "Oscuro";
    }
});