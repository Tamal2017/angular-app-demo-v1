import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IdentityComponent } from './identity/identity.component';
import { AddressComponent } from './address/address.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentityFormComponent } from './identity/identity-form/identity-form.component';
import { IdentityListComponent } from './identity/identity-list/identity-list.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [UserComponent, IdentityComponent, AddressComponent, IdentityFormComponent, IdentityListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [UserService]
})
export class UserModule { }
