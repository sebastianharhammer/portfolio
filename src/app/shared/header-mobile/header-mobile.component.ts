import { Component, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';
import { LanguageService } from '../../services/language.service/language.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
  standalone: true,
})
export class HeaderMobileComponent {
  @Input() isMobileMenuOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  router = inject(Router);

  closeDetail() {
    this.close.emit();
    localStorage.removeItem('projectDetailIsOpen');
  }
  isProjectDetailOpen = localStorage.getItem('projectDetailIsOpen');


  openMobileMenu() {
    this.isMobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  closeHeader() {
    this.close.emit();
  }

  scrollToSection(sectionId: string) {
    this.closeHeader();
    console.log('header closed');
    setTimeout(() => {
    if (this.isProjectDetailOpen) {
      this.closeDetail();
      console.log('project detail closed');
      }
    }, 100);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      const headerHeight =
        document.querySelector('.navbar-menu')?.clientHeight || 80;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight - 10;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else if (
        localStorage.getItem('imprintIsOpen') === 'true' ||
        localStorage.getItem('privacyPolicyIsOpen') === 'true'
      ) {
        console.log(element);
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.scrollToSection(sectionId);
          }, 300);
        });
      }
    }, 100);
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
  }
}
