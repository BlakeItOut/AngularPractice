import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskRunnerService {
  getTodoItems(): Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>(this.tasksUrl).pipe(
      catchError(this.handleError('getTasks', []))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  private tasksUrl = 'api/tasks'

  constructor(
    private http: HttpClient
  ) { }
}

