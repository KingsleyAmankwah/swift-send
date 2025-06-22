import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Hero } from '../components/hero/hero';
import { DemoVideo } from '../components/demo-video/demo-video';
import { Testimonials } from '../components/testimonials/testimonials';
import { Cta } from '../components/cta/cta';
import { Features } from '../components/features/features';
import { Pricing } from '../components/pricing/pricing';

@Component({
  selector: 'swift-home',
  imports: [
    Header,
    Footer,
    Hero,
    DemoVideo,
    Testimonials,
    Cta,
    Features,
    Pricing,
  ],
  template: `
    <swift-header />
    <main>
      <swift-hero />
      <swift-features />
      <swift-pricing />
      <swift-demo-video />
      <swift-testimonials />
      <swift-cta />
    </main>
    <swift-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
