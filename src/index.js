const Express = require("express");

const server = Express();
server.listen(3000,() =>{
    console.log("server starting at port 3000")
})