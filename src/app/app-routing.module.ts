import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './view/home-page/home-page.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'homepage', component: HomePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
