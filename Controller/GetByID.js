const Task = require('../Models/task')

exports.GetByID = async (req,res) => {
    const taskId = req.params.id
    try {
        const task = await Task.findById(taskId)
        if(!task){
            return res.status(404).send({
                success : false,
                message : 'No task found'
            })
        }
        return res.status(200).send({
            success : true,
            task 
        })
    } catch (error) {
        return res.status(500).send({
            success : false,
            error : error.message
        })
    }
}