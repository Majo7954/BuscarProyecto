import buscarProyecto from "./proyecto.js";

//Casos
//Buscar el proyecto en una lista vacia
//Buscar y encontrar un proyecto en una lista de 1 proyecto
//Buscar y encontrar un proyecto en una lista de varios proyectos
//Buscar y encontrar mas de una coindencia de proyectos
//Buscar y encontrar proyectos cuyo nombre empieza con el criterio de busqueda
         // por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos

describe("Buscar", () => {

  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect (buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });

  it("encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
    let proyectos = [];
    proyectos.push("miUnicoProyecto");
    expect (buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
  });
});



  