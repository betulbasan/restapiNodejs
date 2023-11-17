const app = require("express")(); //import express package
// fonksiyon olduğu için parantez ekledik?
const PORT = 8080;

//listen on spesific port
app.listen(
    PORT, 
    () => console.log('its alive on http://localhost:' + PORT)
)  //optional second argument to listen

// result is can not get 
// thats beacuse we dont have any api endpoint set up yet but express still responding with an error messagge
