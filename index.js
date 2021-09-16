require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const app = express()

//CUSTOM IMPORTS
const taskRouter = require('./Routes/task')

const DB = process.env.DB_URL || "mongodb://localhost:27017";
const PORT = process.env.PORT || 4000;

/* Connect with DB and then start server */
const startServer = async () => {
    try{
        await mongoose.connect(DB)
        console.log('MongoDB Connected...!')
        // start listening to port
        app.listen(PORT, () => console.log(`Server is up and running on the port ${PORT}`))
    }catch(error){
        console.log(`unable to connect with database \n ${error}`)
        startServer();
    }
}
startServer();


//Middleware
app.use(cors());
app.use(express.json());

app.use('/api/todo',taskRouter)

app.get('/', (req,res) => {
    res.send('Todo Application Server is up and running')
})

/*
API 

1. Create Task (POST)

http://localhost:4000/api/todo/createTask

2. 
*/