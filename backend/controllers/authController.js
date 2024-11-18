const UserModel = require('../models/User.js');
const jwt = require('jsonwebtoken');

const Signup = async (req, res) => {
    try {
        const { Username, email, password } = req.body;
        const user = await UserModel.findOne({
            $or: [
                { Username: Username },  // Checking if the Username matches
                { email: email }         // Checking if the email matches
            ]
        });
        if (user) {
            return res.status(403).json({ message: "User already exists, you can login", success: false });
        }
        const userModel = new UserModel({ Username, email, password });
        await userModel.save();
        res.status(201).json({
            message: "Signup successfully",
            success: true
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const Login = async (req, res) => {
    try {
        const { Username, password } = req.body;
        const user = await UserModel.findOne({ Username });
        if (!user) {
            return res.status(402).json({ message: "User does not exist", success: false });
        }
        const isPassEqual = (password === user.password) ? 1 : 0;
        if (!isPassEqual) {
            return res.status(403).json({ message: "Incorrect password", success: false });
        }
        const jwtToken = jwt.sign(
            { Username: user.Username, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        if(user.Username == "Om19"){
            res.status(200).json({
                message: "Login successfully",
                success: true,
                jwtToken,
                Username,
                userId: user._id,
                admin:true,
                email: user.email
            });
        }
        else{
        res.status(200).json({
            message: "Login successfully",
            success: true,
            jwtToken,
            Username,
            userId: user._id,
            admin:false,
            email: user.email
        });
    }
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// Logout function
const Logout = (req, res) => {
    // Invalidate the token on the client side (no server action needed)
    res.status(200).json({
        message: "Logout successfully",
        success: true
    });
};

module.exports = {
    Signup,
    Login,
    Logout
};
