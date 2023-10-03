import mongoose from "mongoose";

const Schema = mongoose.Schema;

const signUpSchemaa = new Schema({
    name: {
        type: String,
        required: true
    },
    emailSignUp: {
        type: String,
        required: true,
        unique: true 
    },
    passwordSignUp: {
        type: String,
        required: true
    }
});

export default mongoose.model('SignUpModel', signUpSchemaa);