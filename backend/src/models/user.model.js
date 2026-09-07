import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        //we will write about the nname
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        //we will write about the email
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        //we will write about the password
        type: String,
        required: true,
        trim: true,
        minlength:6,

    }
}
,{
    timestamps: true
})
const user = mongoose.model('User', userSchema);
export default user;

