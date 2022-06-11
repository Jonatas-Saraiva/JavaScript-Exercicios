
//solucao 1
function verficaPalindromo (string){
    if(!string) return "palavra inexistente";

   return string.split("").reverse().join("") === string;

}

console.log(verficaPalindromo("ama"))

//solucao 2
function verificaPalindrom1(string1){
    if(!string1)return "palavra inexistente";

for (let i = 0;i<string1.lenght;i++){

       if(string1[i]!==string1[string1.length-1-i]){
           return false

       }
       
}
return true

}
console.log(verificaPalindrom1("omo"))


//checando string com exclamação e caracteres.

function verificaStrings(palavra){
    for(let i = 0;i<palavra.length;i++){
     
   if(palavra[i]==="!") {
    return true
                                                                       
   }  
}
}
    



console.log(verificaStrings("DFGGDGDFDFDFDFDFDFDFDFDFDFDFDF!@"));