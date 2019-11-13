import { Injectable } from '@angular/core';
import { Carrito } from '../model/carrito';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';//1.




@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //Array de elementos del carrito
  public items:Carrito[]=[];

  total:number=0; 


  constructor(private http:HttpClient) { //2.inyectar el hhtp
    this.getCart().subscribe(
      data=> {
        console.log(data);
        this.items = data;
      }
     );
  }

  //3.Para coger del .json 
  getJson (file:string):Observable<Carrito[]>{
    return this.http.get<Carrito[]>('assets/'+file);
  }


  //getter para devolver elementos del carrito
  //getCarrito(): Carrito[] {
   // return this.items;
  //}


  //Para ahhorar codigo/*
  getCart():Observable<Carrito[]>{
    return this.getJson('cart.json');
  }

  getTotal(): number{
    if(this.items.length==0){
      return 0
    }else{
      this.items.forEach(i=>i.subtotal = i.price*i.quantity);
      this.items.forEach(i=>this.total+=i.subtotal);
        return this.total;

        
    }
  }
  
  addElemento(e:Carrito){
    const elementosAGuardar = {item:e.item, price:e.price,quantity:e.quantity,subtotal:e.subtotal}
    this.items.push(elementosAGuardar);
    //this.http.post(elementosAGuardar);
    
  }
}
