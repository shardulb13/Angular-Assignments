import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CustomerRoutingModule } from './customermodule.routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent, 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports:[LoginComponent,
  ]
})
export class CustomermoduleModule { }
