import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: '.Net Core', level: 90 },
    { name: 'Angular', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MS SQL', level: 80 },
    { name: 'Bootstrap', level: 95 },
    { name: 'AWS', level: 70 },
  ];

  theme = 'light';
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((t) => (this.theme = t));
  }
}
