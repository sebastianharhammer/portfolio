import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 languageService = inject(LanguageService);
}
