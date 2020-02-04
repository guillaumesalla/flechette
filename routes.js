var express = require('express');
const gameRouter = require('./routers/game.js')
const Player = require('./models/Player')
const Game = require('./models/Game')


let hostname = 'localhost';
let port = 3000;

let app = express();
let myRouter = express.Router();

myRouter.route('/')
    .all(function (req, res) {
        res.json({ message: "Bienvenue sur l'API ", methode: req.method });
        // CODE
    });

myRouter.route('/players')
    .get(function (req, res) {
        Player.find({}, function (err, r) {
            if (err) {
                return handleError(err);
            }
            else {
                res.json({ message: r, methode: req.method });
            }
        });
    })
    .post(function (req, res) {
        Player.create({ id: req.body.id, name: req.body.name, email: req.body.email, gameWin: req.body.gameWin, gameLost: req.body.gameLost, createdAt: req.body.createdAt }, function (err, r) {
            if (err) {
                return handleError(err);
            }
            else {
                res.json({
                    message: "Ajout d'un nouveau joueur à la liste",
                    id: req.body.id,
                    name: req.body.name,
                    email: req.body.email,
                    gameWin: req.body.gameWin,
                    gameLost: req.body.gameLost,
                    createdAt: req.body.createdAt
                });
            }
        });

    })

myRouter.route('/games')
    .get(function (req, res) {
        Game.find({}, function (err, r) {
            if (err) {
                return handleError(err);
            }
            else {
                res.json({ message: r, methode: req.method });
            }
        });
    })
    .post(function (req, res) {
        Game.create({ id: req.body.id, mode: req.body.mode, name: req.body.name, status: req.body.status, createdAt: req.body.createdAt, }, function (err, r) {
            if (err) {
                return handleError(err);
            }
            else {
                res.json({
                    message: "Ajout d'un nouveau jeu à la liste",
                    id: req.body.id,
                    mode: req.body.mode,
                    name: req.body.name,
                    status: req.body.status,
                    createdAt: req.body.createdAt
                });
            }
        });
    })

myRouter.route('/player/:player_id')
    .get(function (req, res) {
        Player.findById(req.params.player_id, function (err, r) {
            if (err)
                res.send(err);
            res.json({ message: r });
        });
    })
    .delete(function (req, res) {
        Player.deleteOne({ _id: req.params.troc_id }, function (err, r) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Bravo,joueur supprimée" });
        });
    });

myRouter.route('/game/:game_id')
    .get(function (req, res) {
        Game.findById(req.params.game_id, function (err, r) {
            if (err)
                res.send(err);
            res.json({ message: r });
        });
    })
    .delete(function (req, res) {
        Game.deleteOne({ _id: req.params.game_id }, function (err, r) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Bravo,partie supprimée" });
        });
    });