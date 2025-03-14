import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service/language.service';
import { LogoComponent } from '../../shared/logo/logo.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [TranslateModule, LogoComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true
})
export class ContactComponent {
  languageService = inject(LanguageService);
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.contactData.checkbox) {
      console.log('ngForm.form.valid', ngForm.form.valid);
      console.log('this.contactData.checkbox', this.contactData.checkbox);
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.contactData.checkbox) {

      ngForm.resetForm();
    }
  }

  checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailCorrect = emailRegex.test(this.contactData.email);
  }

  checkName() {
    const nameRegex = /^[a-zA-Z0-9]+$/;
    this.nameCorrect = nameRegex.test(this.contactData.name);
  }

  checkMessage() {
    const messageRegex = /^[a-zA-Z0-9]+$/;
    this.messageCorrect = messageRegex.test(this.contactData.message);
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
    this.contactData.checkbox = !this.contactData.checkbox;
  }



}
