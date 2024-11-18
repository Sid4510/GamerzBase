const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    gameName: { type: String, required: true }, // Add the game name
    maxPlayers: { type: Number, required: true }, // Maximum number of players in the team
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Store members of the team
    requests: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, status: { type: String, default: 'pending' } }], // Track join requests
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;