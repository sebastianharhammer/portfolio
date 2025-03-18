import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
@Component({
  selector: 'app-picture-frame',
  imports: [TranslateModule],
  templateUrl: './picture-frame.component.html',
  styleUrl: './picture-frame.component.scss'
})
export class PictureFrameComponent {
  languageService = inject(LanguageService);
  
}
