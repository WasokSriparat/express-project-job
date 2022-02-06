const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user_pic:{
        data:Buffer,
        contentType:String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number:String,
    address:{
        house_no:String,
        district:String,
        sub_district:String,
        province:String,
        country:String,
        zip_code:String
    },
    birth_date:{
        type:Date,
        required: true
    },
    gender:String,
    education:[{
        qualification:String,
        department:String,
        gpa:Double
    }],
    job_regis:[{
        job_post_id:String,
        post_title:String,
        company_name:String,
        department:String,
        position:String,
        regis_status:String,
        comment:String,
        regis_date:Date
    }]
}, {
    timestamps: true,
});

userSchema.methods.hashPassword = async (password) => {
    return await bcrypt.hashSync(password, 10);
}
userSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
    return await bcrypt.compare(inputtedPassword, hashedPassword)
}
userSchema.methods.generateJwtToken = async (payload, secret, expires) => {
    return jwt.sign(payload, secret, expires)
}
module.exports = mongoose.model("User", userSchema);
userSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});