const mes = prompt("Ingrese un mes del año en minúscula");

function diasMes(month) {
    if (month == "febrero") {
        alert("Este mes tiene 28/29 días");
    } else if (month == "abril" || month == "junio" 
                || month == "septiembre" || month == "noviembre") {
        alert(`El mes de ${month} tiene 30 días`);

    } else if (month == "enero" || month == "marzo" || month == "mayo"
                || month == "julio" || month == "agosto" 
                || month == "octubre" || month == "diciembre") {
        alert(`El mes de ${month} tiene 31 días`);
    } else {
        alert(`El mes de ${month} no existe`);
    }
};

diasMes(mes);