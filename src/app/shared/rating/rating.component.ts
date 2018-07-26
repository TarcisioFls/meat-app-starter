import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating-component',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  private rates: number[] = [1,2,3,4,5];

  private rate: number = 0;

  private temporaryRate: number = 0;

  @Output()
  private rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate;
    this.rated.emit(this.rate);
  }

  setPreviousRate(rate: number) {
    this.temporaryRate = rate;
    if (this.temporaryRate !== this.rate) {
      this.rate = this.temporaryRate;
    }
  }

  cleanPreviousRate() {
    if (this.temporaryRate < this.rate) {
      this.rate = this.temporaryRate;
    }
  }

}
