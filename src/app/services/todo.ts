import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private todos: string[] = [];

  // Додати нове завдання до списку
  addTask(task: string) {
    this.todos.push(task);
  }

  // Отримати список всіх завдань
  getTasks(): string[] {
    return this.todos;
  }

  // видалити завдання зі списку
  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  // Очистити список завдань
  clearTasks() {
    this.todos = [];
  }
}
