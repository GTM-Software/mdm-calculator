"use strict"
const welcome = require("./calculator/calculator");
const LOG = require("./logger/Logger");
const http = require("http");
const fs = require("fs");

const dte = require("./simpledate/SimpleDate");

const user = {
    "firstName" : "Mohit",
    "lastName" : "Singh",
    "mobile" : "09876543211",
};

const mySrver = http.createServer((req, res) => {
        const log = `${req.url}:request received`;
        LOG.INFO(log);
        
        // Show Different Content to Diffent URls
        switch(req.url){
            case "/":
            res.end(welcome.greet(user));
            break;
            case "/profile":
            res.end(`<h1>Profile Page of  ${user.firstName} | Contact  ${user.mobile} ]</h1> `);
            break;
            default:
            res.end(`<h1>404 : Page Not Found</h1>`);
        }
     
    });

    mySrver.listen(3000, () => {
        const logMsg = `Server is lisening at 3000 port`;
        console.log(logMsg);
        //LOG.INFO(logMsg);
    });
