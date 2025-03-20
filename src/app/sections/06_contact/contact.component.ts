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
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  };

  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  showSuccessMessage = false;
  showErrorMessage = false;

  onSubmit(ngForm: NgForm) {
    console.log('onSubmit wird ausgeführt');
    console.log('mailTest', this.mailTest);
    console.log('ngForm.submitted', ngForm.submitted);
    console.log('ngForm.form.valid', ngForm.form.valid);
    if (ngForm.submitted && ngForm.form.valid) {
      console.log('Form is valid', ngForm.form.valid, this.contactData);
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
        
          next: (response) => {
            console.log('response', response);
            ngForm.resetForm();
            this.showSuccessMessage = true;
            this.showErrorMessage = false;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
            this.showSuccessMessage = false;
            this.showErrorMessage = true;
            setTimeout(() => {
              this.showErrorMessage = false;
            }, 5000);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      console.log('Form is not valid', ngForm.form.valid, this.contactData);
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
    localStorage.setItem('scrollPosition', window.scrollY.toString());
     this.router.navigate(['/privacy-policy']).then(() => {
       window.scrollTo(0, 0);
     });
  }

  openLegalNotice() {
    this.router.navigate(['/legal-notice']);
    localStorage.setItem('scrollPosition', window.scrollY.toString());
     this.router.navigate(['/privacy-policy']).then(() => {
       window.scrollTo(0, 0);
     });
  }
}
