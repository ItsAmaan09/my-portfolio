import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  theme = 'light';

  projects = [
    {
      title: 'Tic Tac Toe Game',
      desc: 'A simple Tic Tac Toe game built with Angular and also this is a PWA app.',
      tech: ['Angular', 'TypeScript'],
      github: 'https://github.com/ItsAmaan09/Tic-Tac-Toe',
      live: 'https://t3-play.netlify.app/'
    },
    {
      title: 'Guess the number',
      desc: 'A number guessing game with Angular frontend.',
      tech: ['Angular', 'TypeScript'],
      github: 'https://github.com/ItsAmaan09/guess-the-number',
      live: 'https://guess-the-number-sigma-vert.vercel.app/'
    },
    {
      title: 'E-Commerce Store',
      desc: 'Responsive shopping site with cart and product filters and search functionality.',
      tech: ['Angular', 'NestJS', 'MySQL', 'Sequelize', 'TypeScript'],
      github: '',
      live: ''
    }
  ];

   constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(t => this.theme = t);
  }
}
