import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent {
  router = inject(Router);
  openLegalNotice() {
    this.router.navigate(['/legal-notice']);
  }
  goHome() {
    this.router.navigate(['/home']);
  }

}
