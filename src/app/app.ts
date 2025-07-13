import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
}
