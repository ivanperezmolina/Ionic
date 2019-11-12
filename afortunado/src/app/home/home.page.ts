import { Component } from '@angular/core';
import { STUDENTS } from '../model/students';
import { Student } from '../model/student';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Importamos la constante de estudiantes
  students :Student[]= STUDENTS;
  student:Student={id:0,name:'',image:'user.png',gitHub:''};

  constructor() {}

  randomStudent(){
    const n = Math.floor(Math.random() * this.students.length); //Math.floor quita los decimales
    this.student = this.students[n];
    
  }
}
