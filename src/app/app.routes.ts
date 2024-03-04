import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ShopComponent } from "./shop/shop.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { CartComponent } from "./cart/cart.component";

export const routes: Routes = [
  {
    title: "Home",
    path: "",
    component: HomeComponent
  },
  {
    title: "Shop",
    path: "shop",
    component: ShopComponent
  },
  {
    title: "Item details",
    path: "details/:id",
    component: ItemDetailsComponent
  },
  {
    title: "Cart",
    path: "cart",
    component: CartComponent
  },
  {
    title: "Not found",
    path: "**",
    component: HomeComponent
  }
];
