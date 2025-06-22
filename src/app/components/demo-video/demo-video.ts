import { Component } from '@angular/core';

@Component({
  selector: 'swift-demo-video',
  imports: [],
  templateUrl: './demo-video.html',
})
export class DemoVideo {
  showVideo = false;

  playVideo() {
    this.showVideo = true;
  }

  closeVideo() {
    this.showVideo = false;
  }
}
