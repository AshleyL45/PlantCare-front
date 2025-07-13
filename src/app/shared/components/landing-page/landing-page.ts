import { Component, OnInit }     from '@angular/core';
import { CommonModule }           from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { Product }                from '../../../models/product';
import { ProductsService }        from '../../../services/products.service';
import { ProductCard }            from '../product-card/product-card';
import {HeroCarousel} from '../hero-carousel/hero-carousel';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ProductCard, HeroCarousel, RouterLink],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.scss']
})
export class LandingPage implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router               // ← on ajoute Router
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onCardClick(id: string) {
    this.router.navigate(['/product', id]);
  }

  images: string[] = [
    'https://plus.unsplash.com/premium_photo-1668416114981-1d6cd2acbc7d?...',
    'https://plus.unsplash.com/premium_photo-1661598195527-7eb77099ce35?...',
    'https://plus.unsplash.com/premium_photo-1665408511441-cf99b0f6f954?...'
  ];

}
