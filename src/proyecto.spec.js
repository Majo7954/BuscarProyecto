import buscarProyecto from "./proyecto.js";

//Casos
//Buscar el proyecto en una lista vacia
//Buscar y encontrar un proyecto en una lista de 1 proyecto
//Buscar y encontrar un proyecto en una lista de varios proyectos

//Para terminar:
// buscar y encontrar mas de una coindencia de proyectos
// buscar y encontrar proyectos cuyo nombre empieza con el criterio de busqueda
         // por ejm: "ejerc" y en mi lista tengo "ejercio1", "ejercicio2" -> devuelve ambos
// Devuelve "" cuando no existe una coincidencia con ningun proyecto


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

  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    expect (buscarProyecto("proyecto2", proyectos)).toEqual("proyecto2");
  });

  it("encuentra más de un proyecto cuando hay más de una coincidencia en la lista", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto1");
    expect(buscarProyecto("proyecto1", proyectos)).toEqual(["proyecto1", "proyecto1"]);
  });

  it("encuentra proyectos cuyos nombres empiezan con el criterio de búsqueda", () => {
    let proyectos = ["ejercicio1", "ejercicio2", "proyecto1"];
    expect(buscarProyecto("ejerc", proyectos)).toEqual(["ejercicio1", "ejercicio2"]);
  });

  it("devuelve '' cuando no existe coincidencia con ningún proyecto", () => {
    let proyectos = ["proyecto1", "proyecto2", "proyecto3"];
    expect(buscarProyecto("inexistente", proyectos)).toEqual("");
  });
});



  