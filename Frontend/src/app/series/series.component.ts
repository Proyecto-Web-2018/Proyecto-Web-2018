import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor( private _router: Router) { }


  arregloSeries=[

    {
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png",
    },
    {
      img:"https://www.sickchirpse.com/wp-content/uploads/2018/07/Better-Call-Saul.jpg",
    },
    {
      img:"https://images-na.ssl-images-amazon.com/images/I/91WkV6-KBAL._RI_.jpg",
    },

    {
      img:"https://m.media-amazon.com/images/M/MV5BMTYzMDE2MzI4MF5BMl5BanBnXkFtZTgwNTkxODgxOTE@._V1_.jpg",
    },
    {
      img:"https://4.bp.blogspot.com/-Tj0Lp4RwcY8/WP-HDZZOq5I/AAAAAAAAIeM/mBSyRrTAP8E6Ap2DwZr0x9Sfz7YzGj8UwCLcB/s1600/silicon-valley-serie-cuarta-temporada.jpg",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3_3uXV6T2Z2g4sSaq2FecL-YfYW3MpVK2n1az1lrObq84tsJ",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Eq9KCV5Y9IqFWIMo4RVHhQF3eCyMXXxAk-JAJCeP-KzjZzKeUg",
    },
    {
      img:"https://i.pinimg.com/originals/ea/2d/21/ea2d2171c2c2cff4ef7633b4800b562b.jpg",
    },
    {
      img:"http://es.web.img2.acsta.net/pictures/17/05/17/17/25/234403.jpg",
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png",
    },
    {
      img:"https://www.sickchirpse.com/wp-content/uploads/2018/07/Better-Call-Saul.jpg",
    },
    {
      img:"https://images-na.ssl-images-amazon.com/images/I/91WkV6-KBAL._RI_.jpg",
    },

    {
      img:"https://m.media-amazon.com/images/M/MV5BMTYzMDE2MzI4MF5BMl5BanBnXkFtZTgwNTkxODgxOTE@._V1_.jpg",
    },
    {
      img:"https://4.bp.blogspot.com/-Tj0Lp4RwcY8/WP-HDZZOq5I/AAAAAAAAIeM/mBSyRrTAP8E6Ap2DwZr0x9Sfz7YzGj8UwCLcB/s1600/silicon-valley-serie-cuarta-temporada.jpg",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3_3uXV6T2Z2g4sSaq2FecL-YfYW3MpVK2n1az1lrObq84tsJ",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Eq9KCV5Y9IqFWIMo4RVHhQF3eCyMXXxAk-JAJCeP-KzjZzKeUg",
    },
    {
      img:"https://i.pinimg.com/originals/ea/2d/21/ea2d2171c2c2cff4ef7633b4800b562b.jpg",
    },
    {
      img:"http://es.web.img2.acsta.net/pictures/17/05/17/17/25/234403.jpg",
    },



  ];

  redirect(){
    const rutaReproductor= ['reproducir'];
    this._router.navigate(rutaReproductor)
  }

  ngOnInit() {
  }

}
