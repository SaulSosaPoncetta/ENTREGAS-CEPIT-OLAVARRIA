import { libro } from "./libro";

export class Gestorlibro {
    private nombre: string;
    private listaLibros: libro[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.listaLibros = [];
    }


    //Getters
    public getNombre(): string {// validar lo que pasamos en cada get
        return this.nombre;
    }

    public getListaLibros(): libro[] {
        const copiaLibros: libro[] = this.listaLibros.map(lib => ({...lib}) as libro);
        return copiaLibros;
    }

  //Setters
    public setNombre(nombre: string): void {// validar lo que llega en cada set
        this.nombre = nombre;
    }

    public setListaLibros(listaLibros: libro[]): void {
        this.listaLibros = listaLibros;
    }

    public eliminarLibro(libroAEliminar: libro): void{
        if(libroAEliminar != undefined && this.listaLibros.includes(libroAEliminar)) {//verifica que el libro este en el arreglo
            const posLibro: number = this.listaLibros.indexOf(libroAEliminar); //me retorna la posicion del elemento en el arreglo
            this.listaLibros.splice(posLibro, 1);// indico la posicion del elemento a eliminar, y cuantos a partir de el.
        }
    }
    public agregarLibro(nombre: string, autor: string, anio: number): void{
        let nuevoLibro: libro = new libro(nombre,autor,anio); // no olvidar validaciones de los datos ingresados o leidos.
        if(!this.listaLibros.some(lib => lib.getNombre() == nombre && lib.getAutor() == autor && lib.getAnioedicion() == anio)) {
            this.listaLibros.push(nuevoLibro); 
        }
    }
}
