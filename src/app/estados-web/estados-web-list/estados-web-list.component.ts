import { Component, OnInit } from '@angular/core';
import { EstadoWeb } from '../estadoWeb';
import { EstadosWebService } from '../estados-web.service';

import {st} from "@angular/core/src/render3";


@Component({
  selector: 'app-estados-web-list',
  templateUrl: './estados-web-list.component.html',
  styleUrls: ['./estados-web-list.component.css']
})
export class EstadosWebListComponent  {

  constructor(private estadosWebService: EstadosWebService) { }

  estadosWeb : EstadoWeb[] ;

  getEstadosWeb(sitio:number): void {
    this.estadosWebService.getEstadosSitio(sitio).subscribe(estados =>
        this.estadosWeb = estados);
  }
}