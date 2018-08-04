import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor( private _router: Router, private httpClient: HttpClient) { }


  arregloSeries = [];

  redirect(id){
    const rutaReproductor= ['/serie',id];
    this._router.navigate(rutaReproductor)
  }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {

    this.httpClient.get(`http://localhost:1337/Serie`).subscribe((data: any[]) => {
        this.arregloSeries = data;
        console.log(this.arregloSeries)
      }
    );


  }

}
