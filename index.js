const app = require("express")(); //import express package
// fonksiyon olduğu için parantez ekledik?
const PORT = 8080;
// period after app u can use http methods
// get http://localhost:8080/tshirt
// user requests that url then callback function handle the request
// request(incoming data) and response(outgoing data) object
app.get('/tshirt', (req,res)=> {
    res.status(200).send({ //respond is 200ok status code
        tshirt:'logo.jpg', //send data payload
        size:'large'
    }) 
});
// second endpoint post with dynamic url parameter
// POST request meaning create new data
app.post('/tshirt/:id',(req,res)=>{
    const { id } = req.params;
    const {logo} = req.body;
    // if we dont have any logo respond is
    if(!logo){
        res.status(418).send({message: 'We need a logo!'})
    }
    // if we have a logo respond is
    res.send({
        tshirt: 'logo with your ' + logo + 'and id of '+ id, 
    })
});


//listen on spesific port
app.listen(
    PORT, 
    () => console.log('its alive on http://localhost:' + PORT)
)  //optional second argument to listen

// result is can not get 
// thats beacuse we dont have any api endpoint set up yet but express still responding with an error messagge

