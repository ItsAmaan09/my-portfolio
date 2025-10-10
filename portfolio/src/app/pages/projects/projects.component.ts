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
      title: 'Portfolio Website',
      desc: 'Personal portfolio built with Angular, Bootstrap, and Netlify deployment.',
      tech: ['Angular', 'Bootstrap', 'Netlify'],
      github: 'https://github.com/yourname/portfolio',
      live: 'https://your-portfolio.netlify.app'
    },
    {
      title: 'Task Manager App',
      desc: 'Full-stack task management app with Angular frontend and Node.js backend.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourname/task-manager',
      live: 'https://taskmanager-demo.netlify.app'
    },
    {
      title: 'E-Commerce Store',
      desc: 'Responsive shopping site with cart and product filters.',
      tech: ['Angular', 'Express', 'MongoDB'],
      github: 'https://github.com/yourname/ecommerce',
      live: 'https://shop-demo.netlify.app'
    }
  ];

   constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(t => this.theme = t);
  }
}
