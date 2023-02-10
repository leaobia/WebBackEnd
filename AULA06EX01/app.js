/******************************************************
 * Objetivo: Fazer a entrada de dados da média
 * Autora: Bianca Pereira Leão
 * Data: 10/02/2023
 * Versão: 1.0
 ******************************************************/

const { match } = require('assert');
var readline = require('readline');

// import da biblioteca da tabuada
var mediaNotas = require("./modulo/media.js");

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite seu nome: \n', function (nomeDoAluno) {
   let nomeAluno = nomeDoAluno;

    entradaDados.question('Digite sua série: \n', function (serie) {
        let serieDoAluno = serie;

        entradaDados.question('Digite a disciplina: \n', function (disciplina) {
            let disciplinaDoAluno = disciplina;

            entradaDados.question('Digite seu curso: \n', function (curso) {
                let cursoDoAluno = curso;

                entradaDados.question('Digite o nome do seu professor: \n', function (professor) {
                  let  professorDoAluno = professor;

                    entradaDados.question('Digite seu genero: \n', function (sexo) {
                        let sexoAluno = mediaNotas.coletarDados(sexo);

                        entradaDados.question('Digite sua nota 1: \n', function (nota1) {
                            let valor1 = nota1;

                            entradaDados.question('Digite a nota 2: \n', function (nota2) {
                                let valor2 = nota2;

                                entradaDados.question('Digite a nota 3: \n', function (nota3) {
                                    let valor3 = nota3;

                                    entradaDados.question('Digite a nota 4: \n', function (nota4) {
                                        let valor4 = nota4;

                                        let media = mediaNotas.calcularMedia(valor1,valor2,valor3,valor4)

                                        if(media == 'Exame' ){
                                            entradaDados.question('Digite a nota do seu exame: \n', function(valor1,valor2, valor3,valor4, notaExame){
                                                let valor5 = notaExame;
                                            })
                                        }

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})