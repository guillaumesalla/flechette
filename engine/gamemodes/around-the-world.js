'use strict';

class AroundTheWorld extends Gamemode {
    constructor() {
        super()
    }
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

}