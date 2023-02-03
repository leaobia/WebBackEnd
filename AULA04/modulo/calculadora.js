/*******************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autora: Bianca Leão
 * Versão: 1.0
 * ****************************************/

// Tudo que faço numa função entra como argumento

function Calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;
    } else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('Não foi possivel realizar o calculo')
        } else {
            resultado = valor1 / valor2;
        }
    } else {
        console.log('ERRO')
        entradaDados.close();
    }

    if (resultado == undefined)
        return false;
    else
        return resultado;
}

// Permite adicionar uma function no escopo global (public)
// As functions que não estão no export serão tratadas como escopo local (private)

module.exports = {
    Calculadora
}