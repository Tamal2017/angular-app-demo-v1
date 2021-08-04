import { Component, OnInit } from '@angular/core';

export class User {
  name = '';
  tel = '';
  email = '';
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
