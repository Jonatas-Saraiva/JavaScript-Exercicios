let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function retornaSetArrays(arr){
    let myNewArray=new Set(arr);
    return [...myNewArray];
}

console.log(retornaSetArrays(array))