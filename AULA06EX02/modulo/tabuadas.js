const calcularTabuada = function (minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador) {
    let tabuada1 = Number(String(minMultiplicando).replace(',', '.'));
    let tabuada2 = Number(String(maxMultiplicando).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let minContador = Number(String(minMultiplicador).replace(',', '.'));
    let minMultiplicador2;
    let status = true;
    let resultado;

    if (tabuada1 == 0 || tabuada2 == 0 || maxContador == 0 || minContador == 0) {
        console.log('ERRO 01')
        status = false;
    } else if (isNaN(tabuada1) || isNaN(maxContador)) {
        console.log('ERRO 02')
        status = false;
    } else if (tabuada1 > tabuada2 || minContador > maxContador) {
        console.log('ERRO 03')
        status = false;
    } else if (tabuada1 < 2 || tabuada1 > 50 || tabuada2 < 2 || tabuada2 > 50) {
        console.log('ERRO 04')
        status = false;
    } else {
        while (tabuada1 <= tabuada2) {
            console.log('\n\nTabuada do: ' + tabuada1 + '\n')
            minMultiplicador2 = Number(minMultiplicador);
            while (minMultiplicador2 <= maxContador) {
                resultado = tabuada1 * minMultiplicador2;
                console.log(tabuada1 + 'x' + minMultiplicador2 + '=' + resultado);
                minMultiplicador2++;
            }
            tabuada1++;
        }
    }
    return status;
};

calcularTabuada(2,10,5,12)

module.exports = {
    calcularTabuada
}
