const mongoose = require('mongoose')

let PlayerSchema = mongoose.Schema({
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
})
module.exports = mongoose.model('player', PlayerSchema);