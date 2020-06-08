import React, { useState, useEffect } from "react";
import "./App.css";
import {
  github,
  gitlab,
  bitbucket,
  facebook,
  instagram,
  twitter,
} from "./helper/apicall";

function App() {
  const [username, setUsername] = useState("");
  const [usernameStatus, setUsernameStatus] = useState([]);

  useEffect(() => {
    console.log(usernameStatus);
  }, [usernameStatus]);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUsernameStatus([]);

    github(username).then((data) => {
      if (data.error === "Invalid Username") {
        setUsernameStatus((prev) => [...prev, "GInvalid"]);
      } else if (data.error === "Username Taken") {
        setUsernameStatus((prev) => [...prev, "GTaken"]);
      } else {
        setUsernameStatus((prev) => [...prev, "GAvailable"]);
      }
    });

    gitlab(username).then((data) => {
      if (data.error === "Invalid Username") {
        setUsernameStatus((prev) => [...prev, "GLInvalid"]);
      } else if (data.error === "Username Taken") {
        setUsernameStatus((prev) => [...prev, "GLTaken"]);
      } else {
        setUsernameStatus((prev) => [...prev, "GLAvailable"]);
      }
    });

    bitbucket(username).then((data) => {
      if (data.error === "Invalid Username") {
        setUsernameStatus((prev) => [...prev, "BInvalid"]);
      } else if (data.error === "Username Taken") {
        setUsernameStatus((prev) => [...prev, "BTaken"]);
      } else {
        setUsernameStatus((prev) => [...prev, "BAvailable"]);
      }
    });

    facebook(username).then((data) => {
      if (data.error === "Invalid Username") {
        setUsernameStatus((prev) => [...prev, "FInvalid"]);
      } else if (data.error === "Username Taken") {
        setUsernameStatus((prev) => [...prev, "FTaken"]);
      } else {
        setUsernameStatus((prev) => [...prev, "FAvailable"]);
      }
    });

    instagram(username).then((data) => {
      if (data.error === "Invalid Username") {
        setUsernameStatus((prev) => [...prev, "IInvalid"]);
      } else if (data.error === "Username Taken") {
        setUsernameStatus((prev) => [...prev, "ITaken"]);
      } else {
        setUsernameStatus((prev) => [...prev, "IAvailable"]);
      }
    });

    twitter(username).then((data) => {
      if (data.error === "Invalid Username") {
        setUsernameStatus((prev) => [...prev, "TInvalid"]);
      } else if (data.error === "Username Taken") {
        setUsernameStatus((prev) => [...prev, "TTaken"]);
      } else {
        setUsernameStatus((prev) => [...prev, "TAvailable"]);
      }
    });
  };

  return (
    <div className="container">
      <header>
        <h1>nameprufer.com</h1>
      </header>

      <div className="search">
        <input
          type="search"
          className="searchbar"
          id="searchbar"
          placeholder="Enter Username"
          spellCheck="false"
          onChange={handleChange}
          value={username}
          autoFocus
          required
        />
        <button onClick={onSubmit} className="searchButton" id="check">
          Check
        </button>
      </div>
      <div className="title">
        <p>
          Check Domain name & Username Availability across Popular Platforms.
        </p>
      </div>
      <div className="repoplatforms">
        <div className="col">
          <img src={require("./assets/github.svg")} alt="Github" />
          <img src={require("./assets/gitlab.svg")} alt="Gitlab" />
        </div>
      </div>
      <div className="socialplatforms">
        <div className="col">
          <img src={require("./assets/facebook.svg")} alt="Facebook" />
          <img src={require("./assets/instagram.svg")} alt="Instagram" />
          <img src={require("./assets/twitter.svg")} alt="Twitter" />
        </div>
      </div>
      <footer>
        <a href="http://github.com/dweep612/nameprufer" target="_blank">
          <button className="btn">OPEN SOURCED ON GITHUB</button>
        </a>
      </footer>
    </div>
  );
}

export default App;
