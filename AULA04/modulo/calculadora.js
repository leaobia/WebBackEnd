/*******************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autora: Bianca Leão
 * Versão: 1.0
 * ****************************************/

// Tudo que faço numa função entra como argumento
// Forma 01 de se criar uma função(tradicional)

function Calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    /* if (operacao == 'SOMAR') {
         resultado = valor1 + valor2;
     } else if (operacao == 'SUBTRAIR') {
         resultado = valor1 - valor2;
     } else if (operacao == 'MULTIPLICAR') {
         resultado = valor1 * valor2;
     } else if (operacao == 'DIVIDIR') {
         if (valor2 == 0) {
             console.log('Não foi possivel realizar o calculo')
             status = false;
         } else {
             resultado = valor1 / valor2;
         }
     } else {
         console.log('ERRO')
         status = false;
     }*/

    switch (operacao) {
        case 'SOMAR':
            resultado = SOMAR(valor1,valor2);
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1,valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1,valor2);
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('Não foi possivel realizar o calculo')
                status = false;
            } else {
                resultado = DIVIDIR(valor1,valor2);
            }
            break;
        default:
            console.log('ERRO')
            status = false;
    }

    if (resultado == undefined && status == false)
        return false;
    else
        return resultado;
}
// Forma 02 de se criar uma função (hoje é uma das mais utilizadas)

//const calculadora = function(){}


// Forma 03 de se criar uma função

const SOMAR = (valor1,valor2) => valor1 + valor2;
const SUBTRAIR = (valor1,valor2) => valor1 - valor2;
const MULTIPLICAR = (valor1,valor2) => valor1 * valor2;
const DIVIDIR = (valor1,valor2) => valor1 / valor2;

// Permite adicionar uma function no escopo global (public)
// As functions que não estão no export serão tratadas como escopo local (private)

module.exports = {
    Calculadora
}