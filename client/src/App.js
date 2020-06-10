import React, { useState, useEffect } from "react";
import "./App.css";
import $ from "jquery";
import {
  github,
  gitlab,
  bitbucket,
  facebook,
  instagram,
  twitter,
} from "./helper/apicall";

const App = () => {
  const [username, setUsername] = useState("");
  const [githubStatus, setGithubStatus] = useState("");
  const [gitlabStatus, setGitlabStatus] = useState("");
  const [bitbucketStatus, setBitbucketStatus] = useState("");
  const [facebookStatus, setFacebookStatus] = useState("");
  const [instagramStatus, setInstagramStatus] = useState("");
  const [twitterStatus, setTwitterStatus] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    github(username).then((data) => {
      if (data.error === "Invalid Username") {
        setGithubStatus("Invalid");
      } else if (data.error === "Username Taken") {
        setGithubStatus("Taken");
      } else {
        setGithubStatus("Available");
      }
    });

    gitlab(username).then((data) => {
      if (data.error === "Invalid Username") {
        setGitlabStatus("Invalid");
      } else if (data.error === "Username Taken") {
        setGitlabStatus("Taken");
      } else {
        setGitlabStatus("Available");
      }
    });

    bitbucket(username).then((data) => {
      if (data.error === "Invalid Username") {
        setBitbucketStatus("Invalid");
      } else if (data.error === "Username Taken") {
        setBitbucketStatus("Taken");
      } else {
        setBitbucketStatus("Available");
      }
    });

    facebook(username).then((data) => {
      if (data.error === "Invalid Username") {
        setFacebookStatus("Invalid");
      } else if (data.error === "Username Taken") {
        setFacebookStatus("Taken");
      } else {
        setFacebookStatus("Available");
      }
    });

    instagram(username).then((data) => {
      if (data.error === "Invalid Username") {
        setInstagramStatus("Invalid");
      } else if (data.error === "Username Taken") {
        setInstagramStatus("Taken");
      } else {
        setInstagramStatus("Available");
      }
    });

    twitter(username).then((data) => {
      if (data.error === "Invalid Username") {
        setTwitterStatus("Invalid");
      } else if (data.error === "Username Taken") {
        setTwitterStatus("Taken");
      } else {
        setTwitterStatus("Available");
      }
    });
  };

  const githubLogo = (githubStatus) => {
    if (githubStatus === "Invalid") {
      return require("./assets/githubinvalid.svg");
    } else if (githubStatus === "Taken") {
      return require("./assets/githubtaken.svg");
    } else {
      return require("./assets/github.svg");
    }
  };

  const gitlabLogo = (gitlabStatus) => {
    if (gitlabStatus === "Invalid") {
      return require("./assets/gitlabinvalid.svg");
    } else if (gitlabStatus === "Taken") {
      return require("./assets/gitlabtaken.svg");
    } else {
      return require("./assets/gitlab.svg");
    }
  };

  const bitbucketLogo = (bitbucketStatus) => {
    if (bitbucketStatus === "Invalid") {
      return true; // Change Logo
    } else if (bitbucketStatus === "Taken") {
      return true;
    } else {
      return true;
    }
  };

  const facebookLogo = (facebookStatus) => {
    if (facebookStatus === "Invalid") {
      return require("./assets/facebookinvalid.svg");
    } else if (facebookStatus === "Taken") {
      return require("./assets/facebooktaken.svg");
    } else {
      return require("./assets/facebook.svg");
    }
  };

  const instagramLogo = (instagramStatus) => {
    if (instagramStatus === "Invalid") {
      return require("./assets/instagraminvalid.svg");
    } else if (instagramStatus === "Taken") {
      return require("./assets/instagramtaken.svg");
    } else {
      return require("./assets/instagram.svg");
    }
  };

  const twitterLogo = (twitterStatus) => {
    if (twitterStatus === "Invalid") {
      return require("./assets/twitterinvalid.svg");
    } else if (twitterStatus === "Taken") {
      return require("./assets/twittertaken.svg");
    } else {
      return require("./assets/twitter.svg");
    }
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
      <div className="repoplatforms col">
        <img src={githubLogo(githubStatus)} className="icon" alt="Github" />

        <img src={gitlabLogo(gitlabStatus)} className="icon" alt="Gitlab" />
      </div>
      <div className="socialplatforms col">
        <img
          src={facebookLogo(facebookStatus)}
          className="icon available"
          alt="Facebook"
        />
        <img
          src={instagramLogo(instagramStatus)}
          className="icon"
          alt="Instagram"
        />
        <img src={twitterLogo(twitterStatus)} className="icon" alt="Twitter" />
      </div>
      <footer>
        <a href="http://github.com/dweep612/nameprufer" target="_blank">
          <button className="btn">OPEN SOURCED ON GITHUB</button>
        </a>
      </footer>
    </div>
  );
};

export default App;
