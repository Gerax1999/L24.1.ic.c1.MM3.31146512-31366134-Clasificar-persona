/* de una persona se conoce su año de nacimiento y el año actual.
*tambien se tiene una categoria segun la edad de la persona (0-12: niño, 13-19:adolescente,20-39:adulto joven ,
*40-59:adulto medio, 60+:persona mayor )
El programa debe mostrar la edad de la persona y su categoria.*/
import CL_Persona from "./CL_Persona.js";
import CL_IPersona from "./CL_IPersona.js";

let iper = new CL_IPersona(),
    aa= iper.leerAnoActual(),
    an= iper.leerAnoNa(),

    per = new CL_Persona(aa,an),
    salida = document.getElementById("salida");

    salida.innerHTML = iper.reportePersona(per.CalcularEdad(),per.categoriaEdad());
    
    