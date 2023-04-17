/************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Bianca Leão
 * Data: 10/03/2023
 * Versão: 1.0
 ************************************************************************/

/**************************************************************************
 * Express - dependencia para realizar requisições de API pelo protocolo HTTP
   npm install express --save

 * Cors - dependencia para gerenciar permissões da API
   npm install cors --save

 * Body-Parser - dependencia que gerencia o corpo das requisições
   npm install body-parser --save
 **************************************************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const estadosCidades = require('./modulo/estados_cidades.js')

// cria um objeto com as caracteristicas do express

const app = express();

app.use((request, response, next) => {
  // API Pública - fica disponivel para qualquer tipo de aplicação (usa *)
  // API Privada - fica disponivel somente para o servidor disponivel (usa o IP do servidor)
  response.header('Access-Control-Allow-Origin', '*')

  // Permite quais metodos poderão ser utilizados nas requisições da API
  response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')

  //envia para o cors as regras de permissões
  app.use(cors())

  next();
})

// EndPoints
// async -> estabelece um status de aguarde, assim que eu processar te devolvo os dados
// Obs: se não usar o async, a requisição é perdida, pois front acha que a API está fora do ar

// EndPoint para listar todos os estados
app.get('/estados', cors(), async function (request, response, next) {
  const estadosCidades = require('./modulo/estados_cidades.js')
  let estados = estadosCidades.getListaDeEstados()

  // tratamento para validar sucesso da requisição
  if (estados) {
    response.status(200);
    response.json(estados)
  } else {
    response.status(500);
  }
})

// Endpoint: lista os dados do estado filtrando pela sigla

app.get('/estado/:uf', cors(), async function (request, response, next) {
  let statusCode;
  let dadosEstado = {}
  const estadosCidades = require('./modulo/estados_cidades.js')
  let siglaEstado = request.params.uf.toUpperCase()
  let estado;

  if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
   // response.status(400);
    statusCode = 400
    dadosEstado.message = 'Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido'
  }else{
     estado = estadosCidades.getDadosEstado(siglaEstado)  
  }
   // tratamento para validar sucesso da requisição
   if (estado) {
    statusCode = 200
    dadosEstado = estado
  } else {
    statusCode = 404
    dadosEstado = "Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido"
  }
  response.status(statusCode)
  response.json(dadosEstado)
})

// Endpoint que retorna a capital do estado

app.get('/capitalEstado/:uf', cors(), async function (request, response, next) {
  let statusCode;
  let dadosEstado = {}
  const estadosCidades = require('./modulo/estados_cidades.js')
  let siglaEstado = request.params.uf.toUpperCase()
  let estado;

  if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
   // response.status(400);
    statusCode = 400
    dadosEstado.message = 'Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido'
  }else{
     estado = estadosCidades.getCapitalEstado(siglaEstado)  
  }
   // tratamento para validar sucesso da requisição
   if (estado) {
    statusCode = 200
    dadosEstado = estado
  } else {
    statusCode = 404
    dadosEstado = "Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido"
  }
  response.status(statusCode)
  response.json(dadosEstado)
})

// Endpoint que retorna os estados de uma região

app.get('/estadosRegiao/:regiao', cors(), async function (request, response, next) {
  let statusCode;
  let dadosEstado = {}
  const estadosCidades = require('./modulo/estados_cidades.js')
  let nomeRegiao = request.params.regiao.toUpperCase()
  let estado;

  if(nomeRegiao == '' || nomeRegiao == undefined || !isNaN(nomeRegiao)){
   // response.status(400);
    statusCode = 400
    dadosEstado.message = 'Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido'
  }else{
     estado = estadosCidades.getEstadosRegiao(nomeRegiao)  
  }
   // tratamento para validar sucesso da requisição
   if (estado) {
    statusCode = 200
    dadosEstado = estado
  } else {
    statusCode = 404
    dadosEstado = "Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido"
  }
  response.status(statusCode)
  response.json(dadosEstado)
})

// Endpoint que determina as capitais do país
app.get('/capitalPais', cors(), async function (request, response, next) {
  const estadosCidades = require('./modulo/estados_cidades.js')
  let estados = estadosCidades.getCapitalPais()

  // tratamento para validar sucesso da requisição
  if (estados) {
    response.status(200);
    response.json(estados)
  } else {
    response.status(500);
  }
})

// Endpoint que determina as cidades do estado

app.get('/v1/cidadesEstado/:uf', cors(), async function (request, response, next) {
  let statusCode;
  let dadosEstado = {}
  const estadosCidades = require('./modulo/estados_cidades.js')
  let siglaEstado = request.params.uf.toUpperCase()
  let estado;

  if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
   // response.status(400);
    statusCode = 400
    dadosEstado.message = 'Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido'
  }else{
     estado = estadosCidades.getCidades(siglaEstado)  
  }
   // tratamento para validar sucesso da requisição
   if (estado) {
    statusCode = 200
    dadosEstado = estado
  } else {
    statusCode = 404
    dadosEstado = "Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido"
  }
  response.status(statusCode)
  response.json(dadosEstado)
})

app.get('/v2/senai/cidades', cors(), async function (request, response, next) {

  // receba uma váriavel em query string
  let siglaEstado = request.query.uf.toUpperCase();
  let statusCode;
  let dadosCidades = {}
  const estadosCidades = require('./modulo/estados_cidades.js')
  let cidades;

  if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
   // response.status(400);
    statusCode = 400
    dadosCidades.message = 'Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido'
  }else{
     cidades = estadosCidades.getCidades(siglaEstado)  
  }
   // tratamento para validar sucesso da requisição
   if (cidades) {
    statusCode = 200
    dadosCidades = cidades
  } else {
    statusCode = 404
    dadosCidades = "Não foi possível processar, pois os dados de entrada enviados não correspondem ao exigido"
  }
  response.status(statusCode)
  response.json(dadosCidades)
  
})




app.listen(8080, function () {
  console.log('servidor aguardando requisições na porta')
})