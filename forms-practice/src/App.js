import logo from "./logo.svg";
import {useState} from 'react';
import "./App.css";

function App() {

  const [username, setUsername] = useState('Gosho');

  const usernameChangeHandler = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={usernameChangeHandler}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
            <button type="submit">Login</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
