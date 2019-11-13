import { Component } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { PeliculaService } from '../services/pelicula.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Rellenar con las peliculas que me de el servicio
  peliculas:Pelicula[]=[];
  image:string;
  ocultar:boolean = false;  
  index:number;
  

  //Hay que inyectar el servicio al constructor (aquí)
  constructor(private peliculaService: PeliculaService,
              private router:Router,
              public alertController:AlertController,
              public navController:NavController) {}

   //Cuando se inicie la página, se carguen los datos
   ngOnInit(){
    this.peliculas = this.peliculaService.getPeliculas();
    //this.image = `../assets/img/${}.jpg`

  }

    //Llamar al servicio
    deletePelicula(titulo:string){
      console.log("Delete "+ titulo);
      this.peliculaService.deletePelicula(titulo);
      this.peliculas = this.peliculaService.getPeliculas();
    }

    async presentAlertConfirm(title:string) {
      const alert = await this.alertController.create({
        header: 'Confirmación de borrado',
        message: '¿Esta seguro de que quiere borra la pelicula " <strong>'+title+'"</strong>?',
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
              this.deletePelicula(title);
            }
          }
        ]
      });
  
      await alert.present();
    }

    
    //APAREZCA Y DESAPAREZCA INFO

    

    detalles(title){
      this.ocultar = !this.ocultar;
      this.index=this.peliculas.findIndex(p => p.title == title);
    }



}
