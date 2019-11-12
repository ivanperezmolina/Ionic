import { Injectable } from '@angular/core';
import { Carrito } from '../model/carrito';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //Array de elementos del carrito
  carrito: Carrito[] = [];


  constructor() { //inyectar el hhtp
    this.carrito = [
      {
        item: 'Teclado Logitech',
        price: 16.40,
        quantity: 2
      },
      {
        item: 'Ratón Tacens',
        price: 10.25,
        quantity: 3
      },
      {
        item: 'Portátil MSI',
        price: 999,
        quantity: 1
      },
      {
        item: 'Tablet Lenovo',
        price: 139,
        quantity: 2
      },
    ];


    //this.getJson('carrito.json).subscribe(
    //  data=> this.carrito = data
    // );
  }

  //Para coger del .json 

  //getJson (file:string):Observable<Carrito[]>{
   // return this.http.get<Carrito[]>('../model/'+file);
  //}


  //getter para devolver elementos del carrito
  getCarrito(): Carrito[] {
    return this.carrito;
  }

  addElemento(e:Carrito){
    const elementosAGuardar = {item:e.item, price:e.price,quantity:e.quantity}
    this.carrito.push(elementosAGuardar);
  }
}
