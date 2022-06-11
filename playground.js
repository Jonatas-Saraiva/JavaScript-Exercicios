let array = [1,3,4,5,6,7,8,9,10,11,12,13,14]
let apple = {
  value:5,
}
let orange = {
    value:30,
  }
//utilizando metodo Map com this....
function comThis(arr,thisArg){
    
 return arr.map(function (item)    {
     return item *this.value ;
 },thisArg)

}

console.log(comThis(array,apple))

console.log(comThis(array,orange))


//utilizando metodo Map sem this....
function semThis(arr){
    
   return arr.map((item) => { return item*2 ;})
    
   }

   console.log ("sem this")
   console.log(semThis(array))


//utilizando metodo filter para retornar os numeros pares.
   function filtered (arr){
       return arr%2===0;
   }

   console.log("Elemento pares são",array.filter(filtered));

let items =[{
    nome:"Sabão em po",
    preco: 40,
},
{ 
    nome: "Cafê",
    preco:20,
},
{
    nome:"Pão",
    preco:5,
},];

//utilizando reduce para calcucular saldo disponivel.
const saldo =100;
function calculaSaldo(saldoDisponivel,arr){
   
    return arr.reduce((prev,current)=>{
        console.log({prev})
        console.log({current})
        return prev-current.preco
    },saldoDisponivel) ;
}
console.log(calculaSaldo(saldo,items))





//utilizando reduce para somar items....

function somaTudo(arr,item){
    console.log({item});
    console.log({arr});
    return  item+arr ;
}
console.log("total é", array.reduce(somaTudo,0))