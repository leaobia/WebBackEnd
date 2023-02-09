/******************************************************
 * Objetivo: Fazer a entrada de dados da tabuada.js
 * Autora: Bianca Pereira Leão
 * Data: 09/02/2023
 * Versão: 1.0
 ******************************************************/

const { match } = require('assert');
var readline = require('readline');

// import da biblioteca da tabuada
var matematica = require("./modulo/tabuada.js");

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor:\n', function(multiplicando){
    let tabuada = multiplicando;

    entradaDados.question('Valor:\n', function(maxMultiplicador){
        let maxContador= maxMultiplicador;
        let resultado = matematica.calcularTabuada(tabuada, maxContador)

        if(tabuada == '' | maxContador == ''){
            console.log('ERRO: Entradas vazias')
        }else if(isNaN(tabuada) | isNaN(maxContador)){
            console.log('ERRO: digite apenas números')
        }else{
            console.log(resultado);
        }  
    });
});
