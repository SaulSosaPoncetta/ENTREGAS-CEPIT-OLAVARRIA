// Cuando la clase se va a utilizar en otros archivos siempre se exporta en las primeras lineas.
export class libro {
    private nombre: string;
    private autor: string;
    private anioedicion: number;

    constructor(_nombre: string, _autor: string, _anioedicion: number) {
        this.nombre = _nombre;
        this.autor = _autor;
        this.anioedicion = _anioedicion;
    }

    //Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getAnioedicion(): number {
        return this.anioedicion;
    }

    //Setters
    public setNombre(nombre: string) : void {
        // if (nombre != undefined && nombre.length > 5) bla bla bla sino no actualizo ... VALIDACION DE CONTENIDO DE CAMPO
        this.nombre = nombre;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public setAnioedicion(anioedicion: number): void {
        this.anioedicion = anioedicion;
    }
}

