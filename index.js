const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send(
        "Working"
    )
})






app.listen(8080,()=>{
    console.log("listning to port 4532")
})



