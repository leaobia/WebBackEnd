/******************************************************
 * Objetivo: utilizar códigos e métodos de array
 * Autora: Bianca Pereira Leão
 * Data: 24/02/2023
 * Versão: 1.0
 ******************************************************/

// [ ] - isso representa um objeto de array
// { } - isso representa um objeto JSON

const listaNomes = ['José', 'Maria', 'Luis', 'Antonio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor']
const listaProdutos2 = ['CPU', 'Cadeira gamer']
const uniao = listaProdutos.concat(listaProdutos2);

const exibindoDados = function () {
    //console.log(typeof(listaNomes)) -> verifica o tipo de dado do elemento litaNomes

    console.log(listaNomes)

    listaNomes.push('Bianca')
    listaNomes.unshift('Yasmin')

    console.log('-------------------------')
    console.table(listaNomes)


    const result = listaNomes.filter(listaNomes => listaNomes.length >= 6);
    console.log('Isso retorna o filtro que tenha somente elementos de tamanho menor igual a 6')
    console.log(result)
    console.log('-------------------------')
    // consol.table -> permite visualizar o conteudo do array em formato de tabela

    // Percorrer um array com while

    console.log('Exemplo com while')

    let cont = 0;
    let quantidadeItens = listaNomes.length;

    while (cont < quantidadeItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)
        cont += 1;
    }

    console.log('-------------------------')

    // Percorrer um array com for
    console.log('Exemplo com for')
    for (let cont = 0; cont < quantidadeItens; cont++)
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)

    console.log('-------------------------')

    // Percorrer um array com FOREACH
    console.log('Exemplo com FOREACH')
    listaNomes.forEach(function (nome) {
        console.log('O nome do aluno é:', nome)
    })

    // Testando splice

    let ultimosNomes = listaNomes.splice(3)
    console.log('Vai até o 3 elemento', listaNomes)
}

const manipulandoDados = function () {
    // push -> acrescenta um elemento no fim do array
    listaProdutos.push('Memória')
    console.table(listaProdutos)

    // unshift -> acrescenta um elemento no inicio do array

    listaProdutos.unshift('Refrigerador', 'HD', 'Placa-mãe')
    console.table(listaProdutos)

    //pop -> deleta um elemento no fim do array
    listaProdutos.pop()
    console.table(listaProdutos)

    // shift -> deleta um elemento no começo do array
    listaProdutos.shift()
    console.table(listaProdutos)

    // concat irá juntar dois arrays

    uniao = listaProdutos.concat(listaProdutos2)
    console.log(uniao)

    // splice irá remover a partir da do elemento que vc colocar

    listaProdutos.splice(2)
    console.table(listaProdutos)

    // a partir do index 0, quero adicionar mais 4 elementos 

    uniao.splice(0, 4, 'pc1', 'pc2', 'pc3', 'pc4')
    console.table(uniao)

    // slice faz uma replica do array

    const novosProdutos1 = listaProdutos.slice()
    console.log('NovosProdutos', novosProdutos1)
    console.log('Lista Produtos', listaProdutos)

    //indexOf -> se retorna de 0 para cima é pq o item existe
    console.log(uniao.indexOf('pc3'))

    // includes retorna se tem ou não em formato boolean

    console.log(uniao.includes('pc3'))

    // Exemplo de utilização do indexOf
    if (uniao.indexOf('pc3') >= 0) {
        console.log('item encontrado')
    } else {
        console.log('item não encontrado encontrado')
    }

    // Exemplo de utilizição do includes 
    if (uniao.includes('pc3') == true) {
        console.log('item encontrado')
    } else {
        console.log('item não encontrado encontrado')
    }
}

const removerProdutos = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = uniao.indexOf(nome);
    let status;

    if (indice >= 0) {
        uniao.splice(indice, 1, 'substitui')
        status = true;
    } else {
        status = false;
    }

    return status
}

// A função remover itens retorna uma lista com os itens que sobraram

const removerItens = function (nomeProduto, array) {

    let nome = nomeProduto;
    let status;
    let arrayLista = array;

    const novosProdutos = arrayLista.slice()
    let indice = novosProdutos.indexOf(nome);

    if (indice >= 0) {
      novosProdutos.splice(indice,1)
      status = true;
      console.log('Essa é a lista oficial',listaProdutos)
      console.log('Essa é a nova lista',novosProdutos)
    } else {
        status = false;
        console.log('Não foi encontrado esse item, logo, não foi removido')
    }
    return status
}

removerItens('Mouse', listaProdutos)

//manipulandoDados()

//console.table(uniao)

//console.log(removerProdutos('CPU'))

//console.table(uniao)