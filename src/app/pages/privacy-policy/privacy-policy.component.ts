import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  languageService = inject(LanguageService);
  constructor(private location: Location, private router: Router) {
    localStorage.setItem('privatePolicyIsOpen', 'true');
  }

  goBack(): void {
    this.router.navigate(['/']).then(() => {
      const savedPosition = localStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem('scrollPosition');
        localStorage.removeItem('privatePolicyIsOpen');
      }
    });
  }
}
