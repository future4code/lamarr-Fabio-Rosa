import React, {useState} from 'react'
import './style.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [coment,setComent]=useState("") 

  const onClickCurtida = () => {
    setCurtido(!curtido) 
    console.log('Curtiu!')
    if (!curtido){
      setnumeroCurtidas(numeroCurtidas+1)  
    }else{
      setnumeroCurtidas(numeroCurtidas-1) 
    }
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    console.log(comentando)
  }
  
  //função ativada pelo botão enviar da seção comentário
  const aoEnviarComentario = () => {
    setComentando(false)
    if (coment!==""){ //-->Testa se comentario não esta vazio
      setNumeroComentarios(numeroComentarios + 1) //--> Atualiza numero comentarios
    }
    setComent("") // --> esvazia comentário 
  }
  
  // Função que atualiza valor do comentário ao ser digitado pegando o valor do <input> - e.target.value
  const handleInputComent=(e)=>{
    setComent(e.target.value) //--> Atualiza valor de coment digitado pelo usuario
    console.log(coment);
  }
//seleciona icone de acordo com curtido
  let iconeCurtida
  if(curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }
  
  //gera componte Seça~Comentarios e passa os atributos para props!
  let componenteComentario
  if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleInputComent} valor={coment}/>
    }
    
  return(

    <div className = 'PostContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}

    </div>
  )
}


export default Post