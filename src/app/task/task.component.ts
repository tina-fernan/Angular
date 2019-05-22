import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from '../task.service';

@Component({
  // selector: 'app-task',
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = [];

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.tasks = this.service.tasks;
  }

  delete(task: Task) {
    this.service.deleteTask(task);
  }

}
