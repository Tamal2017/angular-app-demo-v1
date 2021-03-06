import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    
    const data = '/assets/mock/user-data.json';
    return this.http.get(data);
  }

}
