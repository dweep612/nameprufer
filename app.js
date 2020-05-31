require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const usernamecheckRoute = require("./routes/usernamecheck");

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api", usernamecheckRoute);

// Server
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server Running at Port ${port}`));
