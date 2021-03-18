const operation = Number(prompt("Elija la operación matemática que desee realizar, con un número: 1) suma, 2) resta, 3) multiplicación o 4) división."));

/* const suma = (num1, num2) => {
    num1 = Number(prompt("Elija el primer número"));
    num2 = Number(prompt("Elija el segundo número"));
    return num1 + num2;
}; */
const suma = () => Number(prompt("Elija el primer número")) + Number(prompt("Elija el segundo número"));
const resta = () => Number(prompt("Elija el primer número")) - Number(prompt("Elija el segundo número"));
const multiplication = () => Number(prompt("Elija el primer número")) * Number(prompt("Elija el segundo número"));
const division = () => Number(prompt("Elija el primer número")) / Number(prompt("Elija el segundo número"));
/*
function suma(num1, num2) {
        num1 = Number(prompt("Elija el primer número")),
        num2 = Number(prompt("Elija el segundo número")),
        calcular = num1 + num2;
    return calcular; 
};

function resta(num1, num2) {
        num1 = Number(prompt("Elija el primer número")),
        num2 = Number(prompt("Elija el segundo número")),
        calcular = num1 - num2;
    return calcular; 
};

function multiplication(num1, num2) {
        num1 = Number(prompt("Elija el primer número")),
        num2 = prompt("Elija el segundo número"),
        calcular = num1 * num2;
    return calcular; 
};

function division(num1, num2) {
        num1 = Number(prompt("Elija el primer número")),
        num2 = Number(prompt("Elija el segundo número")),
        calcular = num1 / num2;
    return calcular; 
};
*/
switch (operation) {
    case 1:
        alert(suma());
        break;
    case 2:
        alert(resta());
        break;
    case 3:
        alert(multiplication());
        break;
    case 4:
        alert(division());
        break;
    default:
        alert("Opción inválida");
        break;
};



