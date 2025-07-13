import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss'],
})
export class ProductCard {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<string>();
  @Output() cardClick  = new EventEmitter<string>();

  confirmationMessage = '';
  showDetails        = false;
  isSelected         = false;

  constructor(private router: Router) {}

  onAdd(event: MouseEvent) {
    event.stopPropagation();
    this.addToCart.emit(this.product.id);
    this.confirmationMessage = `${this.product.name} added to cart!`;
    setTimeout(() => this.confirmationMessage = '', 2000);
  }

  toggleDetails(event: MouseEvent) {
    event.stopPropagation();
    this.showDetails = !this.showDetails;
  }

  toggleSelection(event: MouseEvent) {
    event.stopPropagation();
    this.isSelected = !this.isSelected;
  }

  goToDetails() {
    this.router.navigate(['/product', this.product.id]);
  }

  onCardClick() {
    this.cardClick.emit(this.product.id);
  }
}
