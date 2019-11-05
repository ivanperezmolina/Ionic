import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Generos las variables, que se cogen del html
  metros:number;
  centimetros:number;
  pulgadas:number;

  constructor() {}

  conversorMetros(){
    this.centimetros=this.metros*100;
    this.pulgadas=this.metros*39.37;
  }

  conversorCentimetros(){
    this.metros=this.centimetros/100;
    this.pulgadas=this.centimetros/2.54;
  }

  conversorPulgadas(){
    this.metros=this.pulgadas*(0.0254);
    this.centimetros=this.pulgadas*2.54;
  }

 
}

