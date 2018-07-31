import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-recientes',
  templateUrl: './peliculas-recientes.component.html',
  styleUrls: ['./peliculas-recientes.component.css']
})
export class PeliculasRecientesComponent implements OnInit {

  constructor() { }

  peliculas=[
    {
      uri:"https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/03/29/Recortada/img_jatienza_20170829-164347_imagenes_lv_otras_fuentes_20838254_109613609733414_4388983623303299072_n-kkYE-U442025183055F3H-992x558@LaVanguardia-Web.jpg",
    },
    {
      uri:"https://www.hola.com/imagenes/realeza/casa_suecia/20180723127477/magdalena-suecia-inusual-foto-leonore/0-586-859/leonore-suecia-cp-9t-t.jpg",
    },
    {
      uri:"https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/03/29/Recortada/img_jatienza_20170829-164347_imagenes_lv_otras_fuentes_20838254_109613609733414_4388983623303299072_n-kkYE-U442025183055F3H-992x558@LaVanguardia-Web.jpg",
    },
  ];


  ngOnInit() {
  }

}
