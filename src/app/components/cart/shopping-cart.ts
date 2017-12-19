import { Component, OnInit } from '@angular/core';
import {CartService} from './CartService';
import {Product} from '../../product';
@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.html'
})

export default class shoppingCart implements OnInit {
    constructor(private cart_Service: CartService){
    }
    Products: Product[];
       ngOnInit() {
        this.cart_Service.getAllProducts().subscribe(
            data => this.Products = data,
             err => {
                 // Log errors if any
                 console.log(err);
             });

    }
}
