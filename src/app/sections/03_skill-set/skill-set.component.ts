import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  img = { src: 'assets/img/skills/sticker.svg', alt: 'sticker', title: 'Sticker' };
  icons = [
    { src: 'assets/img/skills/html.svg', alt: 'HTML', title: 'HTML' },
    { src: 'assets/img/skills/css.svg', alt: 'CSS', title: 'CSS' },
    { src: 'assets/img/skills/js.svg', alt: 'JavaScript', title: 'JavaScript' },
    { src: 'assets/img/skills/ts.svg', alt: 'TypeScript', title: 'TypeScript' },
    { src: 'assets/img/skills/angular.svg', alt: 'Angular', title: 'Angular' },
    { src: 'assets/img/skills/restApi.svg', alt: 'restApi', title: 'Rest API' },
    { src: 'assets/img/skills/git.svg', alt: 'git', title: 'Git' },
    { src: 'assets/img/skills/firebase.svg', alt: 'firebase', title: 'Firebase' },
    { src: 'assets/img/skills/scrum.svg', alt: 'scrum', title: 'Scrum' },
    { src: 'assets/img/skills/materialDesign.svg', alt: 'materialDesign', title: 'Material Design' }
  ];
  peelOffImages = [
    { src: 'assets/img/skills/sticker.svg', alt: 'sticker' },
    { src: 'assets/img/skills/sticker_first_peel.png', alt: 'sticker_first_peel'},
    { src: 'assets/img/skills/sticker_peel_off.png', alt: 'sticker_peel_off' }
  ];

  peelOffIndex = 0; // Track which image is currently shown
  currentImage = this.peelOffImages[this.peelOffIndex]; // Initialize with the first image

  peelOff() {
    if (this.peelOffIndex < this.peelOffImages.length - 1) {
      this.peelOffIndex++;
      this.currentImage = this.peelOffImages[this.peelOffIndex];
    }
  }
}

