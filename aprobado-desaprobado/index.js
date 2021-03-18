/* 
Un programa que pida al usuario ingresar 
la nota de un examen y mostrar en un mensaje 
si el examen esta aprobado, si debe recuperar 
o si esta aplazado. Si la nota es igual o mayor a 7 aprueba, 
si es igual o mayor a 4 recupera
y si es menor a 4 es un aplazo.
*/

const nota = Number(prompt("Ingrese la nota de su exámen"));

function condicionAlumno(numero) {
    if (numero >= 7 && numero <= 10) {
        alert("Aprobado");
    } else if (numero >= 4 && numero <= 7) {
        alert("Va a recuperatorio");
    } else if (numero < 4) {
        alert("Desaprobado");
    } else {
        alert("Nota inválida");
    }
} 

condicionAlumno(nota);