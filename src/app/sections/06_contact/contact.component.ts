import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, LogoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  languageService = inject(LanguageService);
}
