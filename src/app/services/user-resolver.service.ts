import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../module/user/user.component';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(): Observable<any> {
     return this.userService.getUsers();
  }
 
}
