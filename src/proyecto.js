function buscarProyecto(nombre, proyectos){
    if (proyectos.length === 0){
        return "";
    }
    const coincidencias = [];
    for (let i = 0; i < proyectos.length; i++) {
        if (proyectos[i] === nombre) {
            coincidencias.push(nombre);
        }
    }

    if (coincidencias.length === 1) {
        return coincidencias[0];
    } else {
        return coincidencias;
    }
    
}

export default buscarProyecto;