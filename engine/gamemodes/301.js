'use strict';
const Gamemode = require('../gamemode')


class Le301 {


    async tirerFlechette(message, callback) {
        const questions = [{
            type: 'number',
            name: 'score',
            message
        }];
        await inquirer.prompt(questions).then(data => {
            const score = data['score'];
            callback(score);
        });
    }

    async  le301() {
        let done = false;
        let scores = this.joueurs.map(() => 301);

        while (!done) {
            for (let player = 0; (player < this.joueurs.length && !done); player++) {
                console.log(this.joueurs[player] + ', à vous de jouer!');
                console.log('Votre score: ' + scores[player]);

                for (let i = 0; (i < 3 && !done); i++) {
                    const message = 'Fléchette ' + (i + 1);
                    await this.tirerFlechette(message, scoreFlechette => {
                        const scoreActuel = scores[player];

                        if (scoreFlechette > 20) {
                            console.log('entrer un scrore inférieur a 20')
                        }
                        else {
                            const nouveauScore = scoreActuel - scoreFlechette;
                            if (nouveauScore >= 0) {
                                scores[player] = nouveauScore;
                                if (nouveauScore == 0) {
                                    done = true;
                                }
                            } else {
                                console.log('score en dessous de zero');
                            }
                        }
                    });
                }
            }
        }
    }
}