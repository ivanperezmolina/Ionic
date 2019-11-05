import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  a = 0;
  b = 0;
  randomNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = +this.a + Math.floor(Math.random() * (this.b - this.a + 1));
  }

  changeNumber() {
    if (this.randomNumber == this.a) {
      this.randomNumber = this.b;
    } else if (this.randomNumber == this.b) {
      this.randomNumber = this.a;
    } else {
      this.randomNumber = this.a;
    }
  }

}
