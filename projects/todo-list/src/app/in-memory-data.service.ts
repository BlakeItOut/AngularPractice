import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const tasks = [
      {id: 11, task: "Walk the dog.", completed: false},
      {id: 12, task: "Go to the store.", completed: true},
      {id: 13, task: "Get gas.", completed: false},
      {id: 14, task: "Wash the car.", completed: false}
    ]; 
    return {tasks};
  }

  genId(tasks: TodoItem[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
