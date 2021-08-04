import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolverService } from 'src/app/services/user-resolver.service';
import { AddressComponent } from './address/address.component';
import { IdentityComponent } from './identity/identity.component';

import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'address', component: AddressComponent },
  { path: 'identity', component: IdentityComponent, resolve: {
    users: UserResolverService
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolverService]
})
export class UserRoutingModule { }
