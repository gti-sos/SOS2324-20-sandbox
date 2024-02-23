const API_BASE="/api/v1"

var contacts= [
    {
        name: "pepe",
        phone: "12345"
    },
    {
        name:"luis",
        phone:"23456"
    }
]


module.exports = (app) =>{

    app.get(API_BASE+"/contacts",(req,res)=>{
        res.send(JSON.stringify(contacts))
    })
    
    app.post(API_BASE+"/contacts",(req,res)=>{
        let contact = req.body;
        contacts.push(contact);
        res.sendStatus(201,"Created")
    })
    
}