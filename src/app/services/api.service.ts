import { Funcionario } from './../models/funcionario/funcionario';
import { Login } from './../models/funcionario/login';


import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


const URL: string = `http://127.0.0.1:5000`;

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}
  func: Funcionario = {
    email: '',
    nome: '',
    prioridade: '',
    senha: '',
    usuario: ''
  }

  public funcionarioAdm$: BehaviorSubject<Funcionario> = new BehaviorSubject(this.func);



  pegarFuncionarios(id?: number) {
    return this.http.get(`${URL}/funcionarios?id=${id == null ? '' : id}`);
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

  deletarFuncionarios(id: number){
    return this.http.delete(`${URL}/deletarFuncionario/${id}`).subscribe(resp => {
      return 'Deletado com sucesso'
    });
  }
  verificarUsuario(login: Login){
    return this.http.post<Array<any>>(`${URL}/verificarUsuario`, login);
  }
}
