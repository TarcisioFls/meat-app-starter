import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-rating-component',
  templateUrl: './rating-component.component.html'
})
export class RatingComponentComponent implements OnInit {

  private rates: number[] = [1,2,3,4,5];

  private rate: number = 0;

  private previousRate: number

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate;
  }

}
