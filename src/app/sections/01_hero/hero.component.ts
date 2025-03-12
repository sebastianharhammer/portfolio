import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

  scrollToSection(sectionId: string) {
    console.log(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('element not found');
    }
  }

  languageService = inject(LanguageService);
  frontend = ['r', 'o', 'n', 't', 'e', 'n', 'd'];
  developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
}
