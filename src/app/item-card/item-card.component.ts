import { Component, Input } from '@angular/core';
import { Item } from "../shop-model";
import { RouterLink } from "@angular/router";
import { TruncatePipe } from "../truncate";

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    RouterLink,
    TruncatePipe
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() item! : Item;
}
