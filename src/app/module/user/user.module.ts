import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IdentityComponent } from './identity/identity.component';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [UserComponent, IdentityComponent, AddressComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
