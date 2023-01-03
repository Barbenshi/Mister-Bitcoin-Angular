import { Component, Input,OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
// import { default as Annotation } from 'chartjs-plugin-annotation';
// import {default} from 'char'
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data!:any 
  // @Input() lineChartOptions:any
  // @Input() lineChartType:any
  constructor() {
    // Chart.register(Annotation)
  }

  ngOnInit(): void {
    this.lineChartData.datasets[0].data = this.data.values
    this.lineChartData.datasets[0].label = this.data.name
  }

  get labels(){
  const today = new Date()
  const fiveMonthsAgo =new Date()
  fiveMonthsAgo.setMonth(today.getMonth() - 5)
  let currentDate = fiveMonthsAgo;
  const labels = []
  while(currentDate<=today){
    labels.push(currentDate.toLocaleDateString('en-US',{month:'long',day:'2-digit'}))
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return labels
}


  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.data?.values|| [],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: this.labels
  };

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },
    },

    plugins: {
      legend: { display: true },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         display: true,
      //         position: 'center',
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold'
      //         }
      //       }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

}
