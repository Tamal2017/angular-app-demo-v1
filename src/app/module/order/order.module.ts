import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [OrderComponent, ItemComponent, ItemListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
