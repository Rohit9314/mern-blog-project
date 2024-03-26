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
}, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;