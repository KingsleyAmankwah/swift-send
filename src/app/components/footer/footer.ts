import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'swift-footer',
  imports: [RouterLink, NgOptimizedImage],
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
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/support', label: 'Support' },
  ]);

  legalLinks = signal([
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/cookies', label: 'Cookie Policy' },
  ]);
}
