import { Injectable } from '@angular/core';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  public user_name: string;
  public tasks: Array<Task> = [];
  constructor() {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  clearTasks() {
    this.tasks = [];
  }

  generateRandomId(length: number): string {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  deleteTask(task: Task) {
    let index = this.tasks.findIndex(d => d.id === task.id);
    this.tasks.splice(index, 1);
  }
  
}
