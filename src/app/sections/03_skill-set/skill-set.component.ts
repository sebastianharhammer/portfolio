import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
 

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
        bottomPart: 'assets/img/skills/sticker_text_closed_en.svg',
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
        topPart: 'assets/img/skills/sticker_text_open_en.svg',
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
