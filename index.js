const express = require('express');
const app = express();
const port = 3001;

const server = app.listen(port, ()=> console.log("Server listen on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next)=> {

    var payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);
});