'use strict';
const Gamemode = require('../gamemode')


class AroundTheWorld {
    constructor()
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

    async leTourDuMonde() {
        let done = false;
        let scores = this.joueurs.map(() => 0);

        while (!done) {
            for (let player = 0; (player < this.joueurs.length && !done); player++) {
                console.log(this.joueurs[player] + ', à vous de jouer!');
                console.log('Votre score: ' + scores[player]);

                for (let i = 0; (i < 3 && !done); i++) {
                    await this.tirerFlechette('Fléchette ' + (i + 1), score => {
                        const currentScore = scores[player];
                        if (currentScore == (score - 1)) {
                            scores[player] = score;
                            if (score == 5) {
                                done = true;
                            }
                        }
                    });
                }
            }
        }
        const resultats = this.joueurs
            .map((name, index) => ({ name, score: scores[index] }))
            .sort((a, b) => b.score - a.score);

        console.table(resultats);
    }
}