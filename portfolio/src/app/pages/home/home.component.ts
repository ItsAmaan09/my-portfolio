import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  theme = 'light';
  title = 'Full Stack Developer';
  name = 'Mohammed Amaan';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(t => this.theme = t);
  }
}
