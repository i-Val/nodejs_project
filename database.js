const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect("mongodb+srv://entropy:benevolent@twitterclonecluster.jyveblg.mongodb.net/?retryWrites=true&w=majority")
        .then(()=> {
            console.log("database connection successful");
        })
        .catch(() => {
                console.log("database connection error");
            })
            }
        }

module.exports = new Database();