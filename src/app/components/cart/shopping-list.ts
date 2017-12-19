import { Product } from '../../product';
import {CartService} from './cartService';
import {Component} from '@angular/core';
import { OnInit, OnDestroy, Input} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CartState} from './CartState';

@Component({selector: 'app-shopping-list', templateUrl: './shopping-list.html'})

export default class shoppingList {
    loaded  = true;
    products: Product[];
    private subscription : Subscription;
    constructor(private _cartService: CartService) {}
    ngOnInit() {
        // this.loaderService.show();
        this.subscription = this
            ._cartService
            .CartState
            .subscribe((state : CartState) => {
                this.products = state.products;
                console.log(this.products);
            });

    }
    ngOnDestroy() {
        this
            .subscription
            .unsubscribe();
    }
}