const array = [1,2,3,4,5];

function sumaArr(array){
    let result = 0;
    for(let num of array){
        result += num;
    }
    return result
}

console.log(sumaArr(array));