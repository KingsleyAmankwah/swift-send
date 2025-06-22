import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'swift-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = signal([
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/support', label: 'Support' },
  ]);

  legalLinks = signal([
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/cookies', label: 'Cookie Policy' },
  ]);
}
