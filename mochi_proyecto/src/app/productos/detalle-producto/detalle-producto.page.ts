import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosServiceService } from '../productos-service.service';
import { Producto } from './producto.model';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  datos : Producto

  //se crea una variable para poder capturar la URL activa
  constructor(private activatedRoute : ActivatedRoute, private productosServicio : ProductosServiceService, private Route : Router) { }

  ngOnInit() {

    //vamos a buscar el producto por el id que viene en la url
    this.activatedRoute.paramMap.subscribe( paramMap => {

      //se captura el id en la url
      const valor = paramMap.get('prodID')
      console.log("id del prod. :" + valor)

      //se llama al servicio y se pasa el id
      this.datos = this.productosServicio.getProductosById(valor)
      console.log(this.datos)
    })


  }

  //agregamos el método de eliminar
  eliminar(){
    console.log("eliminando")
    this.productosServicio.deleteProductos(this.datos.id)
    //redireccionar a la página de productos
    this.Route.navigate(['/productos']);
  }
  

}
