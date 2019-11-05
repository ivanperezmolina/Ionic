import { Component } from '@angular/core';
import { STUDENTS } from '../model/students';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Importamos la constante de estudiantes
  students = STUDENTS;
  name: string;
  image:string;

  constructor() {}

  randomStudent(){
    const n = Math.floor(Math.random() * 20); //Math.floor quita los decimales
    this.name = this.students[n];
    this.image = `../assets/img/foto${n+1}.png`
  }
}
