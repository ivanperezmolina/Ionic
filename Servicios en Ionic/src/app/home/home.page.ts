import { Component } from '@angular/core'; 
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Rellenar con las tareas que me de el servicio
  tasks:Task[]=[];
 

  //Hay que inyectar el servicio al constructor (aquí)

  constructor(private taskService:TaskService,
              private router: Router,
              public alertController: AlertController) { }

  //Cuando se inicie la página, se carguen los datos //
  // ngOnInit(){                                     //
  //   this.taskService.getTasks().then(             //
  //    data => this.tasks =data                     //
  //  );                                             //
  // }                                               //
  /////////////////////////////////////////////////////

  //Retramos para que le de tiempo a cargarnos los datos, y no haya que hacer F5.
  ionViewWillEnter(){
    this.taskService.getTasks().then(
       data => this.tasks =data
        );
  }

  //Definir metodo para no perder lo de la memoria  
  goToEditTask(id: number){
    this.router.navigateByUrl(`/edit${ id != undefined ? "/"+id :""}`); //if ternario
                                     //si se cumple esto?devuelve esto:si no esto//
  }

  //Llamar al servicio
  deleteTask(id:number){
    console.log("Delete"+ id);
    this.taskService.deleleTask(id).then(
      () => this.taskService.getTasks().then(
        data => this.tasks=data
      )
    );
     
    //this.tasks = this.taskService.getTasks();
  }


  async presentAlertConfirm(id:number,title:string) {
    const alert = await this.alertController.create({
      header: 'Confirmación de borrado',
      message: '¿Esta seguro de que quiere borra la tarea " <strong>'+title+'"</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteTask(id);
          }
        }
      ]
    });

    await alert.present();
  }


}
