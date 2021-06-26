import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactameComponent } from './contactame/contactame.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductosComponent } from './productos/productos.component';

const childRoutes: Routes = [
  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'contactame', component: ContactameComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ListadoProductosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingChildrenModule { }
