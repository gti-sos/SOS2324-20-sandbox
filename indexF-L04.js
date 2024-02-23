let cool = require("cool-ascii-faces");
let express = require("express");

let bodyParser = require("body-parser");
let contactAPI = require("./api-contacts");

let app = express();

app.use(bodyParser.json());


const PORT = (process.env.PORT || 10000);

app.use("/",express.static("./public"));

app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1></body></html>`);
});

const API_BASE="/api/v1";

var contacts = [
    {
        name: "pepe",
        phone: "12345"
    },
    {
        name: "luis",
        phone: "23425"
    },
];

app.get(API_BASE+"/contacts", (req,res) =>{
    res.send(JSON.stringify(contacts));
});

app.post(API_BASE+"/contacts", (req,res)=>{
    let contact = req.body;
    contacts.push(contact);
    res.sendStatus(201,"Created");
});









app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}.`);
});

console.log(`Server initializing...`);
