'use strict';
var inquirer = require('inquirer');
const readline = require('readline');

class Flechette{
    constructor(){
        this.joueurs = []
        this.tirsJoueur = []
    }
    departDuJeu()
    {
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
                for(let val = 0; val < listeNoms.length; val++){
                    jeu.joueurs.push(listeNoms[val])
                }
                console.log(jeu.joueurs)
            })

            if(answers.modeDeJeu == 'le tour du Monde')
            {
                this.leTourDuMonde()
            }
            if(answers.modeDeJeu == 'le 301')
            {
                this.le301()
            }
            if(answers.modeDeJeu == 'le Cricket')
            {
                this.leCricket()
            }
        });
    }
    ajouterJoueur(...arg){
        this.joueurs = [...this.joueurs, ...arg]
    }
    leTourDuMonde(){
        var pointsTourDuMonde = [1,5,10,15,20]

        let tirs = []
        
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
            for(let val = 0; val < listeTirs.length; val++){
                jeu.tirsJoueurs.push(listeTirs[val])
            }
            console.log(jeu.tirsJoueurs)
        })

        var i = 0
            for (let a = 0; a < pointsTourDuMonde.length; a++) {
                while (this.tirs[i] != this.pointsTourDuMonde[a]) {
                    console.log("Raté")
                    i++
                }
                if (this.tirs[i] == 20) {
                    break
                }
                console.log("bravo mais c'est pas fini")
                i++
            }
            console.log("C'est gagné ! Coolos")
    }
    le301()
    {
        //faire le code du 301
    }
    leCricket()
    {
        //faire le code du cricket
    }
}

console.log('jeu de flechettes');

const jeu = new Flechette()

jeu.departDuJeu()

