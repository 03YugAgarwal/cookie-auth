import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!Cookies.get("details")) {
      console.log("No cookie");
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCookie = () => {
    const details = username + password;
    Cookies.set("details", details, { expires: 10 });
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    Cookies.remove("details");
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {loggedIn && <button onClick={handleLogOut}>Log Out</button>}
      {!loggedIn &&<div>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="Username"
        />
        <input
          type="text"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />
        <button onClick={handleCookie}>Log In</button>
      </div>}
    </div>
  );
}

export default App;
