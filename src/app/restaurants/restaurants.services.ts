import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';
import { ErrorHandler } from './../app.error.handle';

import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantService {
    
    constructor(private http: Http) {}

    restaurants(search?: string): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}}).map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurants(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}