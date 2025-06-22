import { Component, signal } from '@angular/core';

@Component({
  selector: 'swift-pricing',
  imports: [],
  templateUrl: './pricing.html',
})
export class Pricing {
  billingPeriod = signal<'monthly' | 'annually'>('monthly');

  volumePricing = signal([
    { range: '1 - 1,000 messages', price: '$0.05' },
    { range: '1,001 - 10,000 messages', price: '$0.045' },
    { range: '10,001 - 50,000 messages', price: '$0.04' },
    { range: '50,001 - 100,000 messages', price: '$0.035' },
    { range: '100,000+ messages', price: 'Custom pricing' },
  ]);
}
