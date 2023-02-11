/******************************************************
 * Objetivo: Arquivo destinado ao processamento de calculo de uma média de alunos 
 * Autora: Bianca Pereira Leão
 * Data: 10/02/2023
 * Versão: 1.0
 ******************************************************/

const { getEnvironmentData } = require("worker_threads");

const calcularMedia = function (nota1, nota2, nota3, nota4) {
    let valor1 = Number(String(nota1).replace(',', '.'));
    let valor2 = Number(String(nota2).replace(',', '.'));
    let valor3 = Number(String(nota3).replace(',', '.'));
    let valor4 = Number(String(nota4).replace(',', '.'));
    let status = true;

    const resultado = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4
    let statusAluno;

    if (valor1 == 0 || valor2 == 0 || valor3 == 0 || valor4 == 0) {
        status = false;
    } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
        status = false;
    } else if (valor1 > 100 || valor2 > 100 || valor3 > 100 || valor4 > 100 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0) {
        status = false;
    } else {
        if (resultado >= 70) {
            statusAluno = 'Aprovado'
        } else if (resultado < 50) {
            statusAluno = 'Reprovado'
        } else {
            statusAluno = 'Exame'
        }

        return [statusAluno , resultado]
    }
}

const exameNota = function (resultado, notaExame) {

    valorExame = Number(String(notaExame).replace(',', '.'));
    resultado = Number(String(resultado).replace(',', '.'));
   
    let statusAluno;
    let mediaExame;

    mediaExame = (resultado + valorExame)/2 

    if (mediaExame >= 60) {
        statusAluno = 'Aprovado'
    } else {
        statusAluno = 'Reprovado'
    }

    return [statusAluno , resultado, mediaExame]
}



const coletarDados = function (sexo) {
    let genero = sexo.toString().toUpperCase();
    let status = true;

    if (genero == 'FEMININO') {

    } else if (genero == 'MASCULINO') {

    } else {
         status = false;
    }

    return genero
}

module.exports = {
    calcularMedia,
    coletarDados,
    exameNota
}