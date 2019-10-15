import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {

  x: number;
  y: number;
  word: string;
  person: object; //Le digo que es JSON

  constructor() { }

  ngOnInit() {
    this.x=24;
    this.y=9;
    this.word="wonderful";
    this.person={
      name: "Alan Brito",
      job: "Junior developer",
      salary: 2000
    }
  }

}
