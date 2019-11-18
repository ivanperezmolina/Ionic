import { Component } from '@angular/core';
import { DADOS } from '../model/losdados';
import { Dados } from '../model/dados';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Constantes de los dados
  losdados : Dados[] = DADOS;
  dados : Dados={id:1,image:'dado1.png'};

  constructor() {}

  randomDado(){
    const n = Math.floor(Math.random()* this.losdados.length);
    this.dados = this.losdados[n];
  }

}
