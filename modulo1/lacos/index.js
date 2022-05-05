//Exercícios de interpretação de código
// 1 - 10
// 2 - a) todos os numeros maiores que 18, [ 19,21,23,25,27,30]
// b )            ,
// 3 - seguencia de asteristicos , * , ** , *** , ****
// Exercícios de escrita de código
// 1 -
let nomesBichinhos = []
    
    qtdBichonhos = Number(prompt("quantos bichinhos de estimação você tem?"))
    if (qtdBichonhos === 0){
        console.log("Que pena! Você pode adotat um pet!")
    }
    else
    for(i = 0; i < qtdBichonhos; i++){
        nomesBichinhos[i] = prompt(`qual nomes dos bichinhos ${i + 1}`)
        
    }
console.log(nomesBichinhos)


// 2
let arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

//Escreva um programa que **imprime** cada um dos valores do array original.
//function arrayInteiro( array ){
     
    for(let i=0; i < arrayOriginal.length; i++){ 
       
       console.log(arrayOriginal[i])
    } 

//Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
function mostrarDivisao( array ){
     
    for(let arrayInteiro of array){ 

       }
}


console.log(mostrarDivisao.arrayOriginal)

//Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//Escreva um programa que imprima no console o maior e o menor números contidos no array original