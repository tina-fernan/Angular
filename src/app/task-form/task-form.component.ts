import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() addTask = new EventEmitter<Task>();
  formGroup : FormGroup;
  isValid = false;

  constructor(private formBuilder : FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
    this.formGroup=this.formBuilder.group({
      name:['',Validators.required],
      description:[],
      type:[],
      event:[],
      finished:[]

    });
    this.formGroup.valueChanges.subscribe(() => (this.isValid = this.formGroup.valid));
  }
  submit(){
    if (this.formGroup.valid) {
      // this.addTask.emit(this.formGroup.value);
      this.taskService.addTaskToList(this.formGroup.value)
      // 
    } else {
      console.log('not valid');
    
  }

}
}
