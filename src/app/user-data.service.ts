import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData() {
    return {
      name: 'Service Used',
      age: 32,
      id: 90
    }
  }
}
