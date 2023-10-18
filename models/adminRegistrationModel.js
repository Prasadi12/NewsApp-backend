const mongoose = require('mongoose')

const adminRegistrationSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: [true, 'Email is required'],
        },
        password : {
            type: String,
            required: [true, 'Password is required'],
        },
        role : {
            type: String,
            default: 'admin',
        },
    },{
        timestamps: true,
    }
);

const Admin = mongoose.model('Admin', adminRegistrationSchema);
module.exports = Admin;