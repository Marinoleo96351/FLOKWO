// Uma função é um bloco de código com nome que você pode "chamar" quando quiser.
// Pensa numa receita: você escreve uma vez, e usa toda vez que precisar.

// Esta função recebe um "ingrediente" (chamado parâmetro): o nome da tarefa.
// E devolve (return) uma frase pronta.
function criarTarefa(nome) {
  return "Tarefa criada: " + nome;
}

// "Chamar" a função é usá-la. O que está dentro dos parênteses
// é o valor real que vai no lugar do parâmetro 'nome'.
const tarefa1 = criarTarefa("Estudar JavaScript");
const tarefa2 = criarTarefa("Configurar o backend");

console.log(tarefa1);
console.log(tarefa2);

// Funções podem receber mais de um parâmetro e fazer contas.
// Esta calcula o XP com base em quantas tarefas você concluiu.
function calcularXP(quantidadeTarefas, xpPorTarefa) {
  return quantidadeTarefas * xpPorTarefa;
}

const meuXP = calcularXP(5, 10);
console.log("Você ganhou", meuXP, "de XP");