import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.component';


@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {

  users: Array<User> = [];
  user = new User();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.users = data.users;
    },
      err => {
        console.log(err.message);
      });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.users.push({ ... this.user });
      alert(JSON.stringify(this.user, null, 4));
      this.onCancel(form);
    }
  }

  onCancel(form: NgForm): void {
    this.user = new User();
    form.resetForm();
  }

}
