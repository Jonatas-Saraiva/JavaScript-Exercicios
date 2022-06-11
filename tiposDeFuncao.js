
///função anonima.
let soma = function (a,b){
    return a+b;
}


console.log(soma(5,100))

// função autoinvocavel//
// (function autoinvocavel () {
//     console.log("jonatas")
//    })();
    
//função tradicional.
function soma1(a,b){
    return a+b;
}
//compara um Array ver qual é o maior elemento.
let arr =[1,2,3,4,5,6,7];
function findmax(){
    let max=-1;
    for(let i = 0;i < arguments.length;i++){
     if (arguments[i]>max)
     max=arguments[i];

  
 }
 return max
}

console.log(findmax(2222,444,555))

//utilizando  Spread para lidar com cada elemento de uma array 
let number =[1,2,5]
function vet(a,b,c){
    return a+b+c
}
console.log(vet(...number))

//Utilizando  rest para conferir um tamanho e somar +2
function veta(...numbers){
  console.log(numbers.length+2)
}

veta()
veta(1000,12,4444,555,878,9888)