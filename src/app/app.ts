import { Component } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'swift-root',
  imports: [Home],
  template: `<swift-home /> `,
})
export class App {
  protected title = 'swift-sms';
}
