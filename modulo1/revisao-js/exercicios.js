// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const numero = array.length
    return numero
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const numero = array.reverse()
    return numero
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenado = array.sort((a,b) =>a - b)
    return ordenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const max = Math. max(...array)
    return max

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)
    let maiorDivisivelPorMenor = ((maiorNumero % menorNumero) == 0)
    let diferenca = maiorNumero - menorNumero
    return  {
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
}