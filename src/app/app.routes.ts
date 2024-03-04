import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ShopComponent } from "./shop/shop.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";

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
    title: "Not found",
    path: "**",
    component: HomeComponent
  }
];
