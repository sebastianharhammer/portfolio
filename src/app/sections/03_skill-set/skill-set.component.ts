import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service/language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
interface PeelOffImage {
  src: string;
  alt: string;
  topPart: string;
  bottomPart: string;
}

@Component({
  selector: 'app-skill-set',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})

export class SkillSetComponent {

  languageService = inject(LanguageService);
  peelOffIndex = 0;
  peelOffImages: PeelOffImage[] = [];
  currentImage!: PeelOffImage;
  bottomPartText0 = '';
  topPartText2 = '';
  
  constructor(private translate: TranslateService) {
    this.initalizePeelOffLanguage();
    this.translate.onLangChange.subscribe(() => {
      this.initalizePeelOffLanguage();
    });
  }



  initalizePeelOffLanguage() {
    console.log(this.languageService.activeLanguage);
    if (this.languageService.activeLanguage === 'en') {
      this.bottomPartText0 = 'assets/img/skills/sticker_text_closed_en.svg';
      this.topPartText2 = 'assets/img/skills/sticker_text_open_en.svg';
    } else {
      this.bottomPartText0 = 'assets/img/skills/sticker_text_closed_de.svg';
      this.topPartText2 = 'assets/img/skills/sticker_text_open_de.svg';
    }
    this.peelOffImages = [
      {
        src: 'assets/img/skills/sticker_full.png',
        alt: 'sticker',
        topPart: 'assets/img/skills/sticker_arrow.svg',
        bottomPart: this.bottomPartText0,
      },
      {
        src: 'assets/img/skills/sticker_first_peel.png',
        alt: 'sticker_first_peel',
        topPart: '',
        bottomPart: '',
      },
      {
        src: 'assets/img/skills/sticker_peel_off.png',
        alt: 'sticker_peel_off',
        topPart: this.topPartText2,
        bottomPart: 'assets/img/skills/sticker_icons_open.svg',
      },
    ];
    this.currentImage = this.peelOffImages[this.peelOffIndex];
  
  }

  img = {
    src: 'assets/img/skills/sticker.svg',
    alt: 'sticker',
    title: 'Sticker',
  };

  icons = [
    { src: 'assets/img/skills/html.svg', alt: 'HTML', title: 'HTML' },
    { src: 'assets/img/skills/css.svg', alt: 'CSS', title: 'CSS' },
    { src: 'assets/img/skills/js.svg', alt: 'JavaScript', title: 'JavaScript' },
    { src: 'assets/img/skills/ts.svg', alt: 'TypeScript', title: 'TypeScript' },
    { src: 'assets/img/skills/angular.svg', alt: 'Angular', title: 'Angular' },
    { src: 'assets/img/skills/restApi.svg', alt: 'restApi', title: 'Rest API' },
    { src: 'assets/img/skills/git.svg', alt: 'git', title: 'Git' },
    {
      src: 'assets/img/skills/firebase.svg',
      alt: 'firebase',
      title: 'Firebase',
    },
    { src: 'assets/img/skills/scrum.svg', alt: 'scrum', title: 'Scrum' },
    {
      src: 'assets/img/skills/materialDesign.svg',
      alt: 'materialDesign',
      title: 'Material Design',
    },
  ];

  peelOff() {
    if (this.peelOffIndex < this.peelOffImages.length - 1) {
      setTimeout(() => {
        this.peelOffIndex++;
        this.currentImage = this.peelOffImages[this.peelOffIndex];
      }, 500);
      setTimeout(() => {
        this.peelOffIndex++;
        this.currentImage = this.peelOffImages[this.peelOffIndex];
      }, 250);
    }
  }
}






/* import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  languageService = inject(LanguageService);
  bottomPartText0 = '';
  topPartText2 = '';

  constructor() {
    this.languageService.languageToggle.subscribe((language) => {
      console.log(language);
    });
  }

  ngOnInit() {
    this.initalizePeelOffLanguage();
    console.log(this.bottomPartText0);
  }

  initalizePeelOffLanguage() {
    console.log(this.languageService.activeLanguage);
    if (this.languageService.activeLanguage === 'en') {
      this.bottomPartText0 = 'assets/img/skills/sticker_text_open_en.svg';
      this.topPartText2 = 'assets/img/skills/sticker_text_closed_en.svg';
    } else {
      this.bottomPartText0 = 'assets/img/skills/sticker_text_open_de.svg';
      this.topPartText2 = 'assets/img/skills/sticker_text_closed_de.svg';
    }
  }

  img = {
    src: 'assets/img/skills/sticker.svg',
    alt: 'sticker',
    title: 'Sticker',
  };

  icons = [
    { src: 'assets/img/skills/html.svg', alt: 'HTML', title: 'HTML' },
    { src: 'assets/img/skills/css.svg', alt: 'CSS', title: 'CSS' },
    { src: 'assets/img/skills/js.svg', alt: 'JavaScript', title: 'JavaScript' },
    { src: 'assets/img/skills/ts.svg', alt: 'TypeScript', title: 'TypeScript' },
    { src: 'assets/img/skills/angular.svg', alt: 'Angular', title: 'Angular' },
    { src: 'assets/img/skills/restApi.svg', alt: 'restApi', title: 'Rest API' },
    { src: 'assets/img/skills/git.svg', alt: 'git', title: 'Git' },
    {
      src: 'assets/img/skills/firebase.svg',
      alt: 'firebase',
      title: 'Firebase',
    },
    { src: 'assets/img/skills/scrum.svg', alt: 'scrum', title: 'Scrum' },
    {
      src: 'assets/img/skills/materialDesign.svg',
      alt: 'materialDesign',
      title: 'Material Design',
    },
  ];

  peelOffImages = [
    {
      src: 'assets/img/skills/sticker_full.png',
      alt: 'sticker',
      topPart: 'assets/img/skills/sticker_arrow.svg',
      bottomPart: this.bottomPartText0,
    },
    {
      src: 'assets/img/skills/sticker_first_peel.png',
      alt: 'sticker_first_peel',
      topPart: '',
      bottomPart: '',
    },
    {
      src: 'assets/img/skills/sticker_peel_off.png',
      alt: 'sticker_peel_off',
      topPart: this.topPartText2,
      bottomPart: 'assets/img/skills/sticker_icons_open.svg',
    },
  ];

  peelOffIndex = 0;
  currentImage = this.peelOffImages[this.peelOffIndex];

  peelOff() {
    if (this.peelOffIndex < this.peelOffImages.length - 1) {
      setTimeout(() => {
        this.peelOffIndex++;
        this.currentImage = this.peelOffImages[this.peelOffIndex];
      }, 500);
      setTimeout(() => {
        this.peelOffIndex++;
        this.currentImage = this.peelOffImages[this.peelOffIndex];
      }, 250);
    }
  }
}
 */