import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { APIService } from './../../../services/api.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.sass'],
})
export class CadastroFuncionarioComponent implements OnInit {
  // email: string = '';
  // nome: string = '';
  // endereco: string = '';
  // senha: string = '';
  // cpf: string = '';
  // prioridade: string = '';
  // tel: string = '';
  funcionario: Funcionario = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    prioridade: '',
    senha: '',
    telefone: '',
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
    if( this.id != null){
       this.servive.pegarFuncionarios(Number(this.id)).subscribe((resp) => {
      this.funcionario = resp[0];
      this.mudarTitulo = true;
    });
    }

  }
  submitForm() {
    console.log(this.funcionario);
    // if((this.email && this.nome && this.endereco && this.senha && this.cpf && this.prioridade && this.tel) !== ''){
    //   let func: Funcionario = {
    //     id: 0,
    //     email: this.email,
    //     nome: this.nome,
    //     endereco: this.endereco,
    //     senha: this.senha,
    //     cpf: this.cpf,
    //     prioridade: this.prioridade,
    //     telefone: this.tel
    //   }
    //   let res = this.servive.salvarFuncionarios(func);
    //   console.log(res);
    // }else {
    //   console.log("Preencha todos")
    // }
  }
}
