import { APIService } from './../../services/api.service';
import {
  ChartData,
  ChartEvent,
  ChartOptions,
  ChartType,
} from './../../../../node_modules/chart.js/types/index.esm.d';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  quantFunc: number = 0;
  livrosDados: ChartData<'pie'> = {
    labels: ['Disponíveis', 'Alugados', 'Indisponíveis'],
    datasets: [
      { data: [1000, 1200, 1050] },
      { data: [0], backgroundColor: 'red' },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Disponibilidade dos Livros',
      },
    },
  };
  grauAtividades: ChartData<'bar'> = {
    labels: ['Janeiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Aluguéis' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Devoluções' },
    ],
  };

  grauOptions: ChartOptions = {

    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Grau de Atividades',
      },
    },
  };
  public polarAreaChartLabels: string[] = [ 'Computação', 'Geografia', 'Matemática', 'História', 'Física'];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [ {
      data: [ 300, 500, 100, 40, 120 ],

    } ]
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  time: string = '00:00:00';

  constructor(private service: APIService) {}
  ngOnDestroy(): void {
    console.log('OnDestroy Dashboard');
  }

  ngOnInit(): void {
    console.log('OnInit Dashboard');
    setInterval(() => {
      const date = new Date();
      this.time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    }, 1000);
    this.service.pegarFuncionarios().subscribe((data) => {
      this.quantFunc = data.length
    })
  }
}
