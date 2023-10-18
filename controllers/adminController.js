const adminRegistrationModel = require('../models/adminRegistrationModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const Admin = await adminRegistrationModel.create({ username, password: hashedPassword });
        res.status(200).json(Admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.adminLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await adminRegistrationModel.findOne({ username: username });

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        if (admin.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. User is not an admin.' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ username: admin.username, _id: admin._id }, 'NEWSadmin', { expiresIn: '1h' });

        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // Set the cookie for an hour

        return res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        console.error('Error occurred while logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.adminLogout = (req, res) => {
    res.clearCookie('jwt'); // Clear the jwt cookie
    res.status(200).json({ message: 'Logout successful' });
};
