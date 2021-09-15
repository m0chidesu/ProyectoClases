import { Component, OnInit } from '@angular/core';
//se importa la clase del servicio 
import {ProductosServiceService} from './productos-service.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  private productos = []

  //el constructor utiliza el servicio y ahora este servicio es parte del HTML
  constructor(private servicioProductos : ProductosServiceService) { }

  ngOnInit() {
    //recuperar todos los productos
    this.productos = this.servicioProductos.getProductos();
  }

  ionViewWillEnter(){
    this.productos = this.servicioProductos.getProductos();

  }

}
