import { Injectable } from '@angular/core';
import { Task } from '../model/task'; 
import { Storage } from '@ionic/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Array de tareas
  tasks: Task[]=[]; //Inicializar vacio

  constructor(private storage:Storage) {//inyecto de BBDD
    this.getTasks().then(
      data => this.tasks = data !==null ? data:[]
    );//Promesa
    }


        //getter para devolver tareas
        getTasks():Promise<Task[]>{
          return this.storage.get('tasks');
        }

        //getter para si paso un id; me de solo la tarea que yo quiero
        //Cojo de la url y los pondre en el formulario
        getTask(id: number):Task{
          return this.tasks.filter(t => t.id==id)[0];//Para devlver una tarea hago un array con una posición
        }

        saveTask(t: Task): Promise<boolean>{//distingo si edito o si creo una tarea
                           //Devuelvo la promesa para ver si se ha guardado
          if (t.id == undefined){
            this.addTask(t);
          }else{
            this.updateTask(t);
          }

         return this.storage.set('tasks',this.tasks)//guardo en la memoria
        }

        addTask(t: Task){
          let id=0;
          //Comprobar
          if(this.tasks.length>0){
            id = this.tasks[this.tasks.length - 1].id+1;
          }
          //ID
          
          const taskToSave = {id: id, title:t.title, description: t.description,categoria:t.categoria}
          //////
          if(t.title==""){
            console.log("ERROR:NO HAY TITULO");
          }else{
          this.tasks.push(taskToSave);
          }
        }

        updateTask(t){
          const index = this.tasks.findIndex(tAux => tAux.id ==t.id);
          this.tasks[index].title=t.title;
          this.tasks[index].description=t.description;    
          this.tasks[index].categoria=t.categoria;   
        }

        deleleTask(id:number):Promise<boolean>{
          this.tasks = this.tasks.filter(t => t.id !=id);
          //Se hace ul filtrado y del resultado, machacamos el array original
          return this.storage.set('tasks',this.tasks);
          //Comprobar que se guarda
        }
   }

