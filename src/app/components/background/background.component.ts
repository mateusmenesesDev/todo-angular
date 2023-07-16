import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
})
export class BackgroundComponent {
  @Input() theme: string = '';
  src: string = '';
  bgMobileLight = '../../../assets/images/bg-mobile-light.jpg';
  bgMobileDark = '../../../assets/images/bg-mobile-dark.jpg';

  getSrc() {
    if (this.theme === 'dark') return this.bgMobileLight;
    return this.bgMobileDark;
  }
  constructor() {}
}
