import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  providers: [DataService]
})
export class MiddleComponent implements OnInit {

  message!: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
