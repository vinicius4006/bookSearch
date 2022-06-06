import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './view/home-page/home-page.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'homepage', component: HomePageComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'funcionarios', component: FuncionariosComponent
  },
  {
    path:'configuracoes', component: ConfiguracoesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
