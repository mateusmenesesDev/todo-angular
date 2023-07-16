import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
})
export class ChangeThemeComponent {
  @Input() theme: string = '';
  @Output() changeTheme: EventEmitter<any> = new EventEmitter();
  src = '../../../assets/images/icon-moon.svg';
  constructor() {}

  handleClick() {
    this.changeTheme.emit();
  }

  getIcon() {
    if (this.theme === 'dark') return '../../../assets/images/icon-moon.svg';
    return '../../../assets/images/icon-sun.svg';
  }
}
