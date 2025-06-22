import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'swift-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  isMobileMenuOpen = signal(false);

  navItems = signal([
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/resources', label: 'Resources' },
  ]);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
