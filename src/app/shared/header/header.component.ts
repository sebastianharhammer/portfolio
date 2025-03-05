import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import translationEN from '../../../../public/assets/i18n/en.json';
import translationDE from '../../../../public/assets/i18n/de.json';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  providers: [TranslateService],
})
export class HeaderComponent {
  
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
  }
  onMouseEnter() {
    console.log('mouse enter');
  }
  onMouseLeave() {
    console.log('mouse leave');
  }
}
