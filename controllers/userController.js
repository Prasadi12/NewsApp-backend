const userRegistrationModel = require('../models/userRegistrationModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = async(req,res) =>{
    try {
        const { name, age, role, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const User = await userRegistrationModel.create({ name, age, role, username, password: hashedPassword })
        res.status(200).json(User)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.userLogin = async(req,res) => {
    const { username, password } = req.body;
    try {
        const user = await userRegistrationModel.findOne({ username: username });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
    
        const token = jwt.sign({ username: user.username, _id: user._id }, 'NEWSuser', { expiresIn: '1h' });

        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // Set the cookie for an hour
    
        return res.status(200).json({ message: 'Login successful', token: token , role: user.role});
      } catch (error) {
        console.error('Error occurred while logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports.userLogout = (req, res) => {
    res.clearCookie('jwt'); // Clear the jwt cookie
    res.status(200).json({ message: 'Logout successful' });
};
