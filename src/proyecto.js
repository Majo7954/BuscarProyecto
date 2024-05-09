function buscarProyecto(nombre, proyectos){
    if (proyectos.length === 0){
        return "";
    }
    for (let i = 0; i < proyectos.length; i++) {
        if (proyectos[i] === nombre) {
            return nombre;
        }
    }
}

export default buscarProyecto;