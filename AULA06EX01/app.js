/******************************************************
 * Objetivo: Fazer a entrada de dados da média
 * Autora: Bianca Pereira Leão
 * Data: 10/02/2023
 * Versão: 1.0
 ******************************************************/

const { match } = require('assert');
var readline = require('readline');

// import da biblioteca da média
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

                entradaDados.question('Digite o nome do seu professor:[MARCEL | LEONID | CELSO | BIANCA] \n', function (professor) {
                    let professorDoAluno = professor.toUpperCase();

                    if(professorDoAluno == 'MARCEL' | 'LEONID' | 'CELSO'){
                        let generoProf = 'MASCULINO'
                        mediaNotas.coletarDados(generoProf)
                    }else{
                        let generoProf = 'FEMININO'
                        mediaNotas.coletarDados(generoProf)
                    }

                    entradaDados.question('Digite seu genero: [MASCULINO | FEMININO]\n', function (sexo) {
                        let genero = sexo.toUpperCase();

                        if(genero == 'MASCULINO'){
                            mediaNotas.coletarDados(genero)
                        }else if(genero == 'FEMININO'){
                            mediaNotas.coletarDados(genero)
                        }else{
                            
                            entradaDados.close();
                        }

                        entradaDados.question('Digite sua nota 1: \n', function (nota1) {
                            let valor1 = nota1;

                            entradaDados.question('Digite a nota 2: \n', function (nota2) {
                                let valor2 = nota2;

                                entradaDados.question('Digite a nota 3: \n', function (nota3) {
                                    let valor3 = nota3;

                                    entradaDados.question('Digite a nota 4: \n', function (nota4) {
                                        let valor4 = nota4;

                                        let media = mediaNotas.calcularMedia(valor1, valor2, valor3, valor4)

                                        let resultado = media[1]


                                        //console.log(media)


                                        if (media[0] == 'Aprovado') {
                                            console.log('O aluno ' + nomeAluno + ' foi aprovado na disciplina ' + disciplina+'.\n' + 
                                            'Curso: ' + curso + '\n' +
                                            'Professor: ' + professor + '\n' +
                                            'Notas do aluno: ' + valor1 +','+ valor2 +','+ valor3 +',' + valor4 + '\n' +
                                            'Média final: ' + resultado
                                            )
                                        } else if (media[0] == 'Reprovado') {
                                            console.log('Reprovado de primeira')
                                        } else {
                                            entradaDados.question('Digite a nota do exame: \n', function (notaExame) {
                                                let notaDoExame = notaExame;

                                                let mediaDoExame = mediaNotas.exameNota(resultado, notaDoExame)

                                                if(mediaDoExame[0] == 'Aprovado'){
                                                    console.log('Aprovado pelo exame')
                                                }else{
                                                    console.log('Reprovado pelo exame')
                                                }
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