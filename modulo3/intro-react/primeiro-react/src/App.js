import foto from './img/fabio.jpg';
import './App.css';

function App() {
  const apertouBotao = () => {
    alert("Boa noite!");
  };
  return (
    <div className="App">
      <header className="header">
      <h1>Olá! Eu sou o Fabio!</h1>
        <img src={foto} className="minha-foto" alt="foto" />
        <p>
          Este é o meu Primeiro Site React
        </p>
        <button className="botao"onClick={apertouBotao}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
