import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  const [message, setMessage] = useState("No message from BackEnd yet");
  const callBackEnd = async () => {
    const url = "http://localhost:5000/api";
    const { data } = await axios.get(url);
    setMessage(data);
  };

  return (
    <div className="App">
      Welcome to FrontEnd <div>{message}</div>
      <div>
        <button onClick={() => loginWithPopup()}>Log in with popup</button>
      </div>
      <div>
        <button onClick={() => loginWithRedirect()}>Login with redirect</button>
      </div>
      <div>
        <button onClick={() => logout()}>logout</button>
      </div>
      <div>
        <button onClick={callBackEnd}>call BackEnd</button>
      </div>
      <div>User is: {isAuthenticated ? "Logged in" : "not logged in"}</div>
      {isAuthenticated && (
        <div style={{ textAlign: "start" }}>
          {" "}
          {JSON.stringify(user, null, 2)}
        </div>
      )}
    </div>
  );
};

export default App;
