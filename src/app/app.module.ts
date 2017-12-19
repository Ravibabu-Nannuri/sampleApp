import {FormsModule} from '@angular/forms';
import LoaderComponent from './components/loader/loader-component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import HeaderComponent from './components/header/app-header';
import FooterComponent from './components/footer/app-footer';
import {LoaderService} from './components/loader/loader-service';
import {HttpClient} from './services/http.service';
import shoppingCart from './components/cart/shopping-cart';
import {HttpModule} from '@angular/http';
import shoppingCartItem from './components/cart/shopping-cart-item';
import shoppingList from './components/cart/shopping-list';
import {CartService} from './components/cart/cartService';

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        shoppingCart,
        shoppingCartItem,
        shoppingList
    ],
    providers: [
        LoaderService, HttpClient, CartService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
