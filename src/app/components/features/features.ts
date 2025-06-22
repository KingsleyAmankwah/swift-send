import { Component, signal } from '@angular/core';

@Component({
  selector: 'swift-features',
  imports: [],
  templateUrl: './features.html',
})
export class Features {
  features = signal([
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description:
        'Send messages instantly with our high-speed delivery network.',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description:
        'Connect with customers worldwide with our extensive coverage.',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description:
        'Track delivery status and get detailed reports on your campaigns.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security to protect your communications.',
    },
    {
      icon: '🔄',
      title: 'API Integration',
      description:
        'Seamlessly integrate with your existing systems and workflows.',
    },
    {
      icon: '💬',
      title: 'Bulk Messaging',
      description:
        'Engage in conversations with your customers, not just broadcasts.',
    },
  ]);
}
