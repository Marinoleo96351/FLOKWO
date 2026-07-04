function buscarTarefaNoBanco() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["Estudar JavaScript", "Configurar o back-end"]);
        }, 2000);
    });
}

async function mostrarTarefas() {
    console.log("Buscando tarefa... (aguarde 2 segundos)");

    const tarefa = await buscarTarefaNoBanco();

    console.log("Tarefa encontrada:", tarefa);
}

mostrarTarefas();