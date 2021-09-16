const Task = require('../Models/task')

exports.Create = async (req,res) => {
    const {title,description,status} = req.body

    /* Check if tile as desc is not null*/
    if(!title || !description){
        return res.status(401).send({
            success : false,
            message : 'Both title and description are required to create task!'
        })
    }

    /* Save Task in DB */
    await new Task({
        title,
        description,
        status
    }).save(function (err,task) {
        if(err){
            return res.status(400).send({
                success:false,
                message : err.errors.status.message
                /* message - will display any of the validation error will saving the task */
            })
        }else{
            return res.status(200).send({
                success : true,
                message : 'Task Created',
                task
            })
        }
    })
    
}