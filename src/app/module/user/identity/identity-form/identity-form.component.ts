import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../user.component';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.css']
})
export class IdentityFormComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  addUserEvent: EventEmitter<User> =  new  EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      alert(JSON.stringify(this.user, null, 4));
      this.addUserEvent.emit(this.user);
      this.onCancel(form);
    }
  }

  onCancel(form: NgForm): void {
    this.user = new User();
    form.resetForm();
  }

}
