import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  constructor() {}

  getAll() {
    return this.todos;
  }

  remove(todo: Todo) {
    const newList = this.todos.filter(({ id }) => id !== todo.id);
    this.todos = newList;
    return newList;
  }

  add(todo: Todo) {
    return this.todos.push(todo);
  }

  complete(completed: boolean, todo: Todo) {
    const completedTodo = this.todos.find(({ id }) => id === todo.id);
    if (completedTodo) {
      completedTodo.completed = completed;
    }
    return this.todos;
  }
}
