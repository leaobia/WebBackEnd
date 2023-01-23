// Comentário em linha

/*
Comentário
 em 
 bloco
*/
console.log('testando node.js');

// Importando uma biblioteca e guardando numa variavel que permite entrada de dados via teclado

var readline = require('readline');

// CreateInterface é como um método
// Criamos um objeto ou variável que vai ser especialista na entrada de dados

var enterData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// CallBack - Uma função de callback permite que na propia linha de 
// programação seja uma variavel, um processamento, a chamada de um metodo possa acontecer
//um retorno de dados automaticamente, sem precisar sair desse processamento.

// question é um metodo em que se resgata oq tem dentro dele
// Cria uma interação com o usuário para entrada de dados
// Após o usuário digitar o conteudo, o objeto enterdata permite
// retornar o conteúdo digitado para ser utilizado através de uma função callback

enterData.question('Favor digitar seu nome: \n', function(nome) {
    console.log('Bem vindo, ' + nome + ' ao servidor node.js!');
});
