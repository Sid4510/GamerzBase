
const Team = require('../models/TeamRequest'); // Import the Team model
const mongoose = require('mongoose');

const createTeam = async (req, res) => {
    const { teamName, gameName, maxPlayers, createdBy } = req.body;

    if (!mongoose.Types.ObjectId.isValid(createdBy)) {
        return res.status(400).json({ success: false, message: 'Invalid user ID.' });
      }
    try {
      
      const existingTeam = await Team.findOne({ createdBy });
        if (existingTeam) {
            return res.status(400).json({ success: false, message: 'You can only create one team.' });
         }


      if (!teamName || !gameName || !maxPlayers || !createdBy) {
        return res.status(400).json({ message: 'All fields are required.',success:false });
      }
  
      // Validate that maxPlayers is a positive integer
      if (maxPlayers <= 0 || !Number.isInteger(maxPlayers)) {
        return res.status(400).json({ message: 'maxPlayers must be a positive integer.' ,success:false});
      }
  
      // Create a new team
      const newTeam = new Team({
        teamName,
        gameName,
        maxPlayers,
        createdBy: new mongoose.Types.ObjectId(createdBy),
        members: [new mongoose.Types.ObjectId(createdBy)], // Add creator to the members list
      });
  
      // Save the team to the database
      await newTeam.save();
  
      return res.status(201).json({ message: 'Team created successfully', team: newTeam , success:true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error. Failed to create team.' });
    }
  };


const joinRequest = async(req,res) => {
    try {
        const team = await Team.findById(req.params.teamId);
        if (!team) return res.status(404).json({ error: 'Team not found' });

        // Check if the team is already full
        if (team.members.length >= team.maxPlayers) {
            return res.status(400).json({ error: 'Team is already full' });
        }

        // Check if user has already requested to join
        const existingRequest = team.requests.find(request => request.userId.toString() === req.user.id);
        if (existingRequest) return res.status(400).json({ error: 'Request already sent' });

        team.requests.push({ userId: req.user.id });
        await team.save();
        res.status(200).json({ message: 'Join request sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


const removeRequest = async(req,res) => {
    try {
        const team = await Team.findById(req.params.teamId);
        if (!team) return res.status(404).json({ error: 'Team not found' });

        const request = team.requests.find(r => r.userId.toString() === req.params.userId);
        if (!request) return res.status(404).json({ error: 'Request not found' });

        // Check if the team is already full
        if (team.members.length >= team.maxPlayers) {
            return res.status(400).json({ error: 'Team is already full' });
        }

        // Update request status to approved or rejected
        request.status = req.body.status; // 'approved' or 'rejected'

        if (req.body.status === 'approved') {
            team.members.push(req.params.userId); // Add user to team members if approved

            // If the team is now full, remove pending requests
            if (team.members.length >= team.maxPlayers) {
                team.requests = []; // Clear all pending requests
            }
        }

        await team.save();
        res.status(200).json({ message: 'Request updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const getTeams = async (req, res) => {
    const userId = req.query.userId; // Get userId from query parameters
    console.log('User ID:', userId); // Log the user ID for debugging
    
    try {
        const teams = await Team.find({ createdBy: { $ne: userId } }) // Exclude user's teams
            .populate('createdBy', 'username'); // Populate createdBy to get user information
        
        res.status(200).json({ success: true, teams });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to fetch teams.' });
    }
};


module.exports={
    joinRequest,removeRequest,createTeam,getTeams
}