import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { DirectiveDemoDirective } from './directive-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveExampleComponent,
    DirectiveDemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
