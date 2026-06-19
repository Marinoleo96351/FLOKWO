const tarefas = [
    { titulo: "Estudar JavaScript", prioridade: "alta", concluida: true},
    { titulo: "Configurar o backend", prioridade: "media", concluida: false},
    { titulo: "Desenhar o board", prioridade: "baixa", concluida: false},
    { titulo: "Criar a loja", prioridade: "alta", concluida: true}

];

const concluidas = tarefas.filter(function(tarefa) {
    return tarefa.concluida === true;

});

console.log("Tarefas concluídas:", concluidas.length);
console.log(concluidas);

const titulos = tarefas.map(function(tarefa){
    return tarefa.titulo;

});

console.log("Só os títulos:", titulos);