const mongoose = require('mongoose')

const userRegistrationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        age : {
            type: String,
            required: [true, 'Age is required'],
        },
        email : {
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

const Registration = mongoose.model('Registration', userRegistrationSchema);
module.exports = Registration;