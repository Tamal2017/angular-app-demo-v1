import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'order', loadChildren: () => import('./module/order/order.module').then(m => m.OrderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
