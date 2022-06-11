let array = [5,2,3,4,10];
let arrayNumeber = [0,1,6];
let vetor = [1,2,6,3];
let vetor1 = [000,11111];
array.shift();
array.push(arrayNumeber)
array.unshift(vetor)
console.log(array+vetor);
array.pop(vetor1);
array.shift();

for (let index = 0; index < array.length; index++) {
let number = array[index]*5;
console.log("numero multiplicados:5 = "+number)

}

console.log(array);