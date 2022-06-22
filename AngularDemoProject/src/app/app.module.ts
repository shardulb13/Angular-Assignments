import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CustomermoduleModule } from './customermodule/customermodule.module';
import { MaincontentComponent } from './maincontent/maincontent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomermoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
