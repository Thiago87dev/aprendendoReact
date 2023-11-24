import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import UseState from "./components/UseState";

function App() {
  const name = "Thiagooo";
  const newName = name.toUpperCase();

  const url =
    "https://enemaneiras.com.br/wp-content/uploads/2021/09/imagem-png-com-transparencia.png.webp";

  const mult = (a, b) => a * b;
  return (
    <div className="App">
      <h1>Olá {newName}</h1>
      <p>Meu primeiro app</p>
      <p>2+2 é igual a {2 + 2}</p>
      <p>2x3 é igual a {mult(2, 3)}</p>
      <img src={url} alt="et" />
      <HelloWorld />
      <SayMyName nome={name} />
      <SayMyName nome="Maria" />
      <Pessoa
        nome="Etvaldo"
        idade="25"
        profissao="abdusidor"
        foto="https://enemaneiras.com.br/wp-content/uploads/2021/09/imagem-png-com-transparencia.png.webp"
      />
      <List/>

      {/* eventos */}
      <h1>Testando eventos</h1>
      <Evento numero='1'/>
      <Evento numero='2'/>
      <Form/>
      <UseState/>
    </div>
  );
}

export default App;
