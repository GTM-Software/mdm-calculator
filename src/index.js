"use strict"
const welcome = require("./calculator/calculator");
const LOG = require("./logger/Logger");
const http = require("http");
const fs = require("fs");

const dte = require("./simpledate");

const user = {
    "fistName" : "Mohit",
    "lastName" : "Singh",
    "mobile" : "09876543211",
};

const mySrver = http.createServer((req, res) => {

    console.log(welcome);
        const log = `${req.url}:request received`;
        LOG.INFO(log);

        LOG.configureDateFormat(LOG.ERROR);
        LOG.WARN(log);
        LOG.ERROR(log);
        // Show Different Content to Diffent URls
        switch(req.url){
            case "/":
            res.end(`<h1>Hello ${user.fistName}  Welcome to Mid Day Meal Calculator !!!</h1>`);
            break;
            case "/profile":
            res.end(`<h1>Profile Page of  ${user.fistName} | Contact  ${user.mobile} ]</h1> `);
            break;
            default:
            res.end(`<h1>404 : Page Not Found</h1>`);
        }
     
    });

    mySrver.listen(3000, () => {
        console.log("Server is lisening at 3000 port")
    });



