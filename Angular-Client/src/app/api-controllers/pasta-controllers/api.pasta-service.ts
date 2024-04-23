import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasta } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class PastaService {

  private apiUrl = 'http://localhost:5105'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getPasta(): Observable<Pasta[]> {
    return this.http.get<Pasta[]>(`${this.apiUrl}/pasta`);
  }

}
