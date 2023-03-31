import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();

  //states
  const [generalMassage, setGeneralMassage] = useState(
    "No message from unprotected api on BackEnd yet"
  );
  const [protectedMassage, setProtectedMassage] = useState(
    "No message from protected api on BackEnd yet"
  );
  const [accessToken, setAccessToken] = useState("No token yet");
  const [IdToken, setIdToken] = useState("No token yet");

  //call back ends
  const callBackEnd = async () => {
    const url = "http://localhost:5001/api/unprotected";

    let AccessTokenTemp = "";
    if (isAuthenticated) {
      AccessTokenTemp = await getAccessTokenSilently();
      setAccessToken(AccessTokenTemp);
    }
    const { data } = await axios.get(url, {
      headers: {
        authorization: `Bearer ${AccessTokenTemp}`, //will fail if I send id token
      },
    });
    setGeneralMassage(data);
  };

  const callProtectedBackEnd = async () => {
    const url = "http://localhost:5001/api/protected";
    let AccessTokenTemp = "";
    if (isAuthenticated) {
      AccessTokenTemp = await getAccessTokenSilently();
      setAccessToken(AccessTokenTemp);
    }

    const { data } = await axios.get(url, {
      headers: {
        authorization: `Bearer ${AccessTokenTemp}`, //will fail if I send id token
      },
    });
    setProtectedMassage(data);
  };

  //show tokens
  const showAccessToken = async () => {
    if (isAuthenticated) {
      const temp = await getAccessTokenSilently();
      setAccessToken(temp);
    }
  };
  const showIdToken = async () => {
    if (isAuthenticated) {
      const temp1 = await getIdTokenClaims();
      setIdToken(temp1!.__raw);
    }
  };

  return (
    <div className="App">
      Welcome to FrontEnd <div>{generalMassage}</div>
      <div>{protectedMassage}</div>
      <div>
        <button onClick={() => showAccessToken()}>show Access Token</button>
      </div>
      <div>
        <button onClick={() => showIdToken()}>show Id Token</button>
      </div>
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
        <button onClick={callBackEnd}>call BackEnd everyone</button>
      </div>
      <div>
        <button onClick={callProtectedBackEnd}>
          call BackEnd only if you are logged in
        </button>
      </div>
      <div>User is: {isAuthenticated ? "Logged in" : "not logged in"}</div>
      {isAuthenticated && (
        <div style={{ textAlign: "start" }}>
          {" "}
          {JSON.stringify(user, null, 2)}
        </div>
      )}
      <div></div>
      {isAuthenticated && (
        <div style={{ textAlign: "start", marginTop: "5rex" }}>
          {" "}
          accessToken: {accessToken}
          <div style={{ textAlign: "start", marginTop: "5rex" }}>
            IdToken: {IdToken}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
