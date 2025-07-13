import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-hero-carousel',
    standalone: true,
    imports: [CommonModule, NgbCarouselModule],
    templateUrl: './hero-carousel.html',
    styleUrls: ['./hero-carousel.scss']
})

export class HeroCarousel {
  @Input() images: string[] = [];
}
