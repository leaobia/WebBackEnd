/**************************************************************************************
 * Objetivo: Arquivo responsavel por padronizar as mensagens de ERRO, SUCESSO, FUNÇÕES, VARIAVEI
 * Data: 21/06/2023
 * Auto: Bianca Leão
 * Versão: 1.0
 **************************************************************************************/

/*******************MENSAGENS DE ERRO*********************/

const ERROR_INVALID_PROPERTY = {status: 400,message: 'Propriedade inválida. Por favor, verifique os dados informados.'};
  
const ERROR_UNAUTHORIZED_ACCESS = {status: 401,message: 'Acesso não autorizado. É necessário fazer login para acessar esta funcionalidade.'};
  
const ERROR_PROPERTY_NOT_FOUND = {status: 404,message: 'Imóvel não encontrado. Verifique se o ID fornecido está correto.'};
  
const ERROR_INTERNAL_SERVER = {status: 500,message: 'Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.'};

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O TIPO DE MÍDIA CONTENT-TYPE DA SOLICITAÇÃO NÃO É COMPATÍVEL COM O SERVIDOR. TIPO ACEITÁVEL: [application/json]'}

/*******************MENSAGENS DE SUCESSO*********************/

const SUCCESS_LOGIN = {status: 200,message: 'Login realizado com sucesso.'};
  
const SUCCESS_PROPERTY_CREATED = {status: 201,message: 'Imóvel cadastrado com sucesso.'};
 
const SUCCESS_PROPERTY_UPDATED = { status: 200,message: 'Dados do imóvel atualizados com sucesso.'};
  
const SUCCESS_PROPERTY_DELETED = {status: 200,message: 'Imóvel excluído com sucesso.'};

const SUCCESS_GET_PROPERTY = {status: 200,message: 'Imóvel encontrado com sucesso.'};
  
module.exports = {
    ERROR_INVALID_PROPERTY,
    ERROR_UNAUTHORIZED_ACCESS,
    ERROR_PROPERTY_NOT_FOUND,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_CONTENT_TYPE,
    SUCCESS_LOGIN,
    SUCCESS_PROPERTY_CREATED,
    SUCCESS_PROPERTY_UPDATED,
    SUCCESS_PROPERTY_DELETED,
    SUCCESS_GET_PROPERTY
  };
  