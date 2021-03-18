/*
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

//document.getElementById("demo").innerHTML = `Today is ${day}`;
//document.Write(`Today is ${day}`);
console.log(`Today is ${day}`);
*/
/*
const fruits = prompt("Ingrese el nombre de una fruta");
switch (fruits) {
    case "Banana":
    alert("Hello")
    break;
  
    case "Apple":
    alert("Welcome")
    break; 
       
    default:
    alert("Neither"); 
};
*/
const dia = Number(prompt("Ingrese un número del 0 al 6"));
switch (dia) {
    case 0:
    alert("domingo");
    break;
  case 1:
    alert("lunes");
    break;
  case 2:
    alert("martes");
    break;
  case 3:
    alert("miércoles");
    break;
  case 4:
    alert("jueves");
    break;
  case 5:
    alert("viernes");
    break;
  case  6:
    alert("sábado");
};