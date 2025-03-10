import { ProjectsComponent } from '../projects.component';
import { Component, Input, Output, EventEmitter,   } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CommonModule, } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '../../../shared/logo/logo.component';

interface ProjectDetails {
  technologies: string[];
  images: string[];
  github?: string;
  live?: string;
}

@Component({
  selector: 'app-project-detail',
  imports: [HeaderComponent, CommonModule, TranslateModule, LogoComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  standalone: true,
})
export class ProjectDetailComponent {
  @Input() project!: string;
  @Output() close = new EventEmitter<void>();

  projectDetails: Record<string, ProjectDetails> = {
    ellpolloloco: {
      technologies: ['JavaScript', 'HTML', 'CSS'],
      images: ['assets/img/projects/polloloco.jpg'],
      github: 'https://github.com/yourusername/el-pollo-loco',
      live: 'https://your-demo-url.com',
    },
    join: {
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      images: ['assets/img/projects/join.jpg'],
      github: 'https://github.com/yourusername/join',
      live: 'https://your-demo-url.com',
    },
    pokedex: {
      technologies: ['Angular', 'PokeAPI', 'TypeScript'],
      images: ['assets/img/projects/pokedex.jpg'],
      github: 'https://github.com/yourusername/pokedex',
      live: 'https://your-demo-url.com',
    },
  };

  closeDetail() {
    this.close.emit();
  }
}
