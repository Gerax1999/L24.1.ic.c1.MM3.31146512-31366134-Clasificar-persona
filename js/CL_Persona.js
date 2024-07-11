export default class CL_Persona {
    constructor(anoActual, anoNa) {
        this.anoActual = anoActual;
        this.anoNa = anoNa;
    }

    set anoActual(aa) {
        this._anoActual = +aa;
    }
    get anoActual() {
        return this._anoActual;
    }

    set AnoNa(an) {
        this._anoNa = +an;
    }
    get AnoNa() {
        return this._anoNa;
    }

    CalcularEdad() {
        return this.anoActual - this.anoNa;
    }

    categoriaEdad() {
        let edad = this.CalcularEdad(); 
        if (edad >= 0 && edad <= 13) {
            return "Niño";
        } else if (edad > 13 && edad <= 20) {
            return "Adolescente";
        } else if (edad > 20 && edad <= 40) {
            return "Adulto joven";
        } else if (edad > 40 && edad <= 60) {
            return "Adulto medio";
        } else if (edad > 60) {
            return "Persona mayor";
        }
    }
}
