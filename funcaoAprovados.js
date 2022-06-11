let alunos = [ {    
    aluno:"Paulo",
    nota:4,
    turma:"1800",
},    
    
{
    aluno:"Joao",
    nota:10,
    turma:"1600",
},
{
    aluno:"Paulo",
    nota:58,
    turma:"1800",
},
{
    aluno:"Jonatas",
    nota:3,
    turma:"1400",
},
{
    aluno:"Glicia",
    nota:11,
    turma:"1400",
},


];
function aprovados (alunos2,media){
    let aluno1=[]
for (let i = 0;i<alunos2.length;i++ ){
   const {nota,aluno }=alunos2[i]
    if (nota>=media)
    aluno1.push(aluno)


}

     return aluno1    
} 
console.log(aprovados(alunos,5))


const pessoa={
  nome: "Glicia",
  idade:15,
  address:"Rua h",
};


const pessoa1 ={
   nome: "João",
    idade:10,
    address:"Rua b",
  };
  const pessoa2 ={
    nome: "Morphy",
    idade:35,
    address:"Rua c",
  };


function calculaIdade(anos) {
    

	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa,100));

console.log(calculaIdade.apply(pessoa1,[100]));