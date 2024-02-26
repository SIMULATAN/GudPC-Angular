import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ShopComponent } from "./shop/shop.component";

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
    title: "Not found",
    path: "**",
    component: HomeComponent
  }
];
