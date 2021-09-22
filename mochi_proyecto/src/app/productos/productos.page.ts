import { Component, OnInit } from '@angular/core';
//se importa la clase del servicio 
import {ProductosServiceService} from './productos-service.service';
import { Router } from '@angular/router'; //enrutador
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  private productos = []

  //el constructor utiliza el servicio y ahora este servicio es parte del HTML
  constructor(private servicioProductos : ProductosServiceService, private router : Router) { }

  ngOnInit() {
    //recuperar todos los productos
    this.productos = this.servicioProductos.getProductos();
  }

  ionViewWillEnter(){
    this.productos = this.servicioProductos.getProductos();

  }
  //metodo de redireccion a la pagina de agregar
  redireccionarAgregar(){
    console.log('redirect pass')
    this.router.navigate(['/agregar-producto'])
  }

}
