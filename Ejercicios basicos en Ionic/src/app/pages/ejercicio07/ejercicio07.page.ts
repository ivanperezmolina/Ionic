import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  
  pta:number;
  eu:number;
  constructor() { }

  ngOnInit() {
  }

  pta_eu(pta){
    this.eu=this.pta/166,386; 
  }

  eu_pta(eu){
    this.pta=this.eu*166,386;
  }
}
