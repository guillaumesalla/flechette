'use strict';
var inquirer = require('inquirer');
const readline = require('readline');

class Flechette {
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
                this.leTourDuMonde()
            }
            if (answers.modeDeJeu == 'le 301') {
                this.le301()
            }
            if (answers.modeDeJeu == 'le Cricket') {
                this.leCricket()
            }
        });
    }

    ajouterJoueur(...arg) {
        this.joueurs = [...this.joueurs, ...arg]
    }

    //le tour du monde 
    leTourDuMonde() {
        var pointsTourDuMonde = [1, 5, 10, 15, 20]
        let done = false
        let tirs = []
        let sj = [0, 0, 0]

        while (!done) {
            for (let j = 0; j <= nbJoueur; j++) {
                console.log(jeu.joueurs[j])
                for (let i = 0; i < 3; i++) {
                    tirs.push(
                        {
                            type: 'input',
                            name: `tir-${i}`,
                            message: `score au tir ${i} :`
                        })
                }
                inquirer.prompt(tirs).then(tirAnswers => {
                    const listeTirs = Object.values(tirAnswers)
                    for (let val = 0; val < listeTirs.length; val++) {
                        this.jeu.tirsJoueurs.push(listeTirs[val])
                    }
                    console.log(jeu.tirsJoueurs)
                })
                for (let i = 0; i < 3; i++) {
                    if (this.jeu.tirsJoueurs == pointsTourDuMonde[sj[j]]) {
                        sj[j]++
                        if (sj[j] == 5) {
                            console.log("bravo vous avez fini")
                            done = true;
                        }
                        else {
                            console.log("bravo tu est passé au palier suivant")
                        }
                    }
                    else {
                        console.log("raté")
                    }
                }
                this.jeu.tirsJoueurs = []
            }
        }
    }
    //le 301
    le301() {
        let partie = "en cours"
        for (let val = 0; val < this.joueurs.length; val++) {
            this.tirsJoueur[val] = 301
        }

        while (partie != "termine") {
            for (let val = 0; val < this.joueurs.length; val++) {
                let tirs = []
                tirs.push(
                    {
                        type: 'input',
                        name: `tir-${i}`,
                        message: `score au tir ${i} :`
                    })

                inquirer.prompt(tirs).then(tirAnswers => {
                    const listeTirs = Object.values(tirAnswers)
                    let score = this.tirsJoueur[val] - listeTirs[val]
                    if (score < 0) {
                        score = 0 - score
                    }
                    this.tirsJoueurs[val] = score
                    console.log(jeu.tirsJoueurs)
                    if (this.tirsJoueurs[val] == 0) {
                        partie = "termine"
                        break
                    }
                })

            }
        }
    }

    //le cricket
    leCricket() {
        //faire le code du cricket
    }
}

console.log('jeu de flechettes');

const jeu = new Flechette()

jeu.departDuJeu()

