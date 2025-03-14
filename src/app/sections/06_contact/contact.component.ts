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
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest
    ) {
      console.log('ngForm.form.valid', ngForm.form.valid);
      console.log('this.contactData.checkbox', this.contactData.checkbox);
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //HIER KOMMT DIE RESPONSE OVERLAY FUNKTION
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest
    ) {
      ngForm.resetForm();
    }
  }

  checkName() {
    if (this.contactData.name.length > 2) {
      return true;
    } else {
      return false;
    }
  }

  checkEmail() {
    if (this.contactData.email.length > 5 && this.contactData.email.includes('@') && this.contactData.email.includes('.')) {
      return true;
    } else {
      return false;
    }
  }

  checkMessage() {
    if (this.contactData.message.length > 5) {
      return true;
    } else {
      return false;
    }
  }
  checkCheckBox() {
    this.contactData.checkbox = !this.contactData.checkbox;
    if (this.contactData.checkbox) {
    }
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





/*   checkName() {
    const nameRegex = /^[a-zA-Z0-9]+$/;
    if (this.contactData.name.length > 2) {
      this.nameCorrect = nameRegex.test(this.contactData.name);
    } else {
      this.nameCorrect = false;
    }
  }
  checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.contactData.email.length > 5) {
      this.emailCorrect = emailRegex.test(this.contactData.email);
    } else {
      this.emailCorrect = false;
    }
  }

  checkMessage() {
    const messageRegex = /^[a-zA-Z0-9]+$/;
    if (this.contactData.message.length > 5) {
      this.messageCorrect = messageRegex.test(this.contactData.message);
    } else {
      this.messageCorrect = false;
    }
  }

  checkForm() {
    this.checkEmail();
    this.checkName();
    this.checkMessage();
  }

  checkFormValid() {
    return this.emailCorrect && this.nameCorrect && this.messageCorrect;
  }

  checkFormInvalid() {
    return !this.emailCorrect || !this.nameCorrect || !this.messageCorrect;
  }

  checkFormDisabled() {
    return this.checkFormValid() || this.checkFormInvalid();
  }

  checkBoxIsChecked() {
    return this.contactData.checkbox;
  }

  checkCheckBox() {
    this.checkIfAllValid();
    this.contactData.checkbox = !this.contactData.checkbox;
  }
  checkIfAllValid() {
    console.log('this.nameCorrect function', this.checkName());
    console.log('this.nameCorrect', this.nameCorrect);
    console.log('this.messageCorrect', this.messageCorrect);
    console.log('this.checkBoxIsChecked()', this.checkBoxIsChecked());
    console.log('');







     return this.emailCorrect && this.nameCorrect && this.messageCorrect && this.checkBoxIsChecked();
  } */
}
