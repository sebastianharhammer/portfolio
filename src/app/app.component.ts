import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sebastian Harhammer - Portfolio';



}
