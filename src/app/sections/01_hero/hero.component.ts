import { Component, inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslateService , TranslateModule} from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

languageService = inject(LanguageService);
frontend = ['r', 'o', 'n', 't', 'e', 'n', 'd'];
developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
}
