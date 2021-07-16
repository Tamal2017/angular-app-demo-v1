import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';

import { OrderComponent } from './order.component';

const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'item', component: ItemComponent },
  { path: 'itemlist', component: ItemListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
