import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
/*
app.get("/[custom path]", (req, res) => {
    res.sendFile(`${__dirname}/public/[name of html file.html])
})
*/

app.listen(3000);