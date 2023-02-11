/******************************************************
 * Objetivo: Arquivo destinado ao processamento de calculo de números pares ou impares
 * Autora: Bianca Pereira Leão
 * Data: 11/02/2023
 * Versão: 1.0
 ******************************************************/

const calculoParImpar = function (numeroInicial, numeroFinal, escolhaDeModo) {

    let valor1 = Number(String(numeroInicial).replace(',', '.'));

    let valor2 = Number(String(numeroFinal).replace(',', '.'));

    let escolha = escolhaDeModo.toUpperCase();

    let status = true;

    if (valor1 == 0 || valor2 == 0)

        status = false;

    else if (isNaN(valor1) || isNaN(valor2))

        status = false;

    else if (valor1 >= valor2)

        status = false;

    else if (valor1 > 500 || valor1 < 0)
        status = false
    else if (valor2 > 1000 || valor1 < 100)
        status = false
    else {

        if (escolha == 'PAR' || escolha == 'AMBOS') {

            console.log('\nLista de Números Pares');

            let contadorPares = 0;

            for (i = valor1; i <= valor2; i++) {

                if (i % 2 == 0) {

                    console.log(i, 'par')

                    contadorPares++

                }

            }

            console.log('Quantidade de Pares encontrados: ' + contadorPares)

        }

        if (escolha == 'IMPAR' || escolha == 'AMBOS') {

            console.log('\nLista de Números Impares');

            let contadorImpares = 0;

            for (i = valor1; i <= valor2; i++) {

                if (i % 2 != 0) {

                    console.log(i, 'impar')

                    contadorImpares++

                }

            }

            console.log('Quantidade de Impares encontrados: ' + contadorImpares)

        }

    }

    return status;

}

calculoParImpar(15, 15, 'AMBOS');
