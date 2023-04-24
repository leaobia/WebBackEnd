/**************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 14/04/2023
 * Auto: Bianca Leão
 * Versão: 1.0
 **************************************************************************************/

// Instalar prima ( uma biblioteca para conexão com o banco de dados)
// npm install prisma --save

// npx prisma = para verificar se o prisma for instalado

// npx prisma init
// npm install @prisma/client --save

//Insere um novo aluno.
const inserirAluno = function (dadosAluno) {

}

//Atualiza um aluno.
const atualizarAluno = function (dadosAluno) {

}

//Deleta um aluno.
const deletarAluno = function (IdAluno) {

}

//Retorna todos os alunos.
const getAlunos = async function () {
    let dadosAlunosJson = {}
    // Import do arquivo DAO para acessar dados no aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js')
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return false
    }

}

//Retorna um aluno pelo ID.
const getAlunoPeloID = async function (IdAluno) {
    let dadosAlunosJson = {}
    let id = IdAluno
    // Import do arquivo DAO para acessar dados no aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js')
    let dadosAluno = await alunoDAO.selectByIdAluno(id)

    if (dadosAluno) {
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return false
    }
}
//Aluno pelo nome
const getAlunoPeloNome = async function (name) {
    let dadosAlunosJson = {}
    let nome = name
    // Import do arquivo DAO para acessar dados no aluno no BD
    let alunoDAO = require('../model/dao/alunoDAO.js')
    let dadosAluno = await alunoDAO.selectByNameAluno(nome)

    if (dadosAluno) {
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return false
    }
}
module.exports = {
    getAlunos,
    getAlunoPeloID,
    getAlunoPeloNome
}