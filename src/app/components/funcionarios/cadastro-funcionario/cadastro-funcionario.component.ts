import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { APIService } from './../../../services/api.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.sass'],
})
export class CadastroFuncionarioComponent implements OnInit {
  funcionario: Funcionario = {
    id: 0,
    nome: '',
    email: '',
    usuario: '',
    prioridade: '',
    senha: '',
  };
  id: any;
  mudarTitulo: boolean = false;

  constructor(
    private servive: APIService,
    private dialogRef: MatDialogRef<CadastroFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    if (this.id != null) {
      this.servive.pegarFuncionarios(Number(this.id)).subscribe((resp: any) => {
        this.funcionario = resp[0]['results'][0];
        this.mudarTitulo = true;
      });
    }
  }
  submitForm() {
    if (
      (this.funcionario.nome &&
        this.funcionario.email &&
        this.funcionario.senha &&
        this.funcionario.usuario &&
        this.funcionario.prioridade) !== ''
    ) {
      this.servive.salvarFuncionarios(this.funcionario)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Funcionário ${this.mudarTitulo ? 'editado' : 'cadastrado'} com sucesso`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.dialogRef.close();
      setTimeout(() => {
        window.location.reload();
      }, 1600);
    } else {
      console.log('Campos incompletos');
    }
  }
}
