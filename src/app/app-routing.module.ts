import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';

const routes: Routes = [
  {path:"" ,redirectTo:"home",pathMatch:'full'},
  {path:"home" ,component:HomeComponent},
  {path:"portfolio" ,component:PortfolioComponent},
  {path:"about" ,component:AboutComponent},
  {path:"contact" ,component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
