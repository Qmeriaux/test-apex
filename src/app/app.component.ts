import { Component } from "@angular/core";


import { RouterOutlet } from '@angular/router';
import {GaugeComponent} from "./gauge/gauge.component";
import {SplineComponent} from "./spline/spline.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {HeatmapComponent} from "./heatmap/heatmap.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {MetergroupComponent} from "./metergroup/metergroup.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GaugeComponent,
    SplineComponent,
    TimelineComponent,
    HeatmapComponent,
    CalendarComponent,
    MetergroupComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

}
