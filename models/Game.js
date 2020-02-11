const mongoose = require('mongoose')

let GameSchema = mongoose.Schema({
    id: {
        type: String,
    },
    mode: {
        type: String,
        // 'around-the-world' | '301' | 'cricket'
    },
    name: {
        type: String,
    },
    currentPlayerId: {
        type: String,
    },
    status: {
        type: String,
        //'draft' | 'started' | 'ended'
    },
    createdAt: {
        type: String,
    }
})
module.exports = mongoose.model('game', GameSchema);