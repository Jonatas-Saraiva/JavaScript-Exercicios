let arr =[0,1,2,3,4,5,7,]
let teste ="";

let myTypeErro= new TypeError("Não corresponde a uma Array ou um Objeto ");

function checkDebug(array,number){
    try {
        if(!array && !number) throw new ReferenceError("envie os parametros");   
    
        if (typeof array !== "Object")throw new TypeError ("Não é uma array ");  
     
        if (typeof number !== "Number")throw new TypeError ("Envie um numero");
      
   return array;
    } 

    catch (error) {
        if (error instanceof ReferenceError){
          console.log("Esse erro é um ReferenceError");
          console.log(error);
        }
        if (error instanceof TypeError){
            console.log("Esse erro é um TypeErro");
            console.log (error);
        }
        if (error instanceof RangeError){
            console.log("Esse erro é um RangeError");
            console.log (error);
        } 
    }
 }




console.log(checkDebug([2,1,4,85],teste));

