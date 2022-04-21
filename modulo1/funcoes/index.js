/*
Exercícios de interpretação de código

1 -
a - 10 ,  50
b - o console não retornaria nada
function somar (n1,n2) {
  
    let soma = n1 + n2
    return soma
}
console.log(somar(5,6))

2 -
a - coloca toda a frase para letra minuscula = toLowerCase , includes = busca uma string e diz true ou false
b - true ,true,  true


*/

function minhaInformacao() {
	console.log(`Eu sou Fabio, tenho 30 anos, moro em Rio de janeiro e sou estudante.`)
}

minhaInformacao()


function minhaFuncao(resposta,resposta2,resposta3,resposta4) {
	console.log(`Eu sou ${resposta}, tenho ${resposta2} anos, moro em ${resposta3} e sou ${resposta4}.`)
}

minhaFuncao("Fabio",30,"Rio de Janeiro","Desenvolverdor")


function somar (n1,n2) {
  
    let soma = n1 + n2
    return soma
}
console.log(somar(5,6))


function maiorIqual (n1,n2) {
  
    let soma = n1 <= n2
    return soma
}

console.log(maiorIqual(4,6))

function numeroPar (n1) {
  
    let soma = n1 % 2 === 0
    return soma
}

console.log(numeroPar(50))



function tamMinusculo(mensagem) {
   console.log(mensagem.toUpperCase())
   console.log(mensagem.length)
}

tamMinusculo('Fluminense')


function adicao (n1,n2) {
  
    let soma = n1 + n2
    return soma
}

function subtra (n1,n2) {
  
    let soma = n1 - n2
    return soma
}

function multi (n1,n2) {
  
    let soma = n1 * n2
    return soma
}

function divi (n6,n7) {
  
    let soma = n6 / n7
    return soma
}

let usuario = Number(prompt('Insira dois numeros'))
let usuario2 = Number(prompt('Insira dois numeros'))

console.log("Soma",adicao(usuario,usuario2),"Diferença:", subtra(usuario,usuario2),
"Multiplicação:",multi(usuario,usuario2),"Divisão:",divi(usuario,usuario2))
