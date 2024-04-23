import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { PastaMenuComponent } from './pasta-menu/pasta-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pizzas', component: PizzaMenuComponent},
  { path: 'pasta', component: PastaMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
