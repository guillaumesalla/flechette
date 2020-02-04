const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
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
}, { collection: 'game' });

