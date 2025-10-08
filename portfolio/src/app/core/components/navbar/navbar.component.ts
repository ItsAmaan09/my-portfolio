import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  theme = 'light';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((t) => (this.theme = t));
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
