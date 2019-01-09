import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const tasks = [
      {task: "Walk the dog.", completed: false},
      {task: "Go to the store.", completed: true},
      {task: "Get gas.", completed: false},
      {task: "Wash the car.", completed: false},
      {task: "Extra thing to do", completed: false}
    ]; 
    return {tasks};
  }

  constructor() { }
}
