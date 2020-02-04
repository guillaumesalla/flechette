'use strict';

class Le301 extends Gamemode {
    constructor() {
        super()
    }
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
}