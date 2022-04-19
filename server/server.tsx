const express = require("express");
const env = require("dotenv").config();
var cors = require("cors");

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use("/api/login", require("./routes/authenticationRoute.jsx"));
app.use("/api/tweets", require("./routes/tweetRoute.jsx"));

app.listen(port, () => console.log(`Server started on port ${port}`));
