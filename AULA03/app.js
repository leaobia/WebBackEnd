/******************************************************
 * Objetivo: Fazer uma calculadora simples
 * Autora: Bianca Pereira Leão
 * Data: 30/01/2023
 * Versão: 1.0
 ******************************************************/

// Import da biblioteca readline (entrada de dados).

var readline = require('readline');

// Cria objeto para ser especialista em entrada de dados pelo teclado.

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Olá, bem vindo a calculadora bibis, qual operação deseja realizar? \n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n', function(operacãoType){
    // função callback para saber operação
    let nomeOperacao = operacãoType;
    // função callback para escolher o número 1
    entradaDados.question('Digite o primeiro número \n', function(numero1){
        let valorNumero1 = numero1.replace(',','.');
        // função callback para escolher número 2
        entradaDados.question('Digite o segundo número \n', function(numero2){
            let valorNumero2 = numero2.replace(',','.');
            if ( nomeOperacao == '' || valorNumero1  == '' || valorNumero2 == '' ) {
                console.log('Voce deixou entradas vazias')
            }else if (
                isNaN(nomeOperacao) || isNaN(valorNumero1) || isNaN(valorNumero2) 
            ) {
                console.log('Você não digitou um número')

            } else{
                if (nomeOperacao == 1){
    
                      let soma = Number(valorNumero1) + Number (valorNumero2)
                      console.log(soma)
                      
                } else if(nomeOperacao == 2){
                    let subtracao = valorNumero1 - valorNumero2;
                    console.log(subtracao)
                } else if (nomeOperacao == 3){
                    let multiplicacao = valorNumero1 * valorNumero2;
                    console.log(multiplicacao)
                } else{
                    
                    let divisao = valorNumero1/valorNumero2;
                    if ( valorNumero1 || valorNumero2){
                        console.log('Todo número dividido por 0 é ele mesmo')
                    }else{
                        console.log(divisao) 
                    }
                    
                }
            }

        });
    });
});