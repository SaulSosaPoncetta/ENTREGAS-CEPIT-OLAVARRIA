"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gestorlibros_1 = require("./gestorlibros");
//let Aventuras: libro = new libro("Cinco Semanas En Globo", "Julio Verne", 1942);
var Biblioteca1 = new gestorlibros_1.Gestorlibro("Biblioteca Collinet");
Biblioteca1.agregarLibro("5 semanas globo", "julio verne", 1942);
console.log(Biblioteca1.getListaLibros());
