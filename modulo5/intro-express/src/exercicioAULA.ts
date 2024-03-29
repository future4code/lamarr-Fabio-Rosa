import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1 - Faça a instalação e configuração do Express na pasta do exercício. Para testar,
// crie um endpoint que aponte para a URL base da API.
// Esse endpoint pode responder apenas com um status ou mensagem fixa.
app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express")
})


// Exercício 2 - Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários.
// No seu projeto, crie uma variável de tipo para representar esse recurso.
// Eles devem possuir as seguintes propriedades:- id,- name,- phone,- email,- website
type User = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

// Exercício 3 - Crie um array de usuários para servir como base de dados da nossa API. 
//Insira nele quantos objetos quiser, Não se esqueça de fazer a tipagem correta desse array
const users: User[] = [
   
    {
        id: "nifdvdf-rvdd4-fbfd4-gbfgbd",
        name: "Labenu",
        phone: 11-213423122,
        email: "labenu@labenu.com",
        website: "labenu.com.br"
    },
    {
        id: "knro2in3-fin3oi-v3nroi-3rrrfr",
        name: "Casas Bahia",
        phone: 11-382382712,
        email: "casasbahia@casas.com",
        website: "casasbahia.com.br"
    },
    {
        id: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4",
        name: "CVC",
        phone: 11-456643534,
        email: "cvc@cvc.com",
        website: "cvc.com.br"
    },
    {
        id: "fgregrgth-4353htrh-btb4tht4b-b4t4b",
        name: "Americanas",
        phone: 11-3454423343,
        email: "americanas@americanas.com",
        website: "americanas.com.br"
    }

]


// Exercício 4 - Construa um endpoint que retorne os usuários criados no exercício anterior.
app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Não tem usuários.")
    }

    res.status(201).send(users)
})

// Exercício 5 - crie uma variável de tipo para representar esse recurso.
// Eles devem possuir as seguintes propriedades: id ,title, body, userId
type Post  = {
    id: string,
    title: string,
    body: string,
    userId: string
}

// Exercício 6 - Crie um array de posts para incrementar a base de dados da nossa API. 
const posts: Post[] = [
    {
        id: "232343-34343-3453-456468",
        title: "Educação que reinventa",
        body: "Venha estudar programação para se tornar um programador de sucesso!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgbd" 
        },
    {
        id: "45453-232435-232434-2312",
        title: "Vem para Casas Bahia",
        body: "Aqui você encontra os melhores preços com frete gratis",
        userId: "knro2in3-fin3oi-v3nroi-3rrrfr"
    },
    {
        id: "45655-45534534-676767-7787",
        title: "CVC com os melhores preços e hoteis",
        body: "Venha curtir seus melhores momentos ao lado de quem você ama!",
        userId: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4"
    },
    {
        id: "45334-3242343-2322343-54654",
        title: "Americanas",
        body: "Promoções todos os dias e com os melhores preços, venha conferir",
        userId: "fgregrgth-4353htrh-btb4tht4b-b4t4b"
    }
]


// Exercício 7 - Construa um endpoint que retorne os posts criados no exercício anterior.

app.get("/posts", (req: Request, res: Response) => {

    if(!posts.length){
       res.status(401).send("Não tem posts.")
    }

    res.status(201).send(posts)
})

// Exercício 8 - Construa um endpoint que retorne os posts de um usuário em particular.

app.get("/post/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(!user) {
        return res.status(400).send("Entre com userId válido.")
     } else if(post.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(post)   
})


app.listen(3000, () => {

    console.log("A porta 3000 está rodando! http://localhost:3000")
})

