const seasonYear = prompt("Ingrese una estación del año en minúscula");

/*
function estacionLimites(estacion) {
    if (estacion == "verano") {
        alert(`En el hemisferio sur, la estación ${estacion} comienza el 21 de diciembre y finaliza el 21 de marzo; en el norte, comienza el 21 de junio y finaliza el 21 de septiembre.`);
    } else if (estacion == "otoño") {
        alert(`En el hemisferio sur, la estación ${estacion} comienza el 21 de marzo y finaliza el 21 de junio; en el norte, comienza el 21 de septiembre y finaliza el 21 de diciembre.`);
    } else if (estacion == "invierno") {
        alert(`En el hemisferio sur, la estación ${estacion} comienza el 21 de junio y finaliza el 21 de septiembre; en el norte, comienza el 21 de diciembre y finaliza el 21 de marzo.`);
    } else if (estacion == "primavera") {
        alert(`En el hemisferio sur, la estación ${estacion} comienza el 21 de septiembre y finaliza el 21 de diciembre; en el norte, comienza el 21 de marzo y finaliza el 21 de junio.`);    
    } else {
        alert("La estación no existe");
    }
};

estacionLimites(seasonYear); 
*/

switch (seasonYear) {
    case "verano":
        alert(`En el hemisferio sur, la estación ${seasonYear} comienza el 21 de diciembre y finaliza el 21 de marzo; en el norte, comienza el 21 de junio y finaliza el 21 de septiembre.`);
        break;
    case "otoño":
        alert(`En el hemisferio sur, la estación ${seasonYear} comienza el 21 de marzo y finaliza el 21 de junio; en el norte, comienza el 21 de septiembre y finaliza el 21 de diciembre.`);
        break;
    case "invierno":
        alert(`En el hemisferio sur, la estación ${seasonYear} comienza el 21 de junio y finaliza el 21 de septiembre; en el norte, comienza el 21 de diciembre y finaliza el 21 de marzo.`);
        break;
    case "primavera":
        alert(`En el hemisferio sur, la estación ${seasonYear} comienza el 21 de septiembre y finaliza el 21 de diciembre; en el norte, comienza el 21 de marzo y finaliza el 21 de junio.`);    
        break;
    default:
        alert("La estación no existe");
        break;
}; 