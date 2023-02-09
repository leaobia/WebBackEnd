/******************************************************
 * Objetivo: Arquivo destinado ao processamento de calculo de uma tabuada
 * Autora: Bianca Pereira Leão
 * Data: 09/02/2023
 * Versão: 1.0
 ******************************************************/

// retorna processamento de uma tabuada qualquer até um contador qualquer

const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0;
    let resultado;

    if (tabuada == 0 || maxContador == 0)
        status = false;
    else if (isNaN(tabuada) || isNaN(maxContador))
        status = false;
    else {
        while (cont <= maxContador) {
            resultado = tabuada * cont;
            console.log(tabuada +'x'+ cont + '=' + resultado);
            //cont = cont + 1;
            cont++;
            //cont += 1;
        }
    }
    return status;
};

calcularTabuada(2,10);

module.exports = {
    calcularTabuada
}