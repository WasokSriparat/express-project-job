const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//กำหนดโครงสร้างของ Document product
const jobPostingSchema = new Schema({
    post_title:String,
    department: [String],
    position: [String],
    post_body:String,
    max_salary:Number,
    min_salary:Number,
    max_age:Number,
    min_age:Number,
    start_date:Date,
    end_date:Date,
    applicant:[{
        user_id:String,
        name:String,
        department: [String],
        position: [String],
        resume:{
            data:Buffer,
            contentType:String
        },
        regis_status:String,
        comment:String,
        regis_date:Date
    }]
}, { timestamps: true });

module.exports = mongoose.model("jobPosting",jobPostingSchema);