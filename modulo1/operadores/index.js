/* Exercicios de Interpretação de codigo
1 -
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) R: False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) R: False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) R: true

console.log("d. ", typeof resultado) R: boolean

2 -
let primeiroNumero = Number(prompt("Digite outro numero!"))
let segundoNumero = Number(prompt("Digite um numero!"))

const soma = primeiroNumero + segundoNumero
console.log(soma)
*/

// Exercicios de escrita de codigo
// 1 -

let minhaIdade = Number(prompt("Qual sua idade?"))
let melhorAmigo = Number(prompt("Qual a idade do seu melhor amigo"))

console.log("Sua idade é maior que a do seu melhor amigo?" ,minhaIdade > melhorAmigo )
// true ou false
// console.log()
let difeIdade = minhaIdade - melhorAmigo
console.log(difeIdade)

// 2 -

let numeroPar = (prompt("Insira um Numero Par"))
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)
// quando dividido por um numero par sempre retorna 0 , dividido por um numero impar sempre retorna 1


// 3 -
let usuarioIdade = Number(prompt("Qual a sua idade?"))
let meses = usuarioIdade * 48
let dias = usuarioIdade * 360
let horas = dias * 24

console.log(meses)
console.log(dias)
console.log(horas)


// 4 -

let numero1 = Number(prompt("Me diga um numero?"))
let numero2 = Number (prompt("Me diga outro numero"))
let divisivel1 = numero1 % numero2
let divisivel2 = numero2 % numero1
console.log(numero1 > numero2)
console.log(numero1 === numero2)
console.log(divisivel1 === 0)
console.log(divisivel2 === 0)



