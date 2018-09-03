import { HttpClient } from '@angular/common/http';
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
                private http: HttpClient) {

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
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .map(order => order.id);
    }
    
    clean() {
        
        return this.cart.clear();
    }

}