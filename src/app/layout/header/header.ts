import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  faUser = faUser;
  faCart = faShoppingCart;
}
