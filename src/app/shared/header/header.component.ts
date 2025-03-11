import { Component, inject, ElementRef, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';
import { LanguageService } from '../../services/language.service/language.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  providers: [TranslateService],
})
export class HeaderComponent {
/*   @ViewChild('about-me') aboutMe!: ElementRef;
  @ViewChild('skill-set') skillSet!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contact') contact!: ElementRef; */

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    console.log(element);
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
