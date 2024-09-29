import { Auto } from "./auto";
import { Titular } from "./titulares";

export class Registro {
    private nombre: string;
    private Autos: Auto[];
    private Titulares: Titular[];

    constructor(nombre: string, listaDeAutos?: Auto[], listaDeTitulares?: Titular[]) {
        this.nombre = nombre;

        if (listaDeAutos != undefined) {
            this.Autos = listaDeAutos;
        } else {
            this.Autos = [];
        }

        if (listaDeTitulares != undefined) {
            this.Titulares = listaDeTitulares;
        } else {
            this.Titulares = [];
        }
    }

    getNombre(): string {
        return this.nombre;
    }

    //para agregar un titular a la escuela, se pasa por parametro y se pushea al arreglo
    altaAuto(titular: Auto): void {
        this.Autos.push(titular); //metodo push agrega al final del arreglo lo que yo seleccione
    }
    //para agregar un registro a la escuela, se pasa por parametro y se pushea al arreglo
    altaTitular(registro: Titular): void {
        this.Titulares.push(registro);
    }

    bajaAuto(nombre: string): void {
        this.Autos = this.Autos.filter(titular => titular.getModelo() !== nombre); //filter revisa el arreglo uno a uno y los que no coinciden se genera un nuevo array, cuando encuentra no lo guarda por ende borra el dato
    }

    bajaTitular(nombre: string): void {
        this.Titulares = this.Titulares.filter(registro => registro.getNombre() !== nombre);//filter revisa el arreglo uno a uno y los que no coinciden se genera un nuevo array, cuando encuentra no lo guarda por ende borra el dato
    }

    obtenerAutos(): Auto[] {
        return this.Autos;
    }
    obtenerTitulares(): Titular[] {
        return this.Titulares;
    }
}