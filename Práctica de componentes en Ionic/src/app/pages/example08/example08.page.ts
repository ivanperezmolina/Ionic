import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example08',
  templateUrl: './example08.page.html',
  styleUrls: ['./example08.page.scss'],
})
export class Example08Page implements OnInit {
  n: number=25;
  constructor() { }

  ngOnInit() {
  }

  generateValue(): void {

    this.n = Math.floor(Math.random() * 10 + 1);
  }

  incValue(x: number): void {
    this.n += x;

  }

}
