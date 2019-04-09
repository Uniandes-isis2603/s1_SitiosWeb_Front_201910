import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Website } from '../website';
import { WebsiteService } from '../website.service';
import { EstadosWebService} from "../../estados-web/estados-web.service";


import {st} from "@angular/core/src/render3";
import {EstadoWeb} from "../../estados-web/estadoWeb";


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {


  constructor(private websiteService: WebsiteService,private webstateService: EstadosWebService ) { }

  @Output() consultaEstados = new EventEmitter<number>()

  @Output() agregarEstado = new EventEmitter<number>()

    @Output() sitioDetail = new EventEmitter<number>();

  websites : Website[] ;

  getWebSites(): void {
    var thumbnaiAPI= "https://api.thumbnail.ws/api/ab18504260d333b42490e206a93767ae1b0adff77399/thumbnail/get?width=480&url=";
    this.websiteService.getSites().subscribe(sites =>{
        this.websites = sites;
        this.websites.forEach(value => value.imagen=thumbnaiAPI+value.url);
        this.websites.forEach(value => {
                    var estado= this.webstateService.getEstadoActualStatic(value.id).subscribe(value1 => value.state=value1);

            }
        );
    });



  }

    consultarEstados(site:number){
        this.consultaEstados.emit(site);
        

    }

    consultarDetalle(site:number){
        this.sitioDetail.emit(site);
    }

    agregarUnEstado(site:number){
      this.agregarEstado.emit(site);
  }

  ngOnInit() {
    this.getWebSites();
  }


}
