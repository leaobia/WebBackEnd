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
   app.get('/estados', cors(), async function(request,response,next){
        const estadosCidades = require('./modulo/estados_cidades.js')
        let estados = estadosCidades.getListaDeEstados()
        response.status(200);
        response.json(estados)
   })

   app.listen(8080, function(){
        console.log('servidor aguardando requisições na porta')
   })