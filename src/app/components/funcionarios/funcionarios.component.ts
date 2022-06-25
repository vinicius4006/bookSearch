import { APIService } from './../../services/api.service';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.sass'],
})
export class FuncionariosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', "nome", "email", "usuario", "actions"];
  dataSource: MatTableDataSource<Funcionario>;
  stringObject: any;
  stringJson: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog, private service: APIService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();

  }

  ngOnInit(): void {
    console.log('Build Funcionários');
    this.service.pegarFuncionarios().subscribe((data: any) => {

      this.stringJson = JSON.stringify(data[0]['results']);
      this.stringObject = JSON.parse(this.stringJson)
      console.log(this.stringObject)

      this.dataSource = new MatTableDataSource(this.stringObject)
      console.log(this.dataSource)

    })

  }

  ngOnDestroy(): void {
    console.log('Destroy Funcionarios');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

deletarFuncionario(id: number){

Swal.fire({
  title: 'Você tem certeza?',
  text: "Não será mais possível recuperar",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Deletar'
}).then((result) => {
  if (result.isConfirmed) {
    this.service.deletarFuncionarios(id);
    Swal.fire(
      'Deletado!',
      'Funcionário removido com sucesso!',
      'success'
    )
    setTimeout(() => {
      window.location.reload();
    }, 1600);
  }
})

}




openDialog(id?: number) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = {
    id: id
  }

  const dialogRef = this.dialog.open(CadastroFuncionarioComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
