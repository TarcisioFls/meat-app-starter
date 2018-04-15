import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurants.services';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  
  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.router.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant);
  }

}
