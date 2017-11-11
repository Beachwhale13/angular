import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent }from './edit/edit.component';
import { HomeComponent }from './home/home.component';
import { NewComponent }from './new/new.component';
import { ProductsComponent }from './products/products.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: HomeComponent},
  {path: 'home', pathMatch:'full', component: HomeComponent},
  {path: 'products', pathMatch:'full', component: ProductsComponent},
  {path: 'products/new', pathMatch:'full', component: NewComponent},
  {path: 'products/edit/:id', pathMatch:'full', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
