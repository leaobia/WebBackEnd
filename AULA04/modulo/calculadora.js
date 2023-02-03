/*******************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autora: Bianca Leão
 * Versão: 1.0
 * ****************************************/

// Tudo que faço numa função entra como argumento

function Calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = numero1;
    let valor2 = numero2;
    let operacao = tipoCalculo;

    if (operacao == 'SOMAR') {
        resultado = Number(valor1) + Number(valor2);
    } else if (operacao == 'SUBTRAIR') {
        resultado = Number(valor1) - Number(valor2);
    } else if (operacao == 'MULTIPLICAR') {
        resultado = Number(valor1) * Number(valor2);
    } else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {
            console.log('Não foi possivel realizar o calculo')
        } else {
            resultado = Number(valor1) / Number(valor2);
        }
    } else {
        console.log('ERRO')
        entradaDados.close();
    }

    if (resultado == undefined) {
        console.log('erro')
    } else {
        console.log(resultado)
        entradaDados.close();
    }
    return
}