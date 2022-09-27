import { TasksServiceService } from './../tasks-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public task: Task;
  public task_name: string;
  constructor(public tservice: TasksServiceService) {}

  ngOnInit() {}

  onKeyPress(event) {
    if (event.target.value && event.key === 'Enter') {
      this.addTask(event.target.value);
    }
  }

  addTask(task: string) {
    this.task = new Task();
    this.task.id = this.tservice.generateRandomId(10);
    this.task.Task_Name = task;
    this.task.Task_Created_DateTime = new Date();
    this.task.Task_Completed = false;
    this.tservice.addTask(this.task);
    this.task_name = '';
  }

  deleteTask(task: Task) {
    this.tservice.deleteTask(task);
  }

  changeTaskStatus(task: Task) {
    task.Task_Completed = !task.Task_Completed;
  }
}
