import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { PictureFrameComponent } from '../../shared/picture-frame/picture-frame.component';
import { LazyBackgroundDirective } from '../../directives/lazy-background.directive';
@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule, PictureFrameComponent, LazyBackgroundDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

  scrollToSection(sectionId: string) {
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

  ngOnInit() {
    const img = new Image();
    img.src = './assets/img/hero/background.png';
    
    img.onload = () => {
      document.querySelector('.hero')?.classList.add('png-loaded');
    };
  }
}
