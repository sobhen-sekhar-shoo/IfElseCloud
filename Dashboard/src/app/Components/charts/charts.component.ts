import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  LineChart: any = [];
  BarChart: any = [];
  Doughnut: any = [];

  ngOnInit(): void {

    this.LineChart = new Chart('LineChart', {
      type: 'line',
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          label: 'All Days',
          data: [0, 20, 10, 30, 15, 35, 50],
          fill: false,
          borderColor: '#2196f3',
          backgroundColor: '#2196f3',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });


    this.BarChart = new Chart('BarChart', {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Income',
            data: [145,70,50,170,80,165,85,95,75,100,200,150],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


    this.Doughnut = new Chart('Doughnut', {
      type: 'doughnut',
      data: {
        labels: ["Men", "Electronics", "Women"],
        datasets: [{
          data: [30,20,50],

          borderColor: ['#2196f38c', '#f443368c', '#3f51b570'],
          backgroundColor: ['#3C5ACF', '#6684ED', '#90A6FC'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

  }
}
