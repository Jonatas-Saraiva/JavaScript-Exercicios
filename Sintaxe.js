
function Calc(a,b){
    if(!a||!b)return "Defina um numero valido.";
    let soma;
    let maiormenor10="";
    let igual="";
    let maiormenor="";
soma=a+b;

if(a==b){
 igual= " são iguais ";

} else{ 
 igual= " não são iguais ";
}

if(soma>=10){
  maiormenor10= " É maior que 10 ou igual ";
}
else{ 
 maiormenor10= " menor que 10 ";
}
if (soma>=20){
    maiormenor= " ,é maior que 20 ou igual ";
}else{
    maiormenor=  " ,é menor que 20  ";
}

console.log("Os números "+a +" e "+b+igual+" Sua soma é "+soma+" , "+" que "+ maiormenor10+ " e "+ maiormenor);
};



