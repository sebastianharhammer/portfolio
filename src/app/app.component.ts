import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
  title = 'Sebastian Harhammer - Portfolio';



}
