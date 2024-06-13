import { useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [keepLogged, setKeepLogged] = useState(false);

  const objLogin = {
    username,
    password,
    keepLogged,
  };

  function handleTogglePassword(e) {
    e.preventDefault();
    setVisiblePassword(!visiblePassword);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleToggleKeepLogged(e) {
    setKeepLogged(!keepLogged);
  }

  return (
    <form>
      <div className="input">
        <label>Username</label>
        <input onChange={handleChangeUsername} value={username} />
      </div>
      <div className="input">
        <label>Password</label>
        <div className="password">
          <input
            type={visiblePassword ? "text" : "password"}
            onChange={handleChangePassword}
            value={password}
          />
          <a href="./" onClick={handleTogglePassword}>
            {visiblePassword ? "👓" : "🕶️"}
          </a>
        </div>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          onChange={handleToggleKeepLogged}
          value={keepLogged}
        />
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
