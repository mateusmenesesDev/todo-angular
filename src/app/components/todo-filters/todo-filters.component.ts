import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
})
export class TodoFiltersComponent {
  @Output() changeFilter: EventEmitter<any> = new EventEmitter();

  handleChange(value: string) {
    console.log(value);

    this.changeFilter.emit(value); // TODO implement filter logic here and emit the selected
  }
}
