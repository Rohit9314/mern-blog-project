import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        requires: true,
        unique: true
    },
    email: {
        type: String,
        requires: true,
        unique: true
    },
    password: {
        type: String,
        requires: true,
    },
    profilePicture: {
        type: String,
        default: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1711515470~exp=1711516070~hmac=9092e175abbd17f6b76d65e7cda221fcadd10e8732a73c7c44f38e9fd99eb037'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;