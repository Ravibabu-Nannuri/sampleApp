import {CartService} from './CartService';
import {Component, Input} from '@angular/core';
import {Product} from '../../product';
@Component({selector: 'app-shopping-cart-item', templateUrl: './shopping-cart-item.html'})

export default class shoppingCartItem {
    @Input()product: Product;
    constructor(private _cartService: CartService) {}
    AddProduct(_product: Product) {
        _product.added = true;
        this
            ._cartService
            .addProduct(_product);
    }
    RemoveProduct(_product: Product) {
        _product.added = false;
        this
            ._cartService
            .removeProduct(_product.id);
    }

}
