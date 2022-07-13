import './App.css';
import {Pai, AreaLaranja, Cabecalho, AreaMensagem, Rodape} from "./style"; 

function App() {
  return (
    <Pai>
      <AreaLaranja/>
        <AreaMensagem>
          <form>
            <label name="remetente"></label>
            <input type="text" id="remetente" name="remetente"/>
            <label name="mensagem"></label>
            <input type="text" id="mensagem" name="mensagem"/>
            <button>Enviar</button>
          </form>
        </AreaMensagem>
      <AreaLaranja/>
    </Pai>
  );
}

export default App;
