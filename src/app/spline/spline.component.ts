import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  NgApexchartsModule,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-spline',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './spline.component.html',
  styleUrl: './spline.component.css'
})
export class SplineComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "FINISHED",
          data: [131, 140, 128, 151, 142, 109, 100, 4],
          color: "#6D28D9"
        },
        {
          name: "FAILED",
          data: [11, 32, 45, 32, 34, 52, 41,20],
          color: "#EF4444"
        }
      ],
      chart: {
        height: 350,
        type: "area",
        background: "#222",
        foreColor:"#bbb"
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-11",
          "2018-09-12",
          "2018-09-13",
          "2018-09-14",
          "2018-09-15",
          "2018-09-16",
          "2018-09-17",
          "2018-09-18"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy"
        }
      }
    };
  }

  public generateData(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

}
