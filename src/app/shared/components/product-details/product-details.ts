import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  imports: [
    MatFormField,
    MatSelect,
    MatLabel,
    MatOption,
  ],
  styleUrls: ['./product-details.scss']
})

export class ProductDetails {
  // données du produit
  plantName = 'Monstera Deliciosa';
  plantLatinName = 'Monstera deliciosa';
  imageUrl = 'https://images.unsplash.com/photo-1545165375-1b744b9ed444?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  priceMin = 210;
  priceMax = 250;

  sizes = ['Small', 'Medium', 'Large'];
  colors = ['Green', 'Pink', 'Cream'];

  selectedSize = this.sizes[0];
  selectedColor = this.colors[0];

  showShipping = false;

  quantity = 1;

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    console.log(`Ajouté au panier : ${this.plantName} x${this.quantity}`);
  }
}
