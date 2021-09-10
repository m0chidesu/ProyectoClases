import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from '../productos-service.service';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  datos = {}

  //se crea una variable para poder capturar la URL activa
  constructor(private activatedRoute : ActivatedRoute, private productosServicio : ProductosServiceService) { }

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

  
  

}
