/**************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados.
 * Data: 14/04/2023
 * Auto: Bianca Leão
 * Versão: 1.0
 **************************************************************************************/

//Insere um novo aluno no Banco de Dados.
const insertAluno = function (dadosAluno) {

}

//Atualiza um aluno no Banco de Dados.
const updateAluno = function (dadosAluno) {

}

//Deleta um aluno no Banco de Dados.
const deleteAluno = function (IdAluno) {

}

//Retorna todos os alunos.
const selectAllAlunos = async function () {

    let { PrismaClient } = require('@prisma/client')
    let prisma = new PrismaClient()
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe( ) -> Permite interpretar uma variavel 
    //como sendo um scriptSQL
    //$queryRaw( ) -> Esse executa o comando dentro de aspas e não 
    //podendo interpretar uma variavel

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // valida se o BD retornou algum registro

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

//Retorna um aluno pelo ID.
const selectByIdAluno = async function (IdAluno) {

    let { PrismaClient } = require('@prisma/client')
    let prisma = new PrismaClient()
    let id = IdAluno
    let sql = 'select * from tbl_aluno where id =' + id

    //$queryRawUnsafe( ) -> Permite interpretar uma variavel 
    //como sendo um scriptSQL
    //$queryRaw( ) -> Esse executa o comando dentro de aspas e não 
    //podendo interpretar uma variavel

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // valida se o BD retornou algum registro

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}
const selectByNameAluno = async function (nameAluno) {

    let { PrismaClient } = require('@prisma/client')
    let prisma = new PrismaClient()
    let name = nameAluno
    let sql = `select * from tbl_aluno where nome like '${name}%'`

    //$queryRawUnsafe( ) -> Permite interpretar uma variavel 
    //como sendo um scriptSQL
    //$queryRaw( ) -> Esse executa o comando dentro de aspas e não 
    //podendo interpretar uma variavel

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // valida se o BD retornou algum registro

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno
}