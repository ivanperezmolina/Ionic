import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  n:number=0;
  constructor() { }

  ngOnInit() {
  }

  incValue(x:number):void{
    this.n+=x;
  }

  resetea(){
    this.n=0;
  }

}
