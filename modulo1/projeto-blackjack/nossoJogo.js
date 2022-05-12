/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */

/*
   if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
    }
    
    const cartas = ["A", 1,2,3,4,5,6,7,8,9,10, "J", "Q", "K"];
    const naipes = ["♦️", "♥️", "♣️", "♠️"]

    const numero = cartas[Math.floor(Math.random()*cartas.length)]
    const numero2 = naipes[Math.floor(Math.random()*naipes.length)]

    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (11 === "A") {
      valor = 11
    } else if (10 === "J" , 10 === "Q" , 10 === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
   
    }
    */


alert("Boas vindas ao jogo de Blackjack!")

//if (confirm("Quer iniciar uma nova rodada?")) {
   if(confirm("Quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
  
   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaComputador = comprarCarta()

   let totalUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   let totalComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   

   console.log(`Usuário: cartas ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação: ${totalUsuario}`)
   console.log(`Computador: cartas ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação: ${totalComputador}`)

   if (totalUsuario > totalComputador) {
      console.log("O Usuário ganhou!!!")
   } else if (totalUsuario < totalComputador) {
      console.log("O Computador ganhou!!!")
   } else if (totalUsuario === totalComputador)
      console.log("Empate!!!")
} else  {
   console.log("O jogo acabou!")
}