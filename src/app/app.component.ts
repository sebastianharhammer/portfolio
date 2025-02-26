import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { AboveTheFoldComponent } from "./sections/01_above-the-fold/above-the-fold.component";
import { AboutMeComponent } from "./sections/02_about-me/about-me.component";
import { SkillSetComponent } from "./sections/03_skill-set/skill-set.component";
import { ProjectsComponent } from "./sections/04_projects/projects.component";
import { ThoughtsComponent } from "./sections/05_thoughts/thoughts.component";
import { ContactComponent } from "./sections/06_contact/contact.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboveTheFoldComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ThoughtsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PORTFOLIO';
}
