import { Component, inject } from '@angular/core';
import { CartService } from "../cart.service";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService: CartService = inject(CartService)

  clear() {
    this.cartService.clearCart();
  }

  incrementItem(id: number) {
    this.cartService.incrementItem(id);
  }

  decrementItem(id: number) {
    this.cartService.decrementItem(id);
  }

  removeItem(id: number) {
    this.cartService.removeCartItemById(id);
  }
}
