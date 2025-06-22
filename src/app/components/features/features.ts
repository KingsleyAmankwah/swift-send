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
      title: 'Lightning Fast Delivery',
      description:
        'Send messages instantly with our high-speed global network. Average delivery time under 2 seconds.',
    },
    {
      icon: '🛎️',
      title: 'Instant Contact Support',
      description:
        '24/7 live support with average response times under 5 minutes for all your urgent queries.',
    },

    {
      icon: '👥',
      title: 'Group Management',
      description:
        'Organize contacts into custom groups for targeted messaging and streamlined communication.',
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
      icon: '📤',
      title: 'Bulk Upload',
      description:
        'Upload thousands of contacts at once via CSV or Excel files for mass messaging campaigns.',
    },

    {
      icon: '📝',
      title: 'SMS Logs & Tracking',
      description:
        'Comprehensive message history with status updates (delivered, failed, read) for every SMS sent.',
    },

    {
      icon: '💬',
      title: 'Bulk Messaging',
      description:
        'Engage in conversations with your customers, not just broadcasts.',
    },
    {
      icon: '⏰',
      title: 'Scheduled Messaging',
      description:
        'Plan campaigns in advance with our intuitive scheduling interface for perfect timing.',
    },
  ]);
}
