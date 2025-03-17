import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { LogoComponent } from '../../shared/logo/logo.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [TranslateModule, LogoComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
})
export class ContactComponent {
  languageService = inject(LanguageService);
  http = inject(HttpClient);
  router = inject(Router);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  mailTest = true;
  emailCorrect = true;
  nameCorrect = true;
  messageCorrect = true;

  post = {
    endPoint: 'https://sebastian-harhammer.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('response', response);
            ngForm.resetForm();
            // Add user feedback here (e.g., success message)
          },
          error: (error) => {
            console.error(error);
            // Add user feedback here (e.g., error message)
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  checkName() {
    return this.contactData?.name?.length > 2 || false;
  }

  checkEmail() {
    return this.contactData?.email ? this.emailRegex.test(this.contactData.email) : false;
  }

  checkMessage() {
    return this.contactData?.message?.length > 5 || false;
  }

  checkCheckBox() {
    this.contactData.checkbox = !this.contactData.checkbox;
  }

  checkBoxIsChecked() {
    return this.contactData.checkbox;
  }

  enableButton() {
    if (this.checkName() && this.checkEmail() && this.checkMessage() && this.checkBoxIsChecked()) {
      return true;
    } else {
      return false;
    }
  }

  openPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']);
  }

  openLegalNotice() {
    console.log('openLegalNotice');
    this.router.navigate(['/legal-notice']);
  }
}
