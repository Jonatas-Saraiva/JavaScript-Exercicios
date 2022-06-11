var currentnumberwrapper=document.getElementById("currentnumber")
var currentnumber=0;

function increment(){
currentnumber++;
currentnumberwrapper.innerHTML=currentnumber;
if(currentnumber===15){
currentnumber=0
 }
}

function decrement(){
    currentnumberwrapper.innerHTML=currentnumber;
    currentnumber=currentnumber-1;
  if(currentnumber===-15)[
  currentnumber=0

  ]
    
    }


 














/*function returnnumber(array) {
let number=[];
    for(let i =0;i<array.length;i++){
        if(array[i] % 2===0){           
            number.push(array[i]);
        
        
        }

    }

console.log(number);
}
   
let array=[1,2,3,4,5,6,5,71,477,8885,22222,5544,66698878,223655,3223,669887,222,5588];

returnnumber(array);

console.log("Hello Word");*/