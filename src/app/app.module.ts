import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './view/home-page/home-page.component';
import { LoginComponent } from './view/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { NgChartsModule } from 'ng2-charts';
import { CadastroFuncionarioComponent } from './components/funcionarios/cadastro-funcionario/cadastro-funcionario.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    DashboardComponent,
    FuncionariosComponent,
    ConfiguracoesComponent,
    CadastroFuncionarioComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
