import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../todo-item'
import { TaskRunnerService } from '../task-runner.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoItems: TodoItem[]

  getTodoItems(): void {
    this.taskRunnerService.getTodoItems().subscribe(tasks => this.todoItems = tasks)
  }

  allComplete: boolean

  complete(todoItem: TodoItem): void {
    this.taskRunnerService.completeTodoItem(todoItem).subscribe()
    // this.todoItems.find(t => t == todoItem).completed = true;
    this.allComplete = this.todoItems.find(t => t.completed !== true) == undefined
  }

  delete(todoItem: TodoItem): void {
    this.todoItems = this.todoItems.filter(t => t !== todoItem);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    var task: TodoItem = {
      task: name,
      completed: false
    }
    this.taskRunnerService.addTodoItem(task)
      .subscribe(t => {
        this.todoItems.push(t);
      })
    this.allComplete = false
  }

  constructor(private taskRunnerService: TaskRunnerService) { }

  ngOnInit() {
    this.getTodoItems();
  }

}
