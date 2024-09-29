"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestorlibro = void 0;
var libro_1 = require("./libro");
var Gestorlibro = /** @class */ (function () {
    function Gestorlibro(nombre) {
        this.nombre = nombre;
        this.listaLibros = [];
    }
    //Getters
    Gestorlibro.prototype.getNombre = function () {
        return this.nombre;
    };
    Gestorlibro.prototype.getListaLibros = function () {
        var copiaLibros = this.listaLibros.map(function (lib) { return (__assign({}, lib)); });
        return copiaLibros;
    };
    //Setters
    Gestorlibro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Gestorlibro.prototype.setListaLibros = function (listaLibros) {
        this.listaLibros = listaLibros;
    };
    Gestorlibro.prototype.eliminarLibro = function (libroAEliminar) {
        if (libroAEliminar != undefined && this.listaLibros.includes(libroAEliminar)) { //verifica que el libro este en el arreglo
            var posLibro = this.listaLibros.indexOf(libroAEliminar); //me retorna la posicion del elemento en el arreglo
            this.listaLibros.splice(posLibro, 1); // indico la posicion del elemento a eliminar, y cuantos a partir de el.
        }
    };
    Gestorlibro.prototype.agregarLibro = function (nombre, autor, anio) {
        var nuevoLibro = new libro_1.libro(nombre, autor, anio); // no olvidar validaciones de los datos ingresados o leidos.
        if (!this.listaLibros.some(function (lib) { return lib.getNombre() == nombre && lib.getAutor() == autor && lib.getAnioedicion() == anio; })) {
            this.listaLibros.push(nuevoLibro);
        }
    };
    return Gestorlibro;
}());
exports.Gestorlibro = Gestorlibro;
