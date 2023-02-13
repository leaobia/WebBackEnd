/******************************************************
 * Objetivo: Fazer a entrada de dados da tabuda
 * Autora: Bianca Pereira Leão
 * Data: 13/02/2023
 * Versão: 2.0
 ******************************************************/

const { match } = require('assert');
var readline = require('readline');

// import da biblioteca da média
var matematica = require("./modulo/tabuadas.js");

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Minimo multiplicando: \n', function (multiplicandoInicial) {
    let valor1 = multiplicandoInicial.replace(',', '.');

    entradaDados.question('Máximo multiplicando: \n', function (multiplicandoFinal) {
        let valor2 = multiplicandoFinal.replace(',', '.');

        entradaDados.question('Minimo multiplicador: \n', function (multiplicadorInicial) {
            let valorMultiplicador1 = multiplicadorInicial.replace(',', '.')

            entradaDados.question('Máximo multiplicador: \n', function (multiplicadorFinal) {
                let valormultiplicador2 = multiplicadorFinal.replace(',', '.')

                let resultado;


                resultado = matematica.calcularTabuada(valor1, valor2, valorMultiplicador1, valormultiplicador2)
                console.log(resultado);
                entradaDados.close();
            });
        });
    });
});