import { Task } from "../../database";

export async function createTask(params) {
  let task = await Task.create(params);
  return task;
}

export async function getAllTasks() {
  let tasks = []
  try {
    tasks = await Task.findAll();
  } catch (error) {
    console.log(error);
  }
  return tasks;
}

export async function getTask(id) {
  let task = await Task.findOne({ where: { id } });
  return task;
}

export async function deleteTask(id) {
  let deletedTask = await Task.delete({ where: { id } })
  if (deletedTask) {
    return true;
  }
  return false;
}

export async function updateTask(params) {
  let task = await Task.findOne({ where: { id } });
  if (task) {
    let updatedTask = await Task.update({ where: { id } }, { name: params.name, completed: params.completed });
    if (updatedTask) {
      return updatedTask[0];
    }
  }
  return null;
}

export default {
  createTask,
  updateTask,
  getTask,
  getAllTasks,
  deleteTask
}