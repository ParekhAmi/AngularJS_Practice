import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataApi } from './apiData';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http: HttpClient) { }

  getApiData(): Observable<DataApi[]>{
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<DataApi[]>(url);
  }
}
