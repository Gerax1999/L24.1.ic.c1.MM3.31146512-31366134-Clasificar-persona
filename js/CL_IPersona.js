export default class CL_IPersona {
    leerAnoActual() {
        return prompt ("ingrese el año actual");
    }
    leerAnoNa() {
        return prompt ("ingrese el año de nacimiento");
    }

    reportePersona(e,ce){
        return `
        <br> Edad: ${e}
        <br> Categoría de edad: ${ce}
        `    
    }

}