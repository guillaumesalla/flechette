const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
    id: {
        type: number | string,
    },
    mode: {
        type: string,
        // 'around-the-world' | '301' | 'cricket'
    },
    name: {
        type: string,
    },
    currentPlayerId: {
        type: number | null | string,
    },
    status: {
        type: string,
        //'draft' | 'started' | 'ended'
    },
    createdAt: {
        type: datetime,
    }
}, { collection: 'game' });

