'use strict';
var inquirer = require('inquirer');
const readline = require('readline');
const tmd = require('./engine/gamemodes/around-the-world')
const cricket = require('./engine/gamemodes/cricket')
const le301 = require('./engine/gamemodes/301')

class Gamemode {
    constructor() {
        this.joueurs = []
        this.tirsJoueurs = []
        this.scoreJoueurs = []
    }
    departDuJeu() {
        var questions = [
            {
                type: 'number',
                name: 'nombreJoueurs',
                message: 'combien de joueur : '
            },
            {
                type: 'rawlist',
                name: 'modeDeJeu',
                message: 'choisissez votre mode de jeu :',
                choices: ['le tour du Monde', 'le 301', 'le Cricket']
            },
        ];

        inquirer.prompt(questions).then(answers => {
            const nbJoueur = answers.nombreJoueurs;
            let nomQuestions = []

            for (let i = 0; i < nbJoueur; i++) {
                nomQuestions.push(
                    {
                        type: 'input',
                        name: `nomJoueur-${i}`,
                        message: 'Nom du joueur :'
                    })
            }
            inquirer.prompt(nomQuestions).then(nomAnswers => {
                const listeNoms = Object.values(nomAnswers)
                for (let val = 0; val < listeNoms.length; val++) {
                    this.joueurs.push(listeNoms[val])
                }
                console.log(jeu.joueurs)
            })

            if (answers.modeDeJeu == 'le tour du Monde') {
                const game1 = new AroundTheWorld()
                game1.leTourDuMonde()
            }
            if (answers.modeDeJeu == 'le 301') {
                const game2 = new AroundTheWorld()
                game2.le301()
            }
            if (answers.modeDeJeu == 'le Cricket') {
                const game3 = new AroundTheWorld()
                game3.leCricket()
            }
        });
    }

    ajouterJoueur(...arg) {
        this.joueurs = [...this.joueurs, ...arg]
    }
}

console.log('jeu de flechettes');

const jeu = new Gamemode()

jeu.departDuJeu()



