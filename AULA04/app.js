/******************************************************
 * Objetivo: Fazer uma calculadora simples
 * Autora: Bianca Pereira Leão
 * Data: 03/02/2023
 * Versão: 2.0
 ******************************************************/

const { match } = require('assert');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor: \n', function(numero1) {
    let valor1 = numero1.replace(',','.');

    entradaDados.question('Valor: \n', function(numero2) {
        let valor2 = numero2.replace(',','.');
         
        entradaDados.question('Operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function(tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '' || tipoCalculo == ''){
                console.log('ERRO: Não é possivel calcular se algum dado estiver vazio')
            }else if( isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números')
                //typeof identifica o tipo de dado de um elemento o isNan identifica o tipo de conteúdo
            }else{
                if(operacao == 'SOMAR'){
                    resultado = Number(valor1) + Number(valor2);
                }else if (operacao == 'SUBTRAIR'){
                    resultado = Number(valor1) - Number(valor2);
                }else if(operacao == 'MULTIPLICAR'){
                    resultado = Number(valor1) * Number(valor2);
                }else if(operacao == 'DIVIDIR'){
                    resultado = Number(valor1) / Number(valor2);
                } 
                console.log(resultado.toFixed)
            }
        });
    });
});
