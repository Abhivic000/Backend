const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs')
const port = 3000;

// relative absolute
// console. log(__dirname);
const staticPath = path.join(__dirname, "../public");
//builtin middleware
app.set("view engine");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get("/about", (req, res) => {
    res.render("about", {
        name: req.query.name,
        age: req.query.age
    });
});

app.get("/", (req, res) => {
    res.send([
        {
            id: 1,
            name: "abhi",
        },
        {
            id: 2,
            name: "abhi2",
        },
    ]);
});

app.get("/", (req, res) => {
    res.json({
        id: 1,
        name: "abhi",
    });
});

app.get("/", (req, res) => {
    res.status(200).send("welcome to my home page");
});

app.get("/about", (req, res) => {
    res.status(200).send("welcome to my about page");
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Opps this is not the pg",
    });
});

app.listen(port, () => {
    console.log(`listen on ${port}`);
});