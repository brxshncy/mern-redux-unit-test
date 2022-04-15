const express = require("express");
const env = require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));
