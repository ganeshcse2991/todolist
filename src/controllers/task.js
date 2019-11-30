import {createTask, getTask, updateTask, deleteTask, getAllTasks} from "../service/task";

export async function createTaskRecord(params) {
    console.log(params);
    let taskParams = params;
    if (taskParams.name == null && taskParams.completed == null) {
        return {status: 'failure', error: 'Task Create Have invalid params'}
    } else {
        let task = await createTask(taskParams);
        if (task) {
            return {status: 'success', data: task}
        }
    }
    return {status: 'failure', error: 'Unknown error has occured'}
}

export async function getTaskRecord(params) {
    console.log(params);
    if (params.id == null) {
        return {status: 'failure', error: 'Params should have id'}
    } else {
        let task = await getTask(params.id);
        if (task) {
            return {status: 'success', data: task}
        }
        return {status: 'failure', error: 'Unknown Error while getting the task'}
    }
}

export async function getAllTaskRecord() {
    let task = await getAllTasks();
    if (task) {
        return {status: 'success', data: task}
    }
    return {status: 'failure', error: 'Unknown Error while getting all the tasks'}
}

export async function updateTaskRecord(params) {
    console.log(params);
    if (params.id == null) {
        return {status: 'failure', error: 'Params should have id'}
    } else {
        let task = await updateTask(params);
        if (task) {
            return {status: 'success', data: task}
        }
        return {status: 'failure', error: 'Unknown Error while getting the task'}
    }
}

export async function deleteTaskRecord(params) {
    console.log(params);
    if (params.id == null) {
        return {status: 'failure', error: 'Params should have id'}
    } else {
        let task = await deleteTask(params.id);
        if (task) {
            return {status: 'success', data: task}
        }
        return {status: 'failure', error: 'Unknown Error while getting the task'}
    }
}

export default {createTaskRecord}

