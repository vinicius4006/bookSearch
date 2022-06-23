import { APIService } from './../../services/api.service';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/funcionario/funcionario';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.sass'],
})
export class FuncionariosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', "nome", "email", "telefone", "actions"];
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
    this.service.pegarFuncionarios().subscribe(data => {

      this.stringJson = JSON.stringify(data);
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
