var express = require('express');
const Player = require('./models/Player')
const Game = require('./models/Game')

const body = require('body-parser')
app.use(body())

app.route('/')
    .all(async (req, res) => {
    })

app.route('/players')
    .get(async (req, res) => {
        const players = await Player.find() // On récupère tout les player
        await res.json(players)
    })
    .post(async (req, res) => {
        const id = req.body.id; // récupération des variables du body
        const name = req.body.name;
        const email = req.body.email;
        const gameWin = req.body.gameWin;
        const gameLost = req.body.gameLost;
        const createdAt = req.body.createdAt;

        if (!id || !name || !email || !gameWin || !gameLost || !createdAt) { // on vérifie que les trois variables sont présentes
            res.send('Il manque un argument')
            return
        }

        const nouveau_player = new Player({ // création d'un objet représentant notre nouveau player
            id: id,
            name: name,
            email: email,
            gameWin: gameWin,
            gameLost: gameLost,
            createdAt: createdAt,
        })

        await nouveau_player.save() // sauvegarde asynchrone du nouveau player
        res.json(nouveau_player)
        return

    })

app.route('/games')
    .get(async (req, res) => {
        const games = await Livres.find() // On récupère tout les livres
        await res.json(games)
    })
    .post(async (req, res) => {
        const id = req.body.id; // récupération des variables du body
        const mode = req.body.mode;
        const name = req.body.name;
        const status = req.body.status;
        const createdAt = req.body.createdAt;
        const currentPlayerId = req.body.currentPlayerId

        if (!id || !mode || !name || !status || !createdAt || !currentPlayerId) { // on vérifie que les trois variables sont présentes
            res.send('Il manque un argument')
            return
        }

        const nouveau_player = new Player({ // création d'un objet représentant notre nouveau game
            id: id,
            mode: mode,
            name: name,
            status: status,
            createdAt: createdAt,
            currentPlayerId: currentPlayerId,
        })

        await nouveau_game.save() // sauvegarde asynchrone du nouveau game
        res.json(nouveau_game)
        return

    })

app.route('/player/:player_id')
    .get(async (req, res) => {
        const id = req.params.id // on récupère la valeure dans l'url
        const palyer = await Player.findOne({ _id: id }) // on récupère le player grâce à son _id
        res.json(player)

    })
    .delete(async (req, res) => {
        const id = req.params.id
        const suppr = await Player.deleteOne({ _id: id })
        res.json(suppr)

    })
    .patch(async (req, res) => {
        const id = req.params.id
        const player = await Player.findOne({ _id: id }) // on récupere le player pour pouvoir le modifier

        // on récupère les valeurs potentiellement modifiées
        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const gameWin = req.body.gameWin;
        const gameLost = req.body.gameLost;
        const createdAt = req.body.createdAt;


        // on vérifie maintenant si les valeurs sont remplies, si elles le sont on modifie l'ancienne valeure par la nouvelle

        if (id) {
            player.id = id
        }
        if (name) {
            player.name = name
        }
        if (email) {
            player.email = email
        }
        if (gameWin) {
            player.gameWin = gameWin
        }
        if (gameLost) {
            player.gameLost = gameLost
        }
        if (createdAt) {
            player.createdAt = createdAt
        }

        await player.save() // on sauvegarde les modifications

        res.json(player)
    })

app.route('/game/:game_id')
    .get(async (req, res) => {
        const id = req.params.id // on récupère la valeure dans l'url
        const game = await Game.findOne({ _id: id }) // on récupère le game grâce à son _id
        res.json(game)

    })
    .delete(async (req, res) => {
        const id = req.params.id
        const suppr = await Game.deleteOne({ _id: id })
        res.json(suppr)

    })
    .patch(async (req, res) => {
        const id = req.params.id
        const game = await Game.findOne({ _id: id }) // on récupere le game pour pouvoir le modifier

        // on récupère les valeurs potentiellement modifiées
        const id = req.body.id;
        const mode = req.body.mode;
        const name = req.body.name;
        const status = req.body.status;
        const createdAt = req.body.createdAt;
        const currentPlayerId = req.body.currentPlayerId;

        // on vérifie maintenant si les valeurs sont remplies, si elles le sont on modifie l'ancienne valeure par la nouvelle

        if (id) {
            game.id = id
        }
        if (mode) {
            game.mode = mode
        }
        if (name) {
            game.name = name
        }
        if (status) {
            game.status = status
        }
        if (createdAt) {
            game.createdAt = createdAt
        }
        if (currentPlayerId) {
            game.currentPlayerId = currentPlayerId
        }

        await game.save() // on sauvegarde les modifications

        res.json(game)
    })