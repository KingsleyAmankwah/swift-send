import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'swift-demo-video',
  imports: [],
  templateUrl: './demo-video.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoVideo {
  protected showVideo = false;

  protected playVideo() {
    this.showVideo = true;
  }

  protected closeVideo() {
    this.showVideo = false;
  }
}
