const letra = prompt("Ingrese una letra, ya sea vocal o consonante.");

const grupoDeLetras = (caracter) => {
    if (caracter == "a" || caracter == "A" || 
        caracter == "e" || caracter == "E" ||
        caracter == "i" || caracter == "I" ||
        caracter == "o" || caracter == "O" ||
        caracter == "u" || caracter == "U") {
        alert(`${caracter} pertenece al grupo A`);
    } else if (caracter == "b" || caracter == "B" || 
                caracter == "c" || caracter == "C" ||
                caracter == "d" || caracter == "D" ||
                caracter == "f" || caracter == "F" ||
                caracter == "g" || caracter == "G") {
            alert(`${caracter} pertenece al grupo B`);

    } else if (caracter == "h" || caracter == "H" || 
                caracter == "j" || caracter == "J" ||
                caracter == "k" || caracter == "K" ||
                caracter == "l" || caracter == "L" ||
                caracter == "m" || caracter == "M") {
            alert(`${caracter} pertenece al grupo C`);
    } else if (caracter == "n" || caracter == "N" || 
                caracter == "p" || caracter == "P" ||
                caracter == "q" || caracter == "Q" ||
                caracter == "r" || caracter == "R") {
            alert(`${caracter} pertenece al grupo D`);
    } else if (caracter == "s" || caracter == "S" || 
                caracter == "t" || caracter == "T" ||
                caracter == "v" || caracter == "V" ||
                caracter == "w" || caracter == "W" ||
                caracter == "x" || caracter == "X" ||
                caracter == "y" || caracter == "Y" ||
                caracter == "z" || caracter == "Z") {
            alert(`${caracter} pertenece al grupo E`);
    } else {
        alert(`El ${caracter} no pertenece a ningún grupo.`);
    }
};
grupoDeLetras(letra);