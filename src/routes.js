import { createTaskRecord, getTaskRecord, updateTaskRecord, getAllTaskRecord } from './controllers/task';
import { deleteTask, getAllTasks } from './service/task';
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Welcomeeeee SRIT');
});




router.get('/task/:id', async (req, res, next) => {
  console.log("Processing Get Task Request for id: ", req.params.id);  
  let getTaskResponse = await getTaskRecord(req.params);
  if (getTaskResponse && getTaskResponse.status == 'success') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getTaskResponse.data);
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json({ error: getTaskResponse.error || 'Unknown Error has Occured' });
  }
})

router.get('/task', async (req, res, next) => {
  console.log("Processing Get All Tasks Request");
  let getTaskResponse = await getAllTaskRecord();
  if (getTaskResponse && getTaskResponse.status == 'success') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getTaskResponse.data);
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json({ error: getTaskResponse.error || 'Unknown Error has Occured' });
  }
})

router.post('/task', async (req, res, next) => {
  console.log("Processing Post Task Request");
  let createTaskResponse = await createTaskRecord(req.body);
  if (createTaskResponse.status == 'success') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(createTaskResponse.data);
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json({ error: createTaskResponse.error });
  }
})

router.put('/task', async (req, res, next) => {
  console.log("Processing Update Task Request for id", req.body.id);
  let createTaskResponse = await updateTaskRecord(req.body);
  if (createTaskResponse.status == 'success') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(createTaskResponse.data);
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json({ error: createTaskResponse.error });
  }
})

router.delete('/task', async (req, res, next) => {
  console.log("Processing Update Task Request for id", req.query.id);
  let deleteTaskResponse = await deleteTask(req.query);
  if (deleteTaskResponse.status == 'success') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(deleteTaskResponse.data);
  } else {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.json({ error: deleteTaskResponse.error });
  }
})

module.exports = router;