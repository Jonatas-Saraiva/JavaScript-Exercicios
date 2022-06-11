const btn= document.getElementById("send");
const sub_=document.getElementById("tarefa_");
/*<input type="checkbox" name="tarefa" id="cafe_"></input>*/
sub_.onsubmit=function(t) {
    t.preventDefault();
    const capturar = document.getElementById("tarefa");
    addtarefa(capturar.value);
   sub_.reset();

};
/*<input type="submit" id="send" value="Enviar"></input>*/


function addtarefa(description) {
    const tarefa = document.createElement('div');
    const saida = document.createElement('input');
    const tarefalabel = document.createElement('label');
    const node = document.createTextNode(description);

    saida.setAttribute('type', 'checkbox');
    saida.setAttribute('name', description);
    saida.setAttribute('id', description);

    tarefalabel.setAttribute('for', description);
    tarefalabel.appendChild(node);

    tarefa.classList.add('tarefa');
    tarefa.appendChild(saida);
    tarefa.appendChild(tarefalabel);

    tarefas.appendChild(tarefa);
};