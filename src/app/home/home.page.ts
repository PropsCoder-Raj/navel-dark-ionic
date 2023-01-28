import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  startDate: any;
  endDate: any;

  constructor() {}

  
  pinFormatter(value: number) {
    let person = Math.round(value/4);
    return `${person} Person`;
  }

}
