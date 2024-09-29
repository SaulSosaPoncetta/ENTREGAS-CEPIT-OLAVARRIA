import { libro } from "./libro";
import { Gestorlibro } from "./gestorlibros";

//let Aventuras: libro = new libro("Cinco Semanas En Globo", "Julio Verne", 1942);

let Biblioteca1: Gestorlibro = new Gestorlibro("Biblioteca Collinet" );

Biblioteca1.agregarLibro("5 semanas globo", "julio verne", 1942);

console.log(Biblioteca1.getListaLibros());