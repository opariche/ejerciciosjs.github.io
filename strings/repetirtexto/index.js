function repetirPalabra(palabra, n) {
    if (n >= 0) {
        return palabra.repeat(n);
    }else{
        throw 'El número de repeticiones debe ser un numero positivo'
    }
}

try {
    console.log(repetirPalabra('oscar pariche', 0));
} catch (e){
    console.log(`Error: ${e}`);
}

