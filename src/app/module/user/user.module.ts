import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IdentityComponent } from './identity/identity.component';
import { AddressComponent } from './address/address.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [UserComponent, IdentityComponent, AddressComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
