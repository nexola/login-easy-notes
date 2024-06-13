import "./index.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>
        Easy Notes <span>✍🏼</span>
      </h1>
    </div>
  );
}

function Form() {
  return (
    <form>
      <div className="input">
        <label>Username</label>
        <input />
      </div>
      <div className="input">
        <label>Password</label>
        <input type="password" />
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <label>Continuar logado?</label>
      </div>
      <div className="buttons">
        <button className="cadastro">Cadastrar</button>
        <button className="login">Logar</button>
      </div>
    </form>
  );
}

export default App;
