import { Auto } from "./auto";
import { Titular } from "./titulares";
import { Registro } from "./registro";

//Crear Autos
const auto1 = new Auto("Ford Falcon", 1975);
const auto2 = new Auto("Fiat uno", 1994);
const auto3 = new Auto("Chevrolet Corsa", 2000);

//Crear Registros
const registro1 = new Registro("Seccional 1");
const registro2 = new Registro("Seccional 2");

//Autos asignados a un registro
registro1.altaAuto(auto1);
registro1.altaAuto(auto2);

registro2.altaAuto(auto3);

//contratar registros
registro1.altaTitular(registro1);
registro1.altaTitular(registro2);

//verificar si Auto esta aprobado
//console.log(`${auto1.getNombre()}Esta aprobado: ${auto1.estaAprobado()}, su nota es ${auto1.getNota()}`);

//console.log(`${auto2.getNombre()}Esta aprobado: ${auto2.estaAprobado()}`);

// ver lista de Autos del registro.
console.log("Autos del registro: ", registro1.obtenerAutos().map(Auto => Auto.getModelo()));

//desvincular un Auto del registro.
//registro1.bajaAuto("Fiat Uno");
//console.log("Autos del registro despues del borrado: ", registro1.obtenerAutos().map(Auto => Auto.getNombre()));

//Desvincular a un registro.
//registro1.bajaRegistro("#");
//console.log("Registros de Olavarria actuales: ", registro1.obtenerRegistro().map(Titular => Titular.getNombre()));
