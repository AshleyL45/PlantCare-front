import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { HeroCarousel } from './shared/components/hero-carousel/hero-carousel';
import { ProductCardList } from './shared/components/product-card-list/product-card-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HeroCarousel, ProductCardList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  images: string[] = [
    'https://plus.unsplash.com/premium_photo-1668416114981-1d6cd2acbc7d?...',
    'https://plus.unsplash.com/premium_photo-1661598195527-7eb77099ce35?...',
    'https://plus.unsplash.com/premium_photo-1665408511441-cf99b0f6f954?...'
  ];
}
