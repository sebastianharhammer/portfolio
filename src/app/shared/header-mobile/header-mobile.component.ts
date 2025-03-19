import { Component, inject, Input, Output } from '@angular/core';
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


  closeHeader() {
    this.close.emit();
  }

  scrollToSection(sectionId: string) {
    this.closeHeader();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log("element not found");
    }
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
  onMouseEnter() {
    console.log('mouse enter');
  }
  onMouseLeave() {
    console.log('mouse leave');
  }
}
