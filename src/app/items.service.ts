import { Injectable } from '@angular/core';
import { Item } from "./shop-model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      price: 100,
      description: 'This is item 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Item 2',
      price: 200,
      description: 'This is item 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Item 3',
      price: 300,
      description: 'This is item 3',
      image: 'https://via.placeholder.com/150'
    }
  ];

  getItems() {
    return this.items;
  }
}
