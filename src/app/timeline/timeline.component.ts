import { Component, ViewChild } from "@angular/core";
import moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid, NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Analysis",
              y: [
                new Date("2018-09-07").getTime(),
                new Date("2018-09-12").getTime()
              ],
              fillColor: "#008FFB"
            },
            {
              x: "Design",
              y: [
                new Date("2018-09-12").getTime(),
                new Date("2018-09-16").getTime()
              ],
              fillColor: "#00E396"
            },
            {
              x: "Coding",
              y: [
                new Date("2018-09-16").getTime(),
                new Date("2018-09-23").getTime()
              ],
              fillColor: "#775DD0"
            },
            {
              x: "Testing",
              y: [
                new Date("2018-09-23").getTime(),
                new Date("2018-09-28").getTime()
              ],
              fillColor: "#FEB019"
            },
            {
              x: "Deployment",
              y: [
                new Date("2018-09-28").getTime(),
                new Date("2018-09-31").getTime()
              ],
              fillColor: "#FF4560"
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar",
        background: "#222",
        foreColor:"#fff"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: number[], opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, "days");
          return label + ": " + diff + (diff > 1 ? " days" : " day");
        },
        style: {
          colors: ["#f3f4f5", "#fff"]
        }
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        show: false
      },
      grid: {
        row: {
          colors: ["#222", "#333"],
          opacity: 1
        }
      }
    };
  }
}
