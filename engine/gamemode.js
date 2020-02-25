'use strict';
var inquirer = require('inquirer');
const readline = require('readline');
const tmd = require('./gamemodes/around-the-world')
const cricket = require('./gamemodes/cricket')
const le301 = require('./gamemodes/301')

class Gamemode {
    modeJeu;
    constructor() {
        this.joueurs = [];
        this.nbJoueur = 2;
    }


    departDuJeu() {
        let questions = [
            {
                type: 'number',
                name: 'nombreJoueurs',
                message: 'combien de joueur :'
            },
            {
                type: 'rawlist',
                name: 'modeDeJeu',
                message: 'choisissez votre mode de jeu :',
                choices: ['le tour du Monde', 'le 301', 'le Cricket']
            },
        ];

        inquirer.prompt(questions).then(answers => {
            // ajouter nom joueur
            this.nbJoueur = answers['nombreJoueurs'];
            this.modeJeu = answers['modeDeJeu'];

            let nomQuestions = [];
            for (let i = 0; i < this.nbJoueur; i++) {
                nomQuestions.push({
                    type: 'input',
                    name: 'nomJoueur' + i,
                    message: 'Nom du joueur ' + i,
                });
            }

            // inscrire dans tableau
            inquirer.prompt(nomQuestions).then(nomAnswers => {
                const listeNoms = Object.values(nomAnswers);
                this.joueurs = listeNoms;

                if (answers.modeDeJeu == 'le tour du Monde') {
                    const game1 = new AroundTheWorld()
                    game1.leTourDuMonde()
                }
                if (answers.modeDeJeu == 'le 301') {
                    const game2 = new Le301()
                    game2.le301()
                }
                if (answers.modeDeJeu == 'le Cricket') {
                    const game3 = new Cricket()
                    game3.leCricket()
                }

            })
        });
    }

    ajouterJoueur(...arg) {
        this.joueurs = [...this.joueurs, ...arg]
    }
}

console.log('jeu de flechettes');

const jeu = new Gamemode()

jeu.departDuJeu()