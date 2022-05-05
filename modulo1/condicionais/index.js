//Exercícios de interpretação de código
// 1-
// a) Faz um teste se o numero do usuario e par true , imrpar false
// b) Par
// c) impar
// 2-
// a) dizer o valor da fruta
// b)"O preço da fruta ", maça, " é ", "R$ ", 2.25)
// c ) O preco da fruta , Pêra e R$ 5,00
// 3 - 
// a ) pedindo um numero ao usuario
// b ) true , false
// c ) sim
//  Exercícios de escrita de código

const idadeUsuario = Number(prompt('Qual a sua idade Marcela?'))

    if (idadeUsuario >= 18) {
  console.log("Você pode dirigir.")
} else {
  console.log('Você não pode dirigir.')
}

const alunoHorario = prompt('Qual seu horario de Aula ,M (matutino) ou V (Vespertino) ou N (Noturno)?')

    if (alunoHorario === 'M'){ 
        console.log('Bom dia!')
    }else if(alunoHorario === 'V'){
    console.log('Boa tarde!') 
    }else{
        console.log('Boa noite!')
    }


    switch (alunoHorario){
        case 'M':
             console.log('Bom dia!') 
             break;
        case 'V' : 
            console.log('Boa tarde!')
            break;
        case 'N':
             console.log('Boa noite!') 
        break;
        default :
        console.log("Não e bem esse seu Horario!")
    }

    const qualFilme = prompt("Qual gênero do Filme que vamos assistir?")
    const preçoIngresso = Number(prompt("Qual valor do ingresso"))
    const lanche = prompt("Escolha seu lanche?")

function vamosAoCinema (genero,valor){
    if(genero === "fantasia" , valor = 15){
        console.log(`Bom filme! Aproveite o seu ${lanche}`)
    }else{
        console.log("Escolha outro Filme!")
        }
    }
    
vamosAoCinema(qualFilme,preçoIngresso)

/*
Desafio 2 - INCOMPLETO
const nomeDoCliente = prompt("Seu Nome completo?")
const etapa = prompt('Qual etapa do jogo você deseja ?(SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)')
const categoriaIngresso = Number (prompt("Qual categoria do seu ingresso: 1 ,2 ,3 ou 4 ?"))
const quantidadeDeIngressos = Number(prompt('Quantos ingressos Deseja?'))
*/
