import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerModule } from './customer/customer.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomerModule
  ],
  exports: [
  AdminComponent, HeaderComponent, SidebarComponent
  ]
})
export class AdminModule { }
