import { Component, OnInit } from '@angular/core';
import { Change } from '../change';
import { ChangesService } from '../changes.service';


@Component({
  selector: 'app-changes-list',
  templateUrl: './changes-list.component.html',
  styleUrls: ['./changes-list.component.css']
})
export class ChangesListComponent implements OnInit {

  changes: Change[];
  expande: boolean;
  edit;
  busqueda:string;
  constructor(private changeService: ChangesService) { }

  /**
    * Asks the service to update the list of changes
    */
  getChanges(): void {
    this.changeService.getChanges()
      .subscribe(changes => {
        this.changes = changes;
      });
  }

  editar(id: number): void {
    this.edit[id] = !this.edit[id];
  }

  createChange(): void {
    this.expande=!this.expande;
  }

  buscar():void {
    console.log(this.busqueda);
    this.changeService.filterChange("id", this.busqueda).subscribe( changes => {
      this.changes = changes;
    });
  }

  ngOnInit() {
    this.getChanges();
    this.expande=false;
    this.edit = new Array()
    
  }

}
