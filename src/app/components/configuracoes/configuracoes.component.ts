import { LoginComponent } from './../../view/login/login.component';
import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.sass'],
})
export class ConfiguracoesComponent implements OnInit {
  constructor(private service: APIService) {}

  ngOnInit(): void {
    this.func = this.service.funcionarioAdm$.getValue()
  }

func: Funcionario = {
  usuario:  '',
  senha:  '',
  nome:  '',
  prioridade:  '',
  email:  '',
}


  submitForm() {
    if (
      (this.service.funcionarioAdm$.getValue().nome &&
        this.service.funcionarioAdm$.getValue().email &&
        this.service.funcionarioAdm$.getValue().senha &&
        this.service.funcionarioAdm$.getValue().usuario &&
        this.service.funcionarioAdm$.getValue().prioridade) !== ''
    ) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Administrador editado com sucesso`,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1600);
      this.service.salvarFuncionarios(this.service.funcionarioAdm$.getValue());
    } else {
      console.log('Campos incompletos');
    }
  }
}
