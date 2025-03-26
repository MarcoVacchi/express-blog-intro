const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Server del mio blog");
    res.send("Server del mio blogaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
});

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare
//  titolo, contenuto, immagine e tags (tags è un array di stringhe)

app.use(express.static("public"));

app.get("/bacheca", (req, res) => {

    //console.log("bacheca del mio blog"); prova per vedere se funziona questa rotta;
    //res.send("bacheca del mio blogaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    const dolci = [
        {
            titolo: "dolceUno",
            contenuto: "ciambellone",
            immagine: "img/ciambellone.jpeg",
            tags: ["crema","pistacchio","cioccolato"],
        }, {
            titolo: "spuntino",
            contenuto: "crackersDolci",
            immagine: "img/cracker_barbabietola.jpeg",
            tags: ["crackers","barbabietola"],
        }, {
            titolo: "carboidrati",
            contenuto: "paneFritto",
            immagine: "img/pane_fritto_dolce.jpeg",
            tags: ["pane","olio","frittura"],
        }, {
            titolo: "dolceDue",
            contenuto: "pastaBarbabietola",
            immagine: "img/pasta_barbabietola.jpeg",
            tags: ["pasta","barbabietola"],
        }, {
            titolo: "dolceTre",
            contenuto: "tortaPaesena",
            immagine: "img/torta_paesana.jpeg",
            tags: ["torta","zucchero","uova"],
        },
    ];

    res.json(dolci);
    
});


app.listen(port, () => {
    console.log("sono un server attivo sulla porta"+ " " + port);

})

//console.log("Server del mio ciao")