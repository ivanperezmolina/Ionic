import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task={
    //id no esta, pero a mi no me interesa. Lo pongo opcional en task.ts(clase)
    title:"",
    description:""
  };

  constructor(private taskService: TaskService,
              private activatedRoute:ActivatedRoute) { }//Injectado para poder coger numero de la url

  ngOnInit() {
    //Mira la ruta y coge el id y lo almacena en la constante
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    if(id!=null){
      this.task = this.taskService.getTask(+id);//+ añadido porque recojo un string 
    }
  }

  saveTask(){
    this.taskService.saveTask(this.task);
  }

}
