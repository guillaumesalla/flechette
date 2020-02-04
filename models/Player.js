const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    gameWin: {
        type: String,
    },
    gameLost: {
        type: String,
    },
    createdAt: {
        type: String,
    }
}, { collection: 'player' });