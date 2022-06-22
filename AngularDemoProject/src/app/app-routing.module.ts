import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  // {path:'', redirectTo:'blogs', pathMatch:'full'},
  // {path:'blogs', component:ContentComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:MaincontentComponent}
  // {path:'main', component:AppComponent, children:[{path:'sidebar', component:SidebarComponent}, {path:'header', component:HeaderComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
