const Task = require('../Models/task')

exports.AllTask = async (req,res) => {

    const alltask =  await Task.find()
    /* Check if atleast 1 todo is available */
    if(!alltask) {
        return res.status(400).send({
            success:false,
            message : 'No Task in DB. Create One!'
        })
    }

    try {
        /* Get Todos based on state */
        const openTask =  await Task.find({status : 'open'})
        const InPTask = await Task.find({status:'inprogress'})
        const compTask = await Task.find({status:'completed'})

        return res.status(200).send({
            success:true,
            alltask,
            openTask,
            InPTask,
            compTask
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            message : 'Error while fetching data',
            error : error.message
        })
    }
}