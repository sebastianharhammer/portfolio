import { Injectable } from '@angular/core';
import { TranslateService , TranslateModule} from '@ngx-translate/core';
import { Subject } from 'rxjs';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguageEN = true;
  currentLanguageDE = false;

  languageToggle = new Subject;

  activeLanguage: 'en' | 'de' = 'en';

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', translationEN);
    translate.setTranslation('de', translationDE);
    translate.setDefaultLang('en');
    translate.use(this.activeLanguage);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.activeLanguage = language as 'en' | 'de';
    if (language === 'en') {
      this.currentLanguageEN = true;
      this.currentLanguageDE = false;
    } else {
      this.currentLanguageEN = false;
      this.currentLanguageDE = true;
  }}
}
