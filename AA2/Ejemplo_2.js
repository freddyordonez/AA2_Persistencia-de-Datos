function ejecutarEjemplo2() {
    // 1. Objeto original
    const estudiante = { id: 769703, nombre: "Freddy", materia: "Estructura de Datos" };

    // 2. Serializar con JSON.stringify() y guardar
    localStorage.setItem("datos_estudiante", JSON.stringify(estudiante));

    // 3. Recuperar y deserializar con JSON.parse()
    const recuperadoStr = localStorage.getItem("datos_estudiante");
    if (recuperadoStr) {
        const objetoOriginal = JSON.parse(recuperadoStr);
        document.getElementById("lblObjeto").innerText = 
            `Recuperado -> Nombre: ${objetoOriginal.nombre}, Materia: ${objetoOriginal.materia}`;
    }
}