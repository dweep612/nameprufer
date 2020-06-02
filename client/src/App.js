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
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [usernameAvai, setUsernameAvai] = useState(false);

  useEffect(() => {
    if (invalidUsername) {
      console.log("Invalid");
    }
    if (usernameTaken) {
      console.log("Taken");
    }
    if (usernameAvai) {
      console.log("Available");
    }
  }, [invalidUsername, usernameTaken, usernameAvai]);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setInvalidUsername(false);
    setUsernameTaken(false);
    setUsernameAvai(false);

    github(username).then((data) => {
      if (data.error === "Invalid Username") {
        setInvalidUsername(true);
      } else if (data.error === "Username Taken") {
        setUsernameTaken(true);
      } else {
        setUsernameAvai(true);
      }
    });

    // gitlab(username).then((data) => {
    //   if (data.error === "Invalid Username") {
    //     setInvalidUsername(true);
    //   } else if (data.error === "Username Taken") {
    //     setUsernameTaken(true);
    //   } else {
    //     setUsernameAvai(true);
    //   }
    // });

    // bitbucket(username).then((data) => {
    //   if (data.error === "Invalid Username") {
    //     setInvalidUsername(true);
    //   } else if (data.error === "Username Taken") {
    //     setUsernameTaken(true);
    //   } else {
    //     setUsernameAvai(true);
    //   }
    // });

    // facebook(username).then((data) => {
    //   if (data.error === "Invalid Username") {
    //     setInvalidUsername(true);
    //   } else if (data.error === "Username Taken") {
    //     setUsernameTaken(true);
    //   } else {
    //     setUsernameAvai(true);
    //   }
    // });

    // instagram(username).then((data) => {
    //   if (data.error === "Invalid Username") {
    //     setInvalidUsername(true);
    //   } else if (data.error === "Username Taken") {
    //     setUsernameTaken(true);
    //   } else {
    //     setUsernameAvai(true);
    //   }
    // });

    // twitter(username).then((data) => {
    //   if (data.error === "Invalid Username") {
    //     setInvalidUsername(true);
    //   } else if (data.error === "Username Taken") {
    //     setUsernameTaken(true);
    //   } else {
    //     setUsernameAvai(true);
    //   }
    // });
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
