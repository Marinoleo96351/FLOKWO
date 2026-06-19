// Um array é uma lista, escrita entre colchetes [ ].
// Esta é uma lista simples de textos:
const prioridades = ["baixa", "media", "alta"];

// Cada item tem uma POSIÇÃO, chamada índice. A contagem começa em ZERO.
// Então: posição 0 = "baixa", posição 1 = "media", posição 2 = "alta".
console.log("Primeira prioridade:", prioridades[0]);
console.log("Terceira prioridade:", prioridades[2]);

// .length diz quantos itens a lista tem.
console.log("Quantas prioridades existem?", prioridades.length);

// O mais útil pro seu projeto: uma lista de OBJETOS.
// Aqui está sua lista de tarefas do FLOKWO:
const tarefas = [
  { titulo: "Estudar JavaScript", prioridade: "alta", concluida: true },
  { titulo: "Configurar o backend", prioridade: "media", concluida: false },
  { titulo: "Desenhar o board", prioridade: "baixa", concluida: false }
];

console.log("Total de tarefas:", tarefas.length);

// Para pegar uma tarefa específica, use o índice e depois o ponto:
console.log("Título da primeira tarefa:", tarefas[0].titulo);

// Adicionar uma nova tarefa ao fim da lista com .push()
tarefas.push({ titulo: "Criar a loja", prioridade: "media", concluida: false });
console.log("Total depois de adicionar:", tarefas.length);