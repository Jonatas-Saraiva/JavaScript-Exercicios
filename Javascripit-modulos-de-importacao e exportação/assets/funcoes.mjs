function mostraIdade (nome,idade){
   if (!nome&&idade) throw "Envie nome e cidade!! "
   return `A idade de ${nome} é ${idade}`;
   
}



function mostrarCidade (nome,cidade){
    if(!cidade) throw "Envie a cidade!!";
    return `A cidade de ${nome} é ${cidade} `;

}


function mostrarHobby(nome,hobby){
    if (!hobby) throw "Envie o Hobby!!"
    return `O hobby de ${nome} é ${hobby}`;
}
export {mostraIdade,mostrarHobby,mostrarCidade}