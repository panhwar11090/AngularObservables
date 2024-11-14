import { Component, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  TaskService : TaskService = inject(TaskService)
  newTask: string = '';

  CreateTask(){
    console.log(this.newTask);
    this.TaskService.OnCreateTask(this.newTask)
    

  }
}
