/*************************************************************************************
 * Objetivo: API para retornar dados de uma imobiliária fícticia
 * Autor: Bianca Leão
 * Data: 21/06/2023
 * Versão: 1.0
 *************************************************************************************/

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')


var message = require('./controller/modulo/config.js')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})


//Endpoint: Retorna todos os dados de imoveis
app.get('/v1/minha-imobiliaria/imoveis', cors(), async function (request, response) {
    let controllerImovel = require('./controller/controller_imovel.js')
    let dadosImovel = await controllerImovel.getImoveis();
    if (dadosImovel) {
        response.json(dadosImovel)
        response.status(dadosImovel.status)
    } else {
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
    }
})

app.listen(8080, function () {
    console.log('Aguardando requisições na porta 8080...');
})