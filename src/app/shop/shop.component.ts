import { Component, inject } from '@angular/core';
import { ItemsService } from "../items.service";
import { Item } from "../shop-model";
import { ItemCardComponent } from "../item-card/item-card.component";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ItemCardComponent,
    NgForOf
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  items: Item[] = [];
  itemsService: ItemsService = inject(ItemsService);

  constructor() {
    this.items = this.itemsService.getItems();
  }
}
