import express, { Request, response, Response } from 'express';
import cors from 'cors';
import { users } from './data';
import { idText } from 'typescript';

const app = express()
app.use(express.json())
app.use(cors())
/*
//app => variavel do express ativação
//get => metodo http (get / post )
//"/teste/:id" => caminho para fazer a nossa requisão
// o que tiver dentro da callback => o que vc quer que faca ao bater no endpoint



// ---------- EXPLICAÇÃO EXPRESS --------- 
app.get("/teste/:id",(req:Request, res:Response)=>{
    // o que a gente quer que aconteca quando bater no caminho
    const id = req.params.id
    const password = req.headers.password

    console.log(id, password)
    //resposta que sera retornada da nossa requisição
    res.status(201).send("Deu bom")
})
*/
// ----------- GET ALL PLAYLIST ----------
       /*
        //caminho     
app.get("/playlists", (req: Request, res: Response) => {
        // O que voce quer que aconteça, ao bater nesse caminho
    const playlist = users.map((user)=>{
        return user.playlists
    })
   
    res.status(200).send(playlist)
})
*/
//------------ GET PLAYLIST TRACKS --------

app.get("/playlist/tracks",(req: Request, res: Response)=>{
    //o que quer que faça quando bate no caminho
    const playlistId = req.query.idPlaylist
    const userId = req.headers.iduser
    
    if(!playlistId && !userId){
        res.status(400).send("passar id de ususario e da playlist obrigatoriamente!")
    }

    const userFiltered = users.find((user) =>{
        return user.id === userId
    })

    let playlistFiltered

    if(userFiltered){
            playlistFiltered = userFiltered.playlists.find((playlist)=>{
                return playlist.id === playlistId
            })
    }else{
        res.status(400).send("Não há um usuario com id informado")
    }

    if(playlistFiltered){
        const alltrakcs = playlistFiltered.tracks
        res.status(200).send(alltrakcs)
    }else{
        res.status(400).send("Não há playlist com id informado")
    }

    const dados = console.log(playlistId, userId)
    //resposta do cliente
    res.status(200).send("deu bom")
})


//------------ DELETE PLAYLIST ------------

app.delete('/playlists/playlist', (req: Request, res: Response) => {

    const playlistId = req.query.idPlaylist
    const userId = req.headers.iduser //header nao pode pegar como CameCase

    if (!playlistId || !userId) {
        res.status(400).send("Complete todos os parametros da requisição")
    }

    const userFiltered = users.find((user) => {
        return user.id === userId
    })

    let playlistsActual

    if (userFiltered) {
        playlistsActual = userFiltered.playlists.filter((playlist) => {
            return playlist.id !== playlistId
        })
        userFiltered.playlists = playlistsActual
        res.status(200).send(userFiltered)

    } else {
        res.status(400).send("usuario não encontrando")
    }

    


    res.status(200).send("deu bom");

})

//------------- DELETE TRACK --------------

app.delete('/playlists/tracks', (req: Request, res: Response) => {

    const playlistId = req.query.idPlaylist
    const userId = req.headers.iduser
    const trackId = req.query.idTrack

    if (!playlistId || !userId || !trackId ) {
        res.status(400).send("Complete todos os parametros da requisição")
    }

    const userFiltered = users.find((user)=>{
        return user.id === userId
    })

    let playlistFiltered

    if(userFiltered){
        playlistFiltered = userFiltered.playlists.find((playlist)=>{
            return playlist.id === playlistId
        })
        
        
    }else{
        res.status(400).send("usuario não encontrado")
    }

    let trackDeleted

    if(playlistFiltered){
        
        trackDeleted = playlistFiltered.tracks.find((track)=>{
            return track.id === trackId
        })
    }

    if(trackDeleted && playlistFiltered){
        const trackActual = playlistFiltered.tracks.filter((track)=>{
            return track.id !== trackId
        })

        playlistFiltered.tracks = trackActual
        res.status(200).send(playlistFiltered)
    }else{
        res.status(400).send("Não há uma faixa com id informado")
    }
})


//------------OUVINDO A PORTA CONFIG INICIAL EXPRESS----------------

app.listen('3003', () => {
    // O que voce quer que aconteça, ao bater nesse caminho
    console.log("executado com sucesso");
});
