import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {

  //Difino dos arrays
  numbers:number[];
  fruits: string[];
  numero:string;
  
  constructor() { }

  ngOnInit() {
    this.numbers=[1, 2, 3, 4, 5, 6, 7, 8];
    this.fruits=["pera", "papaya", "banana", "manzana", "melón","sandía"];
  }

  anadir(numero){
    this.numbers.push(numero);
  }

  anadirFruta(fruta){
    this.fruits.push(fruta);
  }

  reset():void{
    this.numero=null;
  }
}
