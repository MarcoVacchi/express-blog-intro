const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Server del mio blog");
    res.send("Server del mio blogaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
});

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare
//  titolo, contenuto, immagine e tags (tags è un array di stringhe)


app.get("/bacheca", (req, res) => {
    //console.log("bacheca del mio blog"); prova per vedere se funziona questa rotta;
    //res.send("bacheca del mio blogaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// const dolci = [
//     {
//         name: 
//     }
// ];
});


app.listen(port, () => {
    console.log("sono un server attivo sulla porta"+ " " + port);

})

//console.log("Server del mio ciao")