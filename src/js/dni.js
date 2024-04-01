function validarDNI(dni) {
    let dniRegExp = /^\d{8}[a-zA-Z]$/;

    if (!dniRegExp.test(dni)) {
        return 'Formato Incorrecto';
    }

    let dniNumero = dni.substring(0, 8);
    let dniLetra = dni.substring(8).toUpperCase();

    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let letraEsperada = letras.charAt(dniNumero % 23);

    if (dniLetra !== letraEsperada) {
        return 'Letra de DNI INCORRECTA'; 
    }

    return "DNI: "+dni+" es correcto";
}


let dni1 = '12345678Z';
let dni2 = '98765432A';

console.log(validarDNI(dni1)); 
console.log(validarDNI(dni2));

module.exports ={validarDNI}