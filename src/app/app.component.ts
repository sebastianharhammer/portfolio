import { RouterOutlet } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PORTFOLIO';


  @ViewChild('about-me') aboutMe!: ElementRef;
  @ViewChild('skill-set') skillSet!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
