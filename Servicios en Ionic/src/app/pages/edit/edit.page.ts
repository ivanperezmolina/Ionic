import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task={
      id: 0,
      title:"",
      description:""
    }
  }

  saveTask(){
    this.taskService.saveTask(this.task);
  }

}
