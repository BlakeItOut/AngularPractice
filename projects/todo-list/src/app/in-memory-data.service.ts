import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const tasks = [
      {id: 11, title: "Walk the dog.", completed: false},
      {id: 12, title: "Go to the store.", completed: true},
      {id: 13, title: "Get gas.", completed: false},
      {id: 14, title: "Wash the car.", completed: false}
    ]; 
    return {tasks};
  }

  genId(tasks: TodoItem[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
