import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "./shared/header/header.component";
import { HeroComponent } from "./sections/01_hero/hero.component";
import { AboutMeComponent } from "./sections/02_about-me/about-me.component";
import { SkillSetComponent } from "./sections/03_skill-set/skill-set.component";
import { ProjectsComponent } from "./sections/04_projects/projects.component";
import { ThoughtsComponent } from "./sections/05_thoughts/thoughts.component";
import { ContactComponent } from "./sections/06_contact/contact.component";
import { FooterComponent } from "./shared/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, HeaderComponent, HeroComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ThoughtsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PORTFOLIO';
  /* constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  } */
}
