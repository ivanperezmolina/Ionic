import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example05',
  templateUrl: './example05.page.html',
  styleUrls: ['./example05.page.scss'],
})
export class Example05Page implements OnInit {
  //Difino dos arrays
  numbers:number[];
  fruits: string[];

  constructor() { }

  ngOnInit() {
    this.numbers=[1, 2, 3, 4, 5, 6, 7, 8];
    this.fruits=["pera", "papaya", "banana", "manzana", "melón","sandía"];
  }

}
