import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskName: string;
  taskPercentage: number;
  description: string;

  constructor() { }
  ngOnInit() {
  }

  addTask() {
    console.log(this.taskName);
  }

  addFormListener() {
    console.log(this.taskName,this.taskPercentage,this.description);
    

  }  

}
