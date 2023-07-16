import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';

type Filter = 'all' | 'completed' | 'incompleted';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  @Input() inputRef?: AbstractControl;
  todoList: Todo[] = [];
  allTodo: Todo[] = [];
  completedList: Todo[] = [];
  incompletedList: Todo[] = [];
  constructor(private todos: TodosService) {}
  ngOnInit() {
    this.allTodo = this.todos.getAll();
    this.todoList = this.allTodo;
  }

  handleRemove(todo: Todo) {
    this.allTodo = this.todos.remove(todo);
    this.todoList = this.allTodo;
  }

  handleComplete(event: any, todo: Todo) {
    const completed = event.target.checked;
    this.allTodo = this.todos.complete(completed, todo);
    this.todoList = this.allTodo;
  }

  changeFilter(value: Filter) {
    switch (value) {
      case 'incompleted':
        this.todoList = this.allTodo.filter((todo) => !todo.completed);
        break;
      case 'completed':
        this.todoList = this.allTodo.filter((todo) => todo.completed);
        break;
      default:
        this.todoList = this.allTodo;
    }
  }
}
