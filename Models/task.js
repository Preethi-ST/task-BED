const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true,
        unique : true
    },
    description : {
        type: String,
        required : true
    },
    status : {
        type : String,
        default : 'open',
        enum : ['open','inprogress','completed']
    },

},{timestamps : true})

const Task = mongoose.model('Task',taskSchema)
module.exports = Task