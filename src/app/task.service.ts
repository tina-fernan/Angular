import { Injectable } from "@angular/core";
import { Task } from "./task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  tasks: Task[] = this.getTasks();

  constructor() {}

  addTaskToList(task: Task) {
    this.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));    
  }

  deleteTask(task: Task) {
    // delte task from this.tasks AND update localStorage
    this.tasks.splice(this.tasks.indexOf(task), 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));    
  }

  getTasks(): Task[] {
    if(JSON.parse(localStorage.getItem("tasks")) === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("tasks"));
  }
}
