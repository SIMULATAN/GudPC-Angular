import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from "../items.service";
import { Item } from "../shop-model";
import { NgIf } from "@angular/common";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  itemService: ItemsService = inject(ItemsService);
  cartService: CartService = inject(CartService);
  item: Item | undefined;

  public constructor() {
    const id: number = Number(this.route.snapshot.params['id']);
    this.item = this.itemService.getItem(id);
  }

  addToCart() {
    if (this.item) {
      this.cartService.addItem(this.item);
    }
    void this.router.navigate(['cart'])
  }
}
