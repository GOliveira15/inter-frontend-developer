var list = [];
var atividade;

function adicionar(){
    atividade = document.getElementById('tarefa').value;
    list.push(atividade);
}

function exibir(lista){
    for (let i = 0; i < list.length; i++){
        document.getElementById('exibir').innerHTML += `<input type="checkbox" id="atividade" name="atividade"><label for="atividade">${list[i]}</label><br>`;
    }
}

document.getElementById('exibir').innerHTML(exibir(list));