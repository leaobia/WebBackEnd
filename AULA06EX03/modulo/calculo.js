/******************************************************
 * Objetivo: Arquivo destinado ao processamento de calculo de números pares ou impares
 * Autora: Bianca Pereira Leão
 * Data: 11/02/2023
 * Versão: 1.0
 ******************************************************/

const calculoParImpar = function (numeroInicial, numeroFinal, escolhaDeModo) {

    let valor1 =  Math.trunc(Number(numeroInicial))
    let valor2 = Math.trunc(Number(numeroFinal))
    let escolha = escolhaDeModo;
    let status = true;

    if (valor1 == 0 || valor2 == 0) {
        console.log('ERRO: Números devem ser maiores que 0')
        status = false;
    } else if (isNaN(valor1) || isNaN(valor2)) {
        console.log('ERRO: Apenas números')
        status = false;
    } else if (valor1 > valor2) {
        console.log('ERRO: Valor inicial deve ser menor que o final')
        status = false;
    } else if (valor1 == valor2) {
        console.log('ERRO: Numeros iguais')
        status = false;
    } else if (valor1 < 0 || valor1 > 500 || valor2 < 100 || valor2 > 1000) {
        console.log('ERRO: Valor 1 deve estar entre 0 e 500 \n valor 2 deve estar entre 100 e 1000')
        status = false;
    } else {
        if (escolha == 'PAR' || escolha == 'AMBOS') {
            console.log('\nLista de Números Pares');
            let contadorPares = 0;
            for (i = valor1; i <= valor2; i++) {
                if (i % 2 == 0) {
                    console.log(i)
                    contadorPares++
                }
            }
            console.log('Quantidade de Pares encontrados: ' + contadorPares)
        }

        if (escolha == 'IMPAR' || escolha == 'AMBOS') {
            console.log('\n\nLista de Números Impares');
            let contadorImpares = 0;
            for (i = valor1; i <= valor2; i++) {
                if (i % 2 != 0) {
                    console.log(i)
                    contadorImpares++
                }
            }
            console.log('Quantidade de Impares encontrados: ' + contadorImpares)
        }
    }
   // console.log('fim')
    return status;

}


//calculoParImpar(15, 150, 'AMBOS')


module.exports = {
    calculoParImpar
}

