const express = require('express')

const mongoose = require('mongoose')
const Game = require('./models/Game') // on importe notre model
const Player = require('./models/Player') // on importe notre model
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

let app = express(); // création de l'objet représentant notre application express
let port = 8080;

app.get('/', function (req, res) { // création de la route sous le verbe get
    res.send('Hello world  ! ') // envoi de hello world a l'utilisateur
})

app.listen(port, () => { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne')
})