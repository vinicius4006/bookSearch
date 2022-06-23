import { Login } from './../models/funcionario/login';
import { Funcionario } from 'src/app/models/funcionario/funcionario';

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


const URL: string = `http://127.0.0.1:5000`;

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  pegarFuncionarios(id?: number) {
    return this.http.get<Funcionario[]>(`${URL}/funcionarios?id=${id == null ? '' : id}`);
  }

  salvarFuncionarios(funcionario: Funcionario) {
    return this.http.post<Funcionario>(`${URL}/salvarFuncionario`, funcionario).subscribe(response => {
      console.log(response)
    },
    error => {
      if(error.status == 400){
        console.log(error)
      }
    }
    )
  }
  verificarUsuario(login: Login){
    return this.http.post<Array<any>>(`${URL}/verificarUsuario`, login);
  }
}
