import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { LogoComponent } from '../../shared/logo/logo.component';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [TranslateModule, LogoComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true
})
export class ContactComponent {
  languageService = inject(LanguageService);

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
