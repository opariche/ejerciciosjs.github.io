function minMax(arr){
    let min = arr[0]
    let max = arr[0]
    for(let i =0; i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return (max)

}

console.log(minMax([20,4,5,30,2,200]))
