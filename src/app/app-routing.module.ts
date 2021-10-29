import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { HeroesComponent } from './heroes/heroes.component';
const routes: Routes = [
  {path:"c1",component: C1Component },
  {path: "heroes", component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [C1Component,HeroesComponent];