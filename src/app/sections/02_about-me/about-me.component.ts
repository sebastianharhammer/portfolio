import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service/language.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-about-me',
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  languageService = inject(LanguageService);

}
