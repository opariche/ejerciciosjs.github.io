let numeros = [2, 3, 5, 7, 11];

let iterador = numeros[Symbol.iterator]();

let iteracion = iterador.next();

while(!iteracion.done){
        
    let valor = iteracion.value;

    console.log((valor)*2);

    iteracion = iterador.next();
}