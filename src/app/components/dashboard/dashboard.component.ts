import { ChartData, ChartOptions } from './../../../../node_modules/chart.js/types/index.esm.d';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  salesData: ChartData<'pie'> = {
    labels: ['Disponíveis', 'Alugados', 'Indisponíveis'],
    datasets: [

      {data: [1000, 1200, 1050]},
      {data: [0], backgroundColor:'red'}
    ],
  };


  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title:{
        display: true,
        text: 'Disponibilidade dos Livros'
      }
    }
  }

  constructor() { }
  ngOnDestroy(): void {
    console.log("OnDestroy Dashboard")
  }

  ngOnInit(): void {
    console.log("OnInit Dashboard")
  }



}
