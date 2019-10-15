import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/empleado';
import { LISTA_EMPLEADOS } from 'src/app/model/lista-empleados';

@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {

  empleados: Empleado[];
  //Crear atributos
  nameInput: string;
  jobInput: string;
  salaryInput: number;

  constructor() { }

  ngOnInit() {
    this.empleados = LISTA_EMPLEADOS;
  }
  anadir() {
    const empleadoAux = new Empleado(this.nameInput,this.jobInput,this.salaryInput);
    this.empleados.push(empleadoAux);

  }

}
