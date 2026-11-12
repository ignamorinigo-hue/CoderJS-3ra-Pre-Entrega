const CANTIDAD_NOTAS = 3;
const NOTA_MINIMA = 1;
const NOTA_MAXIMA = 10;
const NOTA_APROBACION = 6;
const NOTA_PROMOCION = 8;


const esNotaValida = (entrada) =>
    entrada !== null &&
    entrada.trim() !== "" &&
    !isNaN(Number(entrada)) &&
    Number(entrada) >= NOTA_MINIMA &&
    Number(entrada) <= NOTA_MAXIMA;

const calcularPromedio = (suma, cantidad) => suma / cantidad;

const redondear = (numero) => Math.round(numero * 100) / 100;

const quiereContinuar = (respuesta) =>
    respuesta !== null && (respuesta.trim().toLowerCase() === "si" || respuesta.trim().toLowerCase() === "sí");


function pedirNombre(mensaje) {
    let nombre = prompt(mensaje);
    while (nombre === null || nombre.trim() === "") {
        alert("El nombre no puede estar vacío.");
        nombre = prompt(mensaje);
    }
    return nombre.trim();
}

const pedirNota = function (numero, alumno) {
    let entrada = prompt("Ingresa la nota " + numero + " del alumno " + alumno);
    while (!esNotaValida(entrada)) {
        alert("Nota inválida. Ingresá un número entre " + NOTA_MINIMA + " y " + NOTA_MAXIMA + ".");
        entrada = prompt("Ingresa la nota " + numero + " del alumno " + alumno);
    }
    return Number(entrada);
};



function obtenerCondicion(promedio) {
    if (promedio >= NOTA_PROMOCION) {
        return "promocionó la materia";
    } else if (promedio >= NOTA_APROBACION) {
        return "aprobó la materia";
    } else {
        return "debe recursar la materia";
    }
}


function mostrarNota(numero, nota) {
    if (nota >= NOTA_APROBACION) {
        console.log("Nota " + numero + ": " + nota + " - Aprobado");
    } else {
        console.log("Nota " + numero + ": " + nota + " - Desaprobado");
    }
}

function mostrarResultado(alumno, promedio) {
    const condicion = obtenerCondicion(promedio);
    console.log("El promedio del alumno " + alumno + " es: " + promedio + " (" + condicion + ")");
    alert(alumno + " " + condicion + " con un promedio de: " + promedio);
}


function procesarAlumno(cantidadNotas) {
    const alumno = pedirNombre("Ingrese el nombre del alumno");
    let suma = 0;

    console.log("--- Notas de " + alumno + " ---");
    for (let i = 1; i <= cantidadNotas; i++) {
        const nota = pedirNota(i, alumno);
        mostrarNota(i, nota);
        suma = suma + nota;
    }

    const promedio = redondear(calcularPromedio(suma, cantidadNotas));
    mostrarResultado(alumno, promedio);
    return promedio;
}

let cantidadAlumnos = 0;
let sumaPromedios = 0;
let seguir = true;

while (seguir) {
    sumaPromedios = sumaPromedios + procesarAlumno(CANTIDAD_NOTAS);
    cantidadAlumnos++;
    seguir = quiereContinuar(prompt("¿Querés cargar otro alumno? (si / no)"));
}

const promedioCurso = redondear(calcularPromedio(sumaPromedios, cantidadAlumnos));
console.log("Alumnos cargados: " + cantidadAlumnos + ". Promedio general del curso: " + promedioCurso);
alert("Fin del simulador. Se cargaron " + cantidadAlumnos + " alumnos con un promedio general de " + promedioCurso + ".");
