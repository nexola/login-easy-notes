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
    <div>
      <h1>Easy Notes ✍️</h1>
    </div>
  );
}

function Form() {
  return (
    <form>
      <div>
        <label>Username</label>
        <input></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password"></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <label>Continuar logado?</label>
      </div>
      <div>
        <button>Cadastrar</button>
        <button>Logar</button>
      </div>
    </form>
  );
}

export default App;
