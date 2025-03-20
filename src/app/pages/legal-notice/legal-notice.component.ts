import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  languageService = inject(LanguageService);
  constructor(private location: Location, private router: Router) {
    localStorage.setItem('imprintIsOpen', 'true');
  }

  goBack(): void {
    this.router.navigate(['/']).then(() => {
      const savedPosition = localStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem('scrollPosition');
      }
    });
  }
}
