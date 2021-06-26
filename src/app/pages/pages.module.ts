import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ContactameComponent } from './contactame/contactame.component';
import { RouterModule } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactameComponent,
    ListadoProductosComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    PagesComponent,
  ]

})
export class PagesModule { }
