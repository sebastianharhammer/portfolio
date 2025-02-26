import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isHovered = false;
  aboutMe = false;
  skills = false;
  projects = false;
  thoughts = false;
  contact = false;
  
  
  onMouseOver(element: any) {
    this.isHovered = true;
    element = true;
    console.log('mouse over' + element);
  }
  
  onMouseLeave(element: any) {
    this.isHovered = false;
    this.aboutMe = false;
    this.skills = false;
    this.projects = false;
    this.thoughts = false;
    this.contact = false;
    console.log('mouse leave' + element);
  }
}
