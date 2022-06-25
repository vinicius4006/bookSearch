import { BehaviorSubject, Observable } from 'rxjs';
import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { Login } from 'src/app/models/funcionario/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private service: APIService, private router: Router) {}


  loading: boolean = false;
  ngOnInit(): void {}
  username: string = '';
  password: string = '';



  login() {
    if (this.username != '' && this.password != '') {
      let login: Login = {
        usuario: this.username,
        senha: this.password,
      };

      this.loading = true;
      setTimeout(() => {
        this.service.verificarUsuario(login).subscribe((response) => {
          if (response.length == 1) {
            this.service.funcionarioAdm$.next(response[0])
            this.router.navigate(['/homepage/dashboard']);
          } else {
            this.loading = false;
          }
        });
      }, 2000);
    }
  }
}
