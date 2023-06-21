//Retorna todos os imoveis.
const getImoveis = async function () {
    let dadosImovelJson = {}
    
    let imovelDAO = require('../model/dao/imovelDAO.js')
    let dadosImovel = await imovelDAO.selectAllImoveis()

    if (dadosImovel) {
        dadosImovelJson.quantidade = dadosImovel.length
        dadosImovelJson.imoveis = dadosImovel
        return dadosImovelJson
    } else {
        return false
    }

}


module.exports = {
    getImoveis
}