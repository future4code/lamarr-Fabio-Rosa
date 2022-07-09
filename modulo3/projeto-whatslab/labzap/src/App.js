import './App.css';
import {Pai, AreaLaranja, Cabecalho, AreaMensagem, Rodape} from "./style"; 

function App() {
  return (
    <Pai>
      <Cabecalho><h1>LabZap</h1></Cabecalho>
      <AreaLaranja/>
        <AreaMensagem>
          <form>
            <label name="remetente"></label>
            <input type="text" id="remetente" name="remetente"/>
            <label name="mensagem"></label>
            <input type="text" id="mensagem" name="mensagem"/>
            <button>Enviar Mensagem</button>
          </form>
        </AreaMensagem>
      <AreaLaranja/>
    </Pai>
  );
}

export default App;
