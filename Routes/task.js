const express = require('express');
const { AllTask } = require('../Controller/AllTask');
const { Create } = require('../Controller/Create');
const { Delete } = require('../Controller/Delete');
const { GetByID } = require('../Controller/GetByID');
const { Patch } = require('../Controller/Patch');
const router = express.Router();

/* Create Todo */
router.post('/createTask',Create)

/* Get All Todos */
router.get('/allTask',AllTask)

/* Get Todo based on ID */
router.get('/gettask/:id',GetByID)

/* Update Todo */
router.patch('/update/:id',Patch)

/* Delete Todo */
router.delete('/removeTask/:id',Delete)

module.exports = router;