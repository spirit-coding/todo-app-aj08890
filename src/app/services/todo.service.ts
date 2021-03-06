import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public createTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>('http://localhost:8080/api/todo', todo);
  }

  public getTodoOverview(): Observable<Todo[]>{
    return this.http.get<Todo[]>('http://localhost:8080/api/todo');
  }

}
