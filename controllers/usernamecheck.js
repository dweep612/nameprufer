const fetch = require("node-fetch");

exports.githubCheck = (req, res) => {
  var githubRegex = /^[a-zA-Z0-9]\w{0,38}/g;

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
