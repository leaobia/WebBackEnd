/**************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de imóveis
 * Data: 21/06/2023
 * Auto: Bianca Leão
 * Versão: 1.0
 **************************************************************************************/

var message = require('./modulo/config.js')


//Retorna todos os imoveis.
const getImoveis = async function () {
    let dadosImovelJson = {}
    
    let imovelDAO = require('../model/dao/imovelDAO.js')
    let dadosImovel = await imovelDAO.selectAllImoveis()

    if (dadosImovel) {
  
        dadosImovelJson.status = message.SUCCESS_GET_PROPERTY.status
        dadosImovelJson.message = message.SUCCESS_GET_PROPERTY.message
        dadosImovelJson.quantidade = dadosImovel.length
        dadosImovelJson.imoveis = dadosImovel
        return dadosImovelJson
    } else {
        return message.ERROR_PROPERTY_NOT_FOUND
    }

}



module.exports = {
    getImoveis
}