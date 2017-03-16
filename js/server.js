const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const jsonParser = bodyParser.json();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let guesses = 5;

app.get('/fewestGuesses', (req, res) => {
    res.json({
        guesses
    });
});

app.post('/fewestGuesses', jsonParser, (req, res) => {
    if (guesses === 0 || req.body.guesses < guesses) {
        guesses = req.body.guesses;
    }
    res.json({
        guesses
    });
});

app.listen(process.env.PORT || 8081,  () => {
    'Listening on port 8081'
});
