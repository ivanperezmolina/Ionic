import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  cadena:string;

  constructor() { }

  ngOnInit() {
  }

  mostrarCadena():void{
    this.cadena="Iván Pérez Molina"
  }

  borraCadena():void{
    this.cadena=""
  }

}
