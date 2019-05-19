import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
 // selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
tasks : Array<Task> = [{name:"study" ,description:"",type:"event",finished:true}];

  constructor() { }
  ngOnInit() {
  }
addTaskToList(task:Task){
  this.tasks.push(task);
}

}
