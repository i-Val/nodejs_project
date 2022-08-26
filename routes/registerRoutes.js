const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const User = require('../Schemas/UserSchema');

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
    
    res.status(200).render("register");
})
router.post("/", async (req, res, next) => {

    var firstname = req.body.firstname.trim();
    var lastname = req.body.lastname.trim();
    var username = req.body.username;
    var email = req.body.email.trim();
    var password = req.body.password.trim();

    var payload = req.body;

    if (firstname && lastname && username && email && password) {
        var user = await User.findOne({ 
            $or: [
                {username: username},
                {email: email}
            ]
         })
         .catch((err) => {
             console.log(error);

             payload.errorMessage = "Something went wrong";
            res.status(200).render("register", payload);
         });

         if(user == null) {
             //no user found
         }else{
             //user found
             if(email == user.email) {
                payload.errorMessage = "email already in use";
                res.status(200).render("register", payload);
             }else{
                payload.errorMessage = "username already in use";
             }
             res.status(200).render("register", payload);
         }
    } else {
        payload.errorMessage = "Make sure each field has a value";
        res.status(200).render("register", payload);
    }
})

module.exports = router;