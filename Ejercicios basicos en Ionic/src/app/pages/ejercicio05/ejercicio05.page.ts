import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {
  numero:number;
  min:number;
  max:number;
  constructor() { }

  ngOnInit() {
  }

  generateValue(min,max):void{

    
    
    this.numero=+this.min+Math.floor(Math.random()*(this.max-this.min+1));
  }

}

