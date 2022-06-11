function getAdmin(map){
    let Admin=[]; let users=[];
    for( [key, value] of map){
      
        if(value === "Admin"){
          Admin.push(key);} 
         
    }
return Admin
}
const user = new Map();

user.set("Jonatas","Admin");
user.set("Glicia","Admin");
user.set("Morphy","Admin");
user.set("Strikerman","Admin");
user.set("Darkus","User");
user.set("Argus","User");
user.set("Salazar","Admin");

console.log( getAdmin(user) );


