/* Exercicios de Interpretação de codigo
1 -

a  undefined
b  Null
c   11
d   3
e    [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f   9
let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

2 -
SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

// Exercicios de escrita de codigo

// 1 -

const emailDoUsuario = prompt("Qual seu email?")
const nomeDoUsuario = prompt("Qual seu nome?")

console.log(`O ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`)


// 2 -

const comidasPreferidas = ["strognof" ,"Ovo" , "macarrao" ,"batata-Frita", "pizza"]

console.log(comidasPreferidas)
console.log("Essas são as minhas comidas preferidas")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const usuarioComida = prompt('Qual sua Comida preferida?')
comidasPreferidas.push(usuarioComida)
comidasPreferidas.splice(1, 1)
console.log(comidasPreferidas)


// 3 -

 const listaDetarefas = []
 const tarefa1 = prompt('Qual sua primeira Tarefa no dia?')
 const tarefa2 = prompt("Qual sua segunda tarefa no dia")
 const tarefa3 = prompt("Qual sua terceira tarefa no dia?")
 listaDetarefas.push(tarefa1)
 listaDetarefas.push(tarefa2)
 listaDetarefas.push(tarefa3)
 console.log(listaDetarefas)

 let naoQuero = Number(prompt("Digite um numero de 1 a 3?"))

 listaDetarefas.splice(naoQuero-1, 1)

 console.log(listaDetarefas)



















