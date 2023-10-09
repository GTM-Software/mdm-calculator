"use strict"
const welcome = require("./calculator/calculator");
const http = require("http");
const fs = require("fs");

const user = {
    "fistName" : "Mohit",
    "lastName" : "Singh",
    "mobile" : "1234567890",
};
console.log(welcome);

welcome.greet("Ankur");

welcome.greet2("Master Ji");



const mySrver = http.createServer((req, res) => {
        const log = `${new Date()} :${req.url}: request received\n`;
        fs.appendFile("./log.txt", log, (err, data) => {
            res.end(`<h1>Hello ${user.fistName}  From Server</h1>`);

            if(err) {
                throw console.error(err);
            }
        });

        
        // Show Different Content to Diffent URls
        switch(req.url){
            case "/":
            res.end(`<h1>Hello ${user.fistName}  Welcome to Mid Day Meal Calculator</h1>`);
            break;
            case "/profile":
            res.end(`<h1>Profile Page of  ${user.fistName} | Contact  ${user.mobile} ]</h1> `);
            break;
            default:
            res.end(`<h1>404 : Page Not Found</h1>`);
        }
     
    });

    // const sendResponseText

    mySrver.listen(3000, () => {
        console.log("Server is lisening at 3000 port")
    });



