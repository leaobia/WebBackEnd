/*************************************************************************************
 * Objetivo: API para integração entre Back e Banco de dados (GET, POST, PUT, DELETE)
 * Autor: Bianca Leão
 * Data: 14/04/2023
 * Versão: 1.0
 *************************************************************************************/

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

//CRUD (Create, Read, Update, Delete)

/*************************************************************************************
 * Objetibo: API de controle de Alunos.
 * Data: 14/04/2023
 * Autor: Bianca Leão
 * Versão: 1.0
 *************************************************************************************/

//Endpoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
    let controllerAluno = require('./controller/controller_aluno.js')
    let dadosAluno = await controllerAluno.getAlunos();
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404);
    }
})

//Endpoint: Retorna o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let controllerAluno = require('./controller/controller_aluno.js')
    let id = request.params.id
    let dadosAluno = await controllerAluno.getAlunoPeloID(id);
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404);
    }
})



app.get('/v1/lion-school/aluno/:name', cors(), async function (request, response) {
    let controllerAluno = require('./controller/controller_aluno.js')
    let name = request.params.name
    let dadosAluno = await controllerAluno.getAlunoPeloNome(name)
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404);
    }
})

//Endpoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), async function (request, response) {

})

//Endpoint: Atualiza um dado existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//Endpoint: Deleta um dado existente, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {


})


app.listen(8080, function () {
    console.log('Aguardando requisições na porta 8080...');
})