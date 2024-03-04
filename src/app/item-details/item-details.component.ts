import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../items.service";
import { Item } from "../shop-model";
import { NgIf } from "@angular/common";

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
  route: ActivatedRoute = inject(ActivatedRoute);
  itemService: ItemsService = inject(ItemsService);
  item: Item | undefined;

  public constructor() {
    const id: number = Number(this.route.snapshot.params['id']);
    this.item = this.itemService.getItem(id);
    console.log(this.item)
  }
}
