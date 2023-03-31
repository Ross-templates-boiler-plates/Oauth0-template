import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
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
        <button onClick={callBackEnd}>call BackEnd</button>
      </div>
    </div>
  );
};

export default App;
