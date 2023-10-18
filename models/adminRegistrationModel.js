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
        }
    },{
        timestamps: true,
    }
);

const Admin = mongoose.model('Admin', adminRegistrationSchema);
module.exports = Admin;