import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

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
    comentarios : ['Sabroso', 'Y barato xDDDDDDDDD']


  }
]
  constructor() { }

  ngOnInit() {
  }

}
