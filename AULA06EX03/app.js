/******************************************************
 * Objetivo: Fazer uma calculadora simples
 * Autora: Bianca Pereira Leão
 * Data: 03/02/2023
 * Versão: 2.0
 ******************************************************/

const { match } = require('assert');
var readline = require('readline');

// import da biblioteca da calculadora
var matematica = require("./modulo/calculo.js");

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor inicial: \n', function (numeroInicial) {
    let valor1 = numeroInicial.replace(',', '.');

    entradaDados.question('Valor final: \n', function (numeroFinal) {
        let valor2 = numeroFinal.replace(',', '.');

        entradaDados.question('Operação: [PAR | IMPAR | AMBOS] \n', function (escolhaDeModo) {
            let operacao = escolhaDeModo.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possivel calcular se algum dado estiver vazio')
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números')
            } else {
            }
            resultado = matematica.calculoParImpar(valor1,valor2,operacao)
            // if(resultado == false && typeof(resultado) == 'boolean') 
            if(resultado === 'boolean') {
                entradaDados.close();
            }else {
                console.log(resultado);
            }
        });
    });
});