//Exercícios de interpretação de código
// 1 -Matheus Nachtergaele , Virginia Cavendish ,canal: "Canal Brasil", horario: "19h"
// 2 -a ) objeto cachorro , objeto gato = cachorro ;trocando o nome 'Juca' por 'Juba' , objeto tartaruga = gato ;com nome do Juba trocando a letra 'a' pelo 'o'
//    b ) copia o objeto
// 3 - a ) false , indefinido
//     b ) o valor impresso  false que estava na propridade do objeto , e no segundo ele não achou pq nao tinha a chave Altura ele imprimiu como indefinido
// Exercícios de escrita de código

// - 1
let pessoa = {
    nome: "Joao", 
    apelidos: ["joazinho", "Jo", "jojo"]
}

function imprimiFrase(obj){
    console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos}`)
} 

imprimiFrase(pessoa)

let novosApelidos = [...pessoa.apelidos,'joa','joazao','jobs']


console.log(novosApelidos)

imprimiFrase(novosApelidos)

// - 2
let pessoa1 = {
	nome: "Bruno", 
  idade: 23, 
	profissao: "Nadador"
}
let pessoa2 = {
	nome: "Vitor", 
  idade: 21, 
	profissao: "Lutador"
}

function informaçoes (obj) {

    let informaçoesPessoas = [obj.nome , obj.idade , obj.profissao , obj.profissao.length ]

    return informaçoesPessoas
}

console.log(informaçoes(pessoa1))
console.log(informaçoes(pessoa2))

// - 3

let carrinho = []

let fruta1 = {
    nome:'Pera',
    disponivel: true

}
let fruta2 = {
    nome:'Laranja',
    disponivel: true

}
let fruta3 = {
    nome:'Abacaxi',
    disponivel: true

}

function sacolao(item){
    carrinho.push(item)
}

sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho)











