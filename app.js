const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Server del mio blog");
    res.send("Server del mio blogaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
});

app.listen(port, () => {

})
//console.log("Server del mio ciao")