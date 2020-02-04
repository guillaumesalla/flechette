const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
    id: {
        type: number | string,
    },
    name: {
        type: string,
    },
    email: {
        type: string,
    },
    gameWin: {
        type: number,
    },
    gameLost: {
        type: number,
    },
    createdAt: {
        type: datetime,
    }
}, { collection: 'player' });