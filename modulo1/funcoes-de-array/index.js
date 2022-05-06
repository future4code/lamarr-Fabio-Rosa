//Exercícios de interpretação de código
// 1 -todo o array sera exibido
// 2 - o nome de cada usuario do array
// 3 - sera exibido o nome e apelido dos usuario que não sejam chijo

//Exercícios de escrita de código
// 1 -
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)
 const nomesPets = pets.map((item) => {
     return item.nome
 })

 console.log(nomesPets)
// b)
 const cachorrosSalsicha = pets.filter ((item,index) => {
     return item.raca === "Salsicha"
 })

 console.log(cachorrosSalsicha)

// c)
 const racaPoodle = pets.filter ((item,index) => {
    return item.raca === "Poodle"
 })
 console.log(racaPoodle)

 // 2 -

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a )
 const nomeProdutos = produtos.map((item) => {
    return item.nome
})

console.log(nomeProdutos)

// b)
const produtosDesconto = produtos.map((item) => {
    return{
        nome: item.nome,
        preco: item.preco*0.95
    }
})

console.log(produtosDesconto)


// c)
const produtosBebidas = produtos.filter ((item,index) => {
    return item.categoria === "Bebidas"
})

console.log(produtosBebidas)

// d )
const nomeYpe = produtos.filter ((item) => {
    return item.nome.includes("Ypê")
})

console.log(nomeYpe)

// e)
const compreProdutos = nomeYpe.map((item) =>{
return `Compre ${item.nome} por ${item.preco}`
})

console.log(compreProdutos)


// Desafio
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // a)
 const nomesPokemons = pokemons.map((item) => {
    return item.nome
 })

 nomesPokemons.sort()

 console.log(nomesPokemons)

 //const numerosSemRepeticao = [...new Set(pokemons)];

 const tiposPokemons = pokemons.map((item) => {
    return item.tipo
 })

 const semRepeti = [...new Set(tiposPokemons)]

 console.log(semRepeti)