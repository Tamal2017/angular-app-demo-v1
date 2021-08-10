import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern(/(^\d{9}$)|(^\d{2}[-\.\s]\d{3}[-\.\s]\d{2}[-\.\s]\d{2}$)/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value, null, 4));
    }
  }

  onCancel(): void {
    this.submitted = false;
    this.form.reset();
  }

}
