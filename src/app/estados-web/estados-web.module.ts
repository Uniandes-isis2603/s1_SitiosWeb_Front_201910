import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosWebListComponent } from './estados-web-list/estados-web-list.component';
import { EstadosWebCreateComponentComponent } from './estados-web-create-component/estados-web-create-component.component';

@NgModule({
  imports: [
    CommonModule
  ], exports: [
        EstadosWebListComponent,
        EstadosWebCreateComponentComponent
    ],
  declarations: [EstadosWebListComponent, EstadosWebCreateComponentComponent]
})
export class EstadosWebModule { }
