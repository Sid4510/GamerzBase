const Team =require('../models/TeamRequest');
const User=require('../models/User');

const getTeam = async (req, res) => {
    try {
        
        const userId = req.params.userId || req.query.userId;
        const cleanedUserId = userId.trim();

        const user = await User.findById(cleanedUserId); 

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const userTeam = await Team.findOne({ createdBy: cleanedUserId })
        .populate('createdBy', 'username')  // Populate creator's username
        .populate('members', 'username');
        console.log(userTeam.members);
        res.status(200).json({ 
            success: true, 
            user,
            teamCreated: userTeam ? userTeam : null 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to fetch user profile' });
    }
}


module.exports={
    getTeam
}