function invertirCadena(texto) {
    let resultado = '';

    for(let i = texto.length - 1; i >= 0; --i){
        resultado += texto[i];
    }
    return resultado;
}

console.log(invertirCadena('oscar'));
