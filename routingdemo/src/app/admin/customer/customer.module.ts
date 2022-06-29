import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports:[CustomerComponent,AddComponent,EditComponent,ListComponent]

})
export class CustomerModule { }
