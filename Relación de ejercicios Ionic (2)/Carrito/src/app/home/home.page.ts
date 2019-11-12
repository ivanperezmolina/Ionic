import { Component } from '@angular/core';
import { Carrito } from '../model/carrito';
import { CarritoService } from '../services/carrito.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Rellenar con las tareas que me de el servicio
  carrito:Carrito[]=[];
  subtotal:number=0;
  total:number=0;
 
  //Hay que inyectar el servicio al constructor (aquí)
  constructor(private carritoService:CarritoService,
              private router:Router,
              public alertController:AlertController) {}

  //Cuando se inicie la página, se carguen los datos
  ngOnInit(){
    this.carrito = this.carritoService.getCarrito();
    this.carrito.forEach(elemento=> {
      this.subtotal=elemento.price*elemento.quantity;
      this.total+=this.subtotal;
    })
  }
  
  vamosAEdit(){
    this.router.navigateByUrl(`/edit`);
  }
}
