import { Component, OnInit } from '@angular/core';
import { weekListInterface } from './weekList.interface';
import { getWeekList, getThisMonth, getThisYear } from './weekList';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DataService]
})
export class CalendarComponent implements OnInit {

  weekList: weekListInterface[] = getWeekList();
  thisMonth: string = getThisMonth();
  thisYear: number = getThisYear();

  message!: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  activateStatus(day: weekListInterface)
  {
    this.weekList.forEach(element => element.status = false)
    day.status = true;
    this.data.changeMessage(day.day)
  }

  goToToday()
  {
    this.activateStatus(this.weekList[this.weekList.length - 1])
  }

}
