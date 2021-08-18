import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.component';

@Component({
  selector: 'app-identity-list',
  templateUrl: './identity-list.component.html',
  styleUrls: ['./identity-list.component.css']
})
export class IdentityListComponent implements OnInit {

  @Input()
  users: Array<User>;

  constructor() { }

  ngOnInit(): void {
  }

}
