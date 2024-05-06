import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CalendarModule } from 'primeng/calendar';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FormsModule,
    CalendarModule,
    NgStyle
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  rangeDates: Date[] = [];

  ngOnInit() {
    let now = new Date()
    let nextWeek = new Date()
    nextWeek.setDate(now.getDate() + 6);
    this.rangeDates.push(now)
    this.rangeDates.push(nextWeek)
    console.log(this.rangeDates)
  }

}
