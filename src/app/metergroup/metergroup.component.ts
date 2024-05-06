import { Component } from '@angular/core';
import {MeterGroupModule} from "primeng/metergroup";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-metergroup',
  standalone: true,
  imports: [
    MeterGroupModule,
    ButtonModule,
    CardModule,
    NgForOf
  ],
  templateUrl: './metergroup.component.html',
  styleUrl: './metergroup.component.css'
})
export class MetergroupComponent {
  value = [
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
  ];

}
