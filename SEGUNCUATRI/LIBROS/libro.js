"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libro = void 0;
// Cuando la clase se va a utilizar en otros archivos siempre se exporta en las primeras lineas.
var libro = /** @class */ (function () {
    function libro(_nombre, _autor, _anioedicion) {
        this.nombre = _nombre;
        this.autor = _autor;
        this.anioedicion = _anioedicion;
    }
    //Getters
    libro.prototype.getNombre = function () {
        return this.nombre;
    };
    libro.prototype.getAutor = function () {
        return this.autor;
    };
    libro.prototype.getAnioedicion = function () {
        return this.anioedicion;
    };
    //Setters
    libro.prototype.setNombre = function (nombre) {
        // if (nombre != undefined && nombre.length > 5) bla bla bla sino no actualizo ... VALIDACION DE CONTENIDO DE CAMPO
        this.nombre = nombre;
    };
    libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    libro.prototype.setAnioedicion = function (anioedicion) {
        this.anioedicion = anioedicion;
    };
    return libro;
}());
exports.libro = libro;
