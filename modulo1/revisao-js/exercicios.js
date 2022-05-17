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
    numerosPares = []
    array.map((item)=>
    {if(item %2 === 0)
        numerosPares.push(item)
    })
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    numerosPares = []
    array.map((item)=>
    {if(item %2 === 0)
        numerosPares.push(item * item)
    })
    return numerosPares
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
    let primeirosPares = []
    for (let i = 0; primeirosPares.length < n; i++) {
        if (i % 2 == 0) {
            primeirosPares.push(i)
        }
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA==ladoB && ladoB==ladoC){return "Equilátero";
    }else if(ladoA!=ladoB && ladoB!=ladoC && ladoA!=ladoC){return "Escaleno"
    }else{return"Isósceles";}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a -b)
    return [array[array.length-2],array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let array = {...pessoa, nome:"ANÔNIMO"}
   return array
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item)=> {
       return (item.idade > 14 && item.idade <60 && item.altura > 1.5)
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((item)=> {
        return (item.idade <= 14 || item.idade >60 || item.altura <1.5)
    })
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function compare(a,b) {
        if (a.nome < b.nome)
           return -1;
        if (a.nome > b.nome)
          return 1;
        return 0;
      }
      
      return consultas.sort(compare);
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
        //function tentativa (a, b){
        //if (a.dataDaConsulta < b.dataDaConsulta)
          //   return -1;
        //if (a.dataDaConsulta > b.dataDaConsulta)
         //   return 1;
         //   return 0;
//}
 //   return consultas.sort(tentativa);
}