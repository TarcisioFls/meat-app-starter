import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Scheduler } from 'rxjs/Scheduler';

import { MEAT_API } from './../app.api';

import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Injectable()   
export class OrderService {

    constructor(private cart: ShoppingCartService,
                private http: Http) {

    }

    cartItems(): CartItem[] {
        return this.cart.items;
    }

    increaseQty(item: CartItem) {
        this.cart.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cart.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cart.removeItem(item);
    }

    itemsValue(): number {
        return this.cart.total();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/orders`
            , JSON.stringify(order), new RequestOptions({headers: headers}))
                .map(response => response.json())
                    .map(order => order.id);
    }
    
    clean() {
        
        return this.cart.clear();
    }

}