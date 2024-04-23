import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasta, Pizza } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl = 'http://localhost:5105'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${this.apiUrl}/pizzas`);
  }
}
