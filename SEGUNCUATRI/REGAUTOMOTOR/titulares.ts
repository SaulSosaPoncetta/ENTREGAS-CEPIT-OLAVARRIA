export class Titular {
    private nombre: string;
    private dni: number;

    constructor(nombre: string, dni: number) {
        this.nombre = nombre;
        this.dni = dni;
    }

    getNombre(): string {
        return this.nombre;
    }

    estaHabilitado(): boolean {
        if (this.dni >= 7) {
            return true;
        } else {
            return false;
        }
    }

    getDni(): number {
        return this.dni;
    }
}