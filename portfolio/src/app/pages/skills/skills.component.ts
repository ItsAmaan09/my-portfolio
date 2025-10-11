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
    { name: '.Net Core', level: 60 },
    { name: 'Angular', level: 70 },
    { name: 'Node.js', level: 50 },
    { name: 'MS SQL', level: 50 },
    { name: 'Bootstrap', level: 50 },
    { name: 'AWS', level: 20 },
  ];

  theme = 'light';
  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((t) => (this.theme = t));
  }
}
