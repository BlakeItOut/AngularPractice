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
      catchError(this.handleError<TodoItem[]>('getTasks', []))
    )
  }

  getTodoItem(id: number): Observable<TodoItem>{
    return this.http.get<TodoItem>(`${this.tasksUrl}/${id}`).pipe(
      catchError(this.handleError<TodoItem>(`getTask id=${id}`))
    )
  }

  updateTodoItem(todoItem: TodoItem): Observable<any> {
    return this.http.put(this.tasksUrl, todoItem, httpOptions).pipe(
      catchError(this.handleError<TodoItem[]>('updateTask'))
    )
  }



  addTodoItem (todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.tasksUrl, todoItem, httpOptions).pipe(
      catchError(this.handleError<TodoItem>('addTask'))
    )
  }

  deleteTodoItem(todoItemId: TodoItem | number): Observable<TodoItem>{
    const id = typeof todoItemId === 'number' ? todoItemId : todoItemId.id
    const url = `${this.tasksUrl}/${id}`
    
    return this.http.delete<TodoItem>(url, httpOptions).pipe(
      catchError(this.handleError<TodoItem>('deleteTask'))
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

