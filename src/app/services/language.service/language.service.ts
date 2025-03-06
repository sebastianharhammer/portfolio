import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Change Subject to BehaviorSubject to always have the current value
  private languageSubject = new BehaviorSubject<'en' | 'de'>('en');
  activeLanguage$ = this.languageSubject.asObservable();
  
  get activeLanguage(): 'en' | 'de' {
    return this.languageSubject.value;
  }
  
  set activeLanguage(value: 'en' | 'de') {
    this.languageSubject.next(value);
  }
  
  constructor(private translate: TranslateService) {
    translate.setTranslation('en', translationEN);
    translate.setTranslation('de', translationDE);
    translate.setDefaultLang('en');
    translate.use(this.activeLanguage);
  }
  
  /*   currentLanguageEN = true;
    currentLanguageDE = false; */


/*   useLanguage(language: string) {
    console.log('wird ausgeführt');
    this.translate.use(language);
    this.activeLanguage = language as 'en' | 'de';
    if (language === 'en') {
      this.currentLanguageEN = true;
      this.currentLanguageDE = false;
      console.log('if en', this.currentLanguageEN, this.currentLanguageDE);
    } else {
      this.currentLanguageEN = false;
      this.currentLanguageDE = true;
      console.log('if de', this.currentLanguageEN, this.currentLanguageDE);
  }} */
}
