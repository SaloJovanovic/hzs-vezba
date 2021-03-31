const express = require('express');
const app = express();
const konektujBazu = require('./baza/baza');
//Sheme

const PORT = process.env.PORT || 3000;
const hostname = '0.0.0.0';

app.listen(PORT, hostname, () => {
    console.log(`Server slusa na portu ${PORT}`);
});

//JSON
app.use(express.json());

//Konekcija sa bazom
konektujBazu();

//Povezivanje sa frontom
app.use(express.static('front'));

//REQUESTOVI