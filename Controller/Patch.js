const Task = require('../Models/task')

exports.Patch = async (req,res) => {
    try {
        const taskId = req.params.id
        const {title,description,status} = req.body
        const task = await Task.findById(taskId)
        task.title = title
        task.description = description
        task.status = status
        /* await task.save()
        console.log(task) */
        await task.save(function (err, docs) {
            if(err){
                return res.status(400).send({
                    success:false,
                    message : err/* .errors.status.message */
                })
            }else{
                return res.status(200).send({
                    success : true,
                    message : 'Task Updated',
                    task : docs
                })
            }
        })
        /* const updatedTask = {...task,...req.body}

        await Task.findOneAndUpdate({_id:taskId}, {$set: { ...updatedTask }},
        function (err, docs) {
            if(err){
                return res.status(400).send({
                    success:false,
                    message : err
                })
            }else{
                return res.status(200).send({
                    success : true,
                    message : 'Task Updated',
                    task : docs
                })
            }
        }) */

    } catch (error) {
        return res.status(500).send({
            success:false,
            message : 'Error while fetching data',
            error : error
        })
    }
}