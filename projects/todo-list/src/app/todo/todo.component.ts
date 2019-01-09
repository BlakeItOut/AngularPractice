import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../todo-item'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoItems: TodoItem[] = [
    {task: "Walk the dog.", completed: false},
    {task: "Go to the store.", completed: true},
    {task: "Get gas.", completed: false},
    {task: "Wash the car.", completed: false}
  ]; 

  allComplete: boolean = this.todoItems.find(t => t.completed==false) == undefined

  complete(todoItem: TodoItem): void {
    this.todoItems.find(t => t == todoItem).completed = true;
    this.allComplete = this.todoItems.find(t => t.completed==false) == undefined
  }

  delete(todoItem: TodoItem): void {
    this.todoItems = this.todoItems.filter(t => t !== todoItem);
  }

  add(task: string): void {
    task = task.trim();
    if (!task) { return; }
    this.todoItems.push({ task } as TodoItem )
    this.allComplete = false
  }

  constructor() { }

  ngOnInit() {
  }

}
