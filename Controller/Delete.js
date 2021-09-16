const Task = require('../Models/task')

exports.Delete = async (req,res) => {
    try {
        console.log(req.params.id)
        const {id} = req.params.id
        console.log(id)
        const task_to_be_deleted = await Task.findByIdAndDelete({_id : req.params.id})
        return res.status(200).send({
            success : true,
            message : `Task - ${task_to_be_deleted.title } removed`
        })
    } catch (error) {
        return res.status(500).send({
            success : false,
            error : error.message
        })
    }
}