import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  imports: [TranslateModule, ProjectDetailComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 languageService = inject(LanguageService);
 selectedProject: string = '';

 isProjectDetailVisible = false;

 openProjectDetail(project: string) {
  this.isProjectDetailVisible = true;
  localStorage.setItem('projectDetailIsOpen', 'true');
  this.selectedProject = project;
  document.body.style.overflow = 'hidden';
 }

 closeProjectDetail() {
  this.isProjectDetailVisible = false;
  document.body.style.overflow = 'auto';
 }
}
