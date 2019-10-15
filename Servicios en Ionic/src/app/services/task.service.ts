import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Array de tareas
  tasks: Task[]=[]; //Inicializar vacio

  constructor() {
    this.tasks= [
      {
        id:0,
        title:"Dar estrella al repositorio",
        description:"Apoyar al repositorio de Iván para seguir creciendo"
      },

      {
        id:1,
        title:"Estudiar Ionic",
        description:"Familiarizarse con el entorno y con el lenguaje "
      },

    ];


    }
        //getter para devolver tareas
        getTasks():Task[]{
          return this.tasks;
        }

        saveTask(t: Task){
          let id=0;
          //Comprobar
          if(this.tasks.length>0){
            id = this.tasks[this.tasks.length - 1].id+1;
          }
          //ID
          
          const taskToSave = {id: id, title:t.title, description: t.description}
          //////
          this.tasks.push(taskToSave);
        }

        deleleTask(id:number){
          this.tasks = this.tasks.filter(t => t.id !=id);
          //Se hace ul filtrado y del resultado, machacamos el array original
        }
   }

