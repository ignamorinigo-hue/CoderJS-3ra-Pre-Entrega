# CoderJS - Pre-entrega 3: Funciones

## Tablero de control de notas

Simulador hecho en JavaScript para el curso de JavaScript de Coderhouse.
Calcula el promedio de un alumno y le dice si promocionó, aprobó o tiene que recursar la materia.
En esta entrega el simulador está organizado en funciones declaradas, expresadas y flecha.

## Cómo funciona

1. Pide el nombre del alumno. Si queda vacío, lo vuelve a pedir.
2. Pide 3 notas, una por una. Cada nota tiene que ser un número entre 1 y 10;
   si se ingresa algo inválido (texto, un campo vacío o un número fuera de rango), la vuelve a pedir.
3. Muestra en la consola si cada nota está aprobada (6 o más) o desaprobada.
4. Calcula el promedio y muestra el resultado con un `alert`:
   - **Promedio de 8 o más:** promociona la materia.
   - **Promedio de 6 o más:** aprueba la materia.
   - **Promedio menor a 6:** debe recursar.
5. Pregunta si se quiere cargar otro alumno. Al terminar, muestra el promedio general del curso.

## Funciones

| Función | Tipo | Qué hace |
| --- | --- | --- |
| `pedirNombre(mensaje)` | Declarada | Entrada: pide el nombre del alumno y lo retorna |
| `pedirNota(numero, alumno)` | Expresada | Entrada: pide una nota válida y la retorna |
| `esNotaValida(entrada)` | Flecha | Procesamiento: retorna si la nota ingresada es válida |
| `calcularPromedio(suma, cantidad)` | Flecha | Procesamiento: retorna el promedio |
| `redondear(numero)` | Flecha | Procesamiento: redondea a 2 decimales |
| `quiereContinuar(respuesta)` | Flecha | Procesamiento: retorna si se quiere cargar otro alumno |
| `obtenerCondicion(promedio)` | Declarada | Procesamiento: retorna si promocionó, aprobó o debe recursar |
| `mostrarNota(numero, nota)` | Declarada | Salida: muestra en consola si la nota está aprobada |
| `mostrarResultado(alumno, promedio)` | Declarada | Salida: muestra el resultado en consola y con un `alert` |
| `procesarAlumno(cantidadNotas)` | Declarada | Une todo para un alumno y retorna su promedio |

## Cómo usarlo

1. Abrí `index.html` en el navegador.
2. Completá los datos que se piden en los cuadros de diálogo.
3. Abrí la consola del navegador (F12) para ver el detalle de cada nota.

## Tecnologías

- HTML
- JavaScript
