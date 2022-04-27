// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
// implemente sua lógica aqui
let altura = Number(prompt("digite sua altura"))
let largura = Number(prompt("digite sua largura"))

let resultado = largura * altura

console.log(resultado)
}



 


// EXERCÍCIO 02
function imprimeIdade(ano1, ano2) {
  // implemente sua lógica aqui

let anoAtual = Number(prompt("digite o ano atual"))
let anoNasc = Number(prompt("digite seu ano de nascimento"))
  console.log(anoAtual - anoNasc)
}

 imprimeIdade
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) { 
   nome = prompt("Digite seu nome")
   idade = prompt("Digite sua idade")
   email = prompt("digite seu email")
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
cor1 = prompt('digite uma cor')
cor2 = prompt('digite uma cor')
cor3 = prompt('digite uma cor')
coresFavoritas = [cor1 , cor2, cor3]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return primeiroElemento = array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui (array[array.length -1])
 return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  let ultimo = array[array.length -1]
  let troca = primeiro
  array[0] = ultimo
  array[array.length -1] = troca
 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toUpperCase()
string2 = string2.toUpperCase()
return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}