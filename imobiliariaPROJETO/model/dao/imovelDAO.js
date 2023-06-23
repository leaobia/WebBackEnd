/**************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos imóveis no Banco de Dados.
 * Data: 21/06/2023
 * Auto: Bianca Leão
 * Versão: 1.0
 **************************************************************************************/


//Retorna todos os imoveis.
const selectAllImoveis = async function () {

    console.log('foi');

    let { PrismaClient } = require('@prisma/client')
    let prisma = new PrismaClient()
    let sql = 'select * from tbl_imovel'

    let rsImovel = await prisma.$queryRawUnsafe(sql)


    if (rsImovel.length > 0) {
        console.log(rsImovel);
        return rsImovel
    } else {
        console.log('n foi');
        return false
    }
}


module.exports = {
    selectAllImoveis
}
