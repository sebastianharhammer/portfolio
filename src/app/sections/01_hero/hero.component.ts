import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
frontend = ['r', 'o', 'n', 't', 'e', 'n', 'd'];
developer = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
}
