import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'swift-testimonials',
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.html',
})
export class Testimonials {
  testimonials = signal([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'RetailPlus',
      quote:
        'SwiftSend cut our customer communication time by 70%. The platform is incredibly intuitive and reliable.',
      rating: 5,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SIe7dfA7Oo1yK_A2gz0QsuGN9euG7EK-XA&s',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Operations Manager',
      company: 'FoodExpress',
      quote:
        'The delivery rates are exceptional, and our customers love the timely SMS updates. Game changer for our business.',
      rating: 5,
      avatar: 'https://avatars.githubusercontent.com/u/64941442?v=4',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'CEO',
      company: 'HealthCare Connect',
      quote:
        'From appointment reminders to emergency alerts, SwiftSend has transformed how we communicate with patients.',
      rating: 4,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwCTCZ-RS38Wa1VuVWymZvZdEc8jCt6jiPQ&s',
    },
  ]);
}
