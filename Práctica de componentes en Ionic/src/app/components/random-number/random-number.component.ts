import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss'],
})
export class RandomNumberComponent implements OnInit {

  n:number;
  constructor() { }

  ngOnInit() {
    this.n =Math.floor( Math.random() * 10 +1);
  }

}
