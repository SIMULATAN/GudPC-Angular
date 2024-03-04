import { Injectable } from '@angular/core';
import { Item } from "./shop-model";

export interface CartItem extends Item {
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = []

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items.find(item => item.id === id);
  }

  index(item: Item) {
    return this.items.findIndex(i => i.id === item.id);
  }

  addItem(item: Item) {
    const index = this.index(item);
    if (index > 0) {
      this.items[index].quantity++;
    } else {
      this.items.push({ quantity: 1, ...item })
    }
  }

  removeCartItemById(id: number) {
    this.items = this.items.filter(item => item.id !== id)
  }

  incrementItem(id: number) {
    this.getItem(id)!.quantity++;
  }

  decrementItem(id: number) {
    this.getItem(id)!.quantity--;
  }

  clearCart() {
    this.items = [];
  }
}
