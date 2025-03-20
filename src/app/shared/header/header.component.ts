import { Component, inject, ElementRef, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';
import { LanguageService } from '../../services/language.service/language.service';
import { HeaderMobileComponent } from '../header-mobile/header-mobile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule, HeaderMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  providers: [TranslateService],
})
export class HeaderComponent {

  router = inject(Router);

  imprintIsOpen = false;
  privatePolicyIsOpen = false;
  isMobileMenuOpen = false;

  openMobileMenu() {
    this.isMobileMenuOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
  

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log("element not found");
    }
  }

  goBack(sectionId: string): void {
    this.router.navigate(['/']).then(() => {
      const savedPosition = localStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem('scrollPosition');
      }
    });
    this.scrollToSection(sectionId);
  }
  
  activeLanguage: 'en' | 'de' = 'en';
  languageService = inject(LanguageService);

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', translationEN);
    translate.setTranslation('de', translationDE);
    translate.setDefaultLang('en');
    translate.use(this.activeLanguage);
    this.imprintIsOpen = localStorage.getItem('imprintIsOpen') === 'true';
    console.log(this.imprintIsOpen)
    this.privatePolicyIsOpen = localStorage.getItem('privatePolicyIsOpen') === 'true';
    console.log(this.privatePolicyIsOpen)
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
