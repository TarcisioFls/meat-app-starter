import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../../restaurants/restaurants.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantService,
              private router: ActivatedRoute) { }

  ngOnInit() {

    this.reviews = this.restaurantService.reviewsOfRestaurants(this.router.parent.snapshot.params['id'])

  }

}
