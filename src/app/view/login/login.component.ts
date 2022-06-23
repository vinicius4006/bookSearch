import { Observable } from 'rxjs';
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

  username: string = '';
  password: string = '';
  loading: boolean = false;
  ngOnInit(): void {}

  login() {
    if (this.username != '' && this.password != '') {
      let login: Login = {
        email: this.username,
        senha: this.password,
      };
      this.loading = true;
      setTimeout(() => {
        this.service.verificarUsuario(login).subscribe((response) => {
          response.length == 1
            ? this.router.navigate(['/homepage/dashboard'])
            : (this.loading = false);
        });
      }, 2000);
    }
  }
}
