import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../productos-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private productoServicios : ProductosServiceService, private router : Router) { }

  ngOnInit() {
  }


  //agregar producto
  agregarProducto(titulo,url,comentario){

    if(comentario.value !== ""){
      var lista = []
    lista.push(comentario.value)
    }else{
      lista = null;
    }

    this.productoServicios.addProductos(titulo.value,url.value,lista);
    this.router.navigate(['/productos'])
  }

}
