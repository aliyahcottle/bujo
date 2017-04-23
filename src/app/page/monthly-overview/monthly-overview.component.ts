import { Component, OnInit } from '@angular/core';
import { months } from './months';

@Component({
  selector: 'monthly-overview',
  templateUrl: './monthly-overview.component.html',
  styleUrls: ['./monthly-overview.component.scss']
})
export class MonthlyOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private gridData: any[] = months;
  title = 'April';

}
