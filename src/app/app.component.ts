import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = 'dark';
  title = 'Todo-angular';

  public onChangeTheme() {
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark');
      this.theme = 'light';
    } else {
      document.documentElement.classList.remove('dark');
      this.theme = 'dark';
    }
  }
}
