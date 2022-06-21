import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDirective } from './demo.directive';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDirective,
    UserprofileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
