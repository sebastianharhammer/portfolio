import {
  Component,
  inject,
  ElementRef,
  ViewChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';
import { LanguageService } from '../../services/language.service/language.service';
import { HeaderMobileComponent } from '../header-mobile/header-mobile.component';
import { RouterModule, Router } from '@angular/router';
import { ProjectDetailComponent } from '../../sections/04_projects/project-detail/project-detail.component';
@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule, HeaderMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  providers: [TranslateService],
})
export class HeaderComponent {
  @Output() close = new EventEmitter<void>();
  
  closeDetail() {
    this.close.emit();
    localStorage.removeItem('projectDetailIsOpen');
  }
  isProjectDetailOpen = localStorage.getItem('projectDetailIsOpen');

  router = inject(Router);

  imprintIsOpen = false;
  privatePolicyIsOpen = false;
  isMobileMenuOpen = false;

  openMobileMenu() {
    this.isMobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  
  scrollToSection(sectionId: string) {
    if (this.isProjectDetailOpen) {
      this.closeDetail();
      }
    setTimeout(() => {
      
      const element = document.getElementById(sectionId);
      console.log('element', element);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            const newElement = document.getElementById(sectionId);
            if (newElement) {
              newElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }, 300);
        });
      }
    }, 250);
  }

  goBack(): void {
    this.router.navigate(['/']).then(() => {
      const savedPosition = localStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem('scrollPosition');
      }
    });
  }
  goBackToProjectDetail(sectionId: string): void {
    this.router.navigate(['/']).then(() => {
      localStorage.removeItem('projectDetailIsOpen');
      this.scrollToSection(sectionId);
    });
  }
  activeLanguage: 'en' | 'de' = 'en';
  languageService = inject(LanguageService);

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', translationEN);
    translate.setTranslation('de', translationDE);
    translate.setDefaultLang('en');
    translate.use(this.activeLanguage);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.activeLanguage = language as 'en' | 'de';
    this.languageService.activeLanguage = this.activeLanguage;
    localStorage.setItem('language', language);
  }
  onMouseEnter() {
    console.log('mouse enter');
  }
  onMouseLeave() {
    console.log('mouse leave');
  }
}
