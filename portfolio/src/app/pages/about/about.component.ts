import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  theme = 'light';
  experienceYears = 3;
  description = `I am a passionate Full Stack Developer with ${this.experienceYears} years of experience in building modern web applications using Angular, Node.js, and related technologies. I love creating clean, responsive, and interactive user experiences.`;
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((t) => (this.theme = t));
  }
}
