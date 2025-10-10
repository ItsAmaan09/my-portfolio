import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 theme = 'light';
  year = new Date().getFullYear();
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(t => (this.theme = t));
  }
}
