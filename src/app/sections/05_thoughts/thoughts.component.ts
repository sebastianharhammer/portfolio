import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-thoughts',
  imports: [TranslateModule],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.scss'
})
export class ThoughtsComponent {
  languageService = inject(LanguageService);
}
