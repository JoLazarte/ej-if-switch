const bornYear = prompt("Ingrese su año de nacimiento");

function generation(year) {
    if (year >= 1946 && year <= 1964) {
        alert("Pertenece a la generación Baby Boomer");
    } else if (year >= 1965 && year <= 1980) {
        alert("Pertenece a la generación X");
    } else if (year >= 1981 && year <= 1996) {
        alert("Pertenece a la genración Milénica");
    } else if (year >= 1997 && year <= 2012) {
        alert("Pertenece a la generación Z");
    } else if (year >= 2013 && year <= 2020) {
        alert("Pertenece a la generación Alfa");
    } else {
        alert("No hay datos");
    }
};

generation(bornYear);