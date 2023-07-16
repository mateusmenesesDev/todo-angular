import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {
  @Input() inputRef?: AbstractControl;

  constructor(private todos: TodosService) {}

  onChange(event: any): void {
    this.inputRef?.setValue(event);
    this.inputRef?.markAsDirty();
  }

  onKeyDown(event: any): void {
    if (event.key === 'Enter') {
      const newTodo: Todo = {
        completed: false,
        name: event.target.value,
        id: uuidv4(),
      };
      this.todos.add(newTodo);
    }
  }
}
