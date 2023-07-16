import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { ChangeThemeComponent } from './components/change-theme/change-theme.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ChangeThemeComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoFiltersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  theme = 'dark';
  src = '../../../assets/images/icon-moon.svg';
  constructor() {}

  public changeTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light';
    } else {
      this.theme = 'dark';
    }
  }
}
