const fetch = require("node-fetch");

/*****************************
 * REPO HOSTING SERVICES
 ****************************/

exports.githubCheck = (req, res) => {
  var githubRegex = /^[a-zA-Z0-9]*$\w{0,38}/g;

  if (
    githubRegex.test(req.params.username) &&
    req.params.username.length <= 39
  ) {
    fetch("https://github.com/" + req.params.username)
      .then((response) => {
        if (response.status === 404) {
          return res.json({ success: "Username Available" });
        } else {
          return res.json({ error: "Username Taken" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(406).json({ error: "Invalid Username" });
  }
};

exports.gitlabCheck = (req, res) => {
  var gitlabRegex = /^[a-zA-Z0-9]*$\w{0,254}/g;

  if (
    gitlabRegex.test(req.params.username) &&
    req.params.username.length <= 255
  ) {
    fetch("https://gitlab.com/" + req.params.username)
      .then((response) => {
        if (response.url === "https://gitlab.com/users/sign_in") {
          return res.json({ success: "Username Available" });
        } else {
          return res.json({ error: "Username Taken" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(406).json({ error: "Invalid Username" });
  }
};

exports.bitbucketCheck = (req, res) => {
  var bitbucketRegex = /^[a-zA-Z0-9]*$\w{0,38}/g;

  if (
    bitbucketRegex.test(req.params.username) &&
    req.params.username.length <= 39
  ) {
    fetch("https://bitbucket.org/" + req.params.username)
      .then((response) => {
        if (response.status === 404) {
          return res.json({ success: "Username Available" });
        } else {
          return res.json({ error: "Username Taken" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(406).json({ error: "Invalid Username" });
  }
};

/*****************************
 * SOCIAL MEDIA
 ****************************/

exports.facebookCheck = (req, res) => {
  var facebookRegex = /^[a-zA-Z0-9.]*$\w{0,}/g;

  if (
    facebookRegex.test(req.params.username) &&
    req.params.username.length >= 5
  ) {
    fetch("https://facebook.com/" + req.params.username)
      .then((response) => {
        if (response.status === 404) {
          return res.json({ success: "Username Available" });
        } else {
          return res.json({ error: "Username Taken" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(406).json({ error: "Invalid Username" });
  }
};

exports.instagramCheck = (req, res) => {
  var instagramRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{1,29}$/gim;

  if (instagramRegex.test(req.params.username)) {
    fetch("https://instagram.com/" + req.params.username)
      .then((response) => {
        if (response.status === 404) {
          return res.json({ success: "Username Available" });
        } else {
          return res.json({ error: "Username Taken" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(406).json({ error: "Invalid Username" });
  }
};

exports.twitterCheck = (req, res) => {
  var twitterRegex = /^[a-zA-Z0-9_]*$\w{0,14}/g;

  if (
    twitterRegex.test(req.params.username) &&
    req.params.username.length <= 15
  ) {
    fetch("https://twitter.com/" + req.params.username)
      .then((response) => {
        console.log(response);
        if (response.status === 404) {
          return res.json({ success: "Username Available" });
        } else {
          return res.json({ error: "Username Taken" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(406).json({ error: "Invalid Username" });
  }
};
