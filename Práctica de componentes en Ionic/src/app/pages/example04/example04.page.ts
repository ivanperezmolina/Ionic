import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example04',
  templateUrl: './example04.page.html',
  styleUrls: ['./example04.page.scss'],
})
export class Example04Page implements OnInit {
  
  word:string;
  constructor() { }

  ngOnInit() {
    this.reset();
  }

  reset():void{
    this.word="";
  }

}
