import { ProjectsComponent } from '../projects.component';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service/language.service';

interface ProjectDetails {
  technologies: string[];
  images: string[];
  github?: string;
  live?: string;
  nextProject?: string | undefined;
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
  languageService = inject(LanguageService);
  activeLanguage = this.languageService.activeLanguage;

  private projectsComponent = inject(ProjectsComponent);

  projectDetails: Record<string, ProjectDetails> = {
    ellpolloloco: {
      technologies: ['JavaScript', 'HTML', 'CSS'],
      images: ['assets/img/projects/polloloco.webp'],
      github: 'https://github.com/sebastianharhammer/El_POLLO_LOCO',
      live: 'https://sebastianharhammer.github.io/El_POLLO_LOCO/',
      nextProject: 'join',
    },
    join: {
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: ['assets/img/projects/join.webp'],
      github: 'https://github.com/sebastianharhammer/joinProjekt',
      live: 'https://sebastianharhammer.github.io/joinProjekt/',
      nextProject: 'pokedex',
    },
    pokedex: {
      technologies: ['HTML', 'CSS', 'JavaScript', 'RestAPI'],
      images: ['assets/img/projects/pokedex.webp'],
      github: 'https://github.com/sebastianharhammer/pokedex',
      live: 'https://sebastianharhammer.github.io/pokedex/',
      nextProject: 'ellpolloloco',
    },
  };

  closeDetail() {
    this.close.emit();
    localStorage.removeItem('projectDetailIsOpen');
  }
  openNextProject(nextProject: string | undefined) {
    if (nextProject) {
      this.projectsComponent.openProjectDetail(nextProject);
    }
  }
 
}
