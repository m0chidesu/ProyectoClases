import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {


  private productos = [{
    id : '1',
    titulo : 'Cazuela',
    imagenURL : 'https://www.gourmet.cl/wp-content/uploads/2011/03/cazuela_de_vacuno.jpg',
    comentarios : ['Rica cazuela', 'Para el frio santiaguino XDDD']

  },
  {
    id : '2',
    titulo : 'Lomo a lo pobre',
    imagenURL : 'https://comidasperuanas.net/wp-content/uploads/2019/09/Lomo-a-lo-pobre.jpg',
    comentarios : []
  }
]

  constructor() { }

  /*Metodo Get*/
  getProductos(){
    //Se retornará una lista
    return [...this.productos]
  }
  /*Metodo Get*/
  getProductosById(productoID : string){
    //Se busca un elemento por ID y se retorna un objetoñ
    return{
    ...this.productos.find( serv => {
      return serv.id === productoID
    } )
    }
  }
  /*Metodo Get*/
  addProductos(tit: string, imgURL : string){
    //agregamos un producto nuevo en la lista 
    //el ID corresponde al ultimo elemento registrado
    this.productos.push(
      
      {
        id : String(this.productos.length + 1),
        titulo : tit,
        imagenURL : imgURL,
        comentarios : []

      }
      
      )
  }
  /*Metodo Get*/
  deleteProductos(productoID:string){
    //se busca un elemento por id y este elemento se quita de la lista
    //luego se sobreescribe la variable productos 
    this.productos = this.productos.filter(serv => {
                        return serv.id !== productoID
                      })
  }
}
