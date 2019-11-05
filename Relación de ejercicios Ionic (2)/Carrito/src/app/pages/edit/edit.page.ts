import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/model/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  carrito: Carrito={
    item:"",
    price:0,
    quantity:0
  };

  constructor(private carritoService:CarritoService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  saveElemento(){
    this.carritoService.addElemento(this.carrito).then(
      ()=>this.router.navigateByUrl('/')
    );
  }

}
