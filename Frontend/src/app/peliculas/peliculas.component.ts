import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor() { }


  arregloPeliculas=[
    {
      img:"https://www.atlantasymphony.org/-/media/Sites/ASO2011/Event-Media/17-18/Movies/Harry-Potter-2/evlg_Harry-Potter-2-1.jpg",
    },
    {
      img:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO_AvengersAgeUltron_FINAL.jpg",
    },
    {
      img:"https://images-na.ssl-images-amazon.com/images/I/914jy25FJGL._SY355_.jpg",
    },
    {
      img:"https://vignette.wikia.nocookie.net/lossimpson/images/8/84/Movie_logo.png/revision/latest?cb=20130131134154&path-prefix=es",
    },
    {
      img:"https:https://vignette.wikia.nocookie.net/spongebob/images/d/d1/The_SpongeBob_SquarePants_Movie_chapter_book.jpg/revision/latest?cb=20160314053455",
    },
    {
      img:"http://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/96/32/96/20460154.jpg",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbe2ttHLzo3ggKo9b5O1T7XeM8oU1uZagSJ_3vIpfU-nJVt2TehA",
    },
    {
      img:"https://cultrbox.files.wordpress.com/2015/08/need-for-speed-poster.jpg?w=412",
    },
    {
      img:"https://pics.filmaffinity.com/silicon_valley_tv_series-787580757-large.jpg",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGIntVCxACyAjW3MkVI7RjeOqR_N_1i7mybdBDx1jk046mAK5",
    },
    ];

  ngOnInit() {
  }

}
