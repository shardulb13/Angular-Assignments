import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenauthGuard } from 'src/core/auth-guard/tokenauth.guard';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'admin',
    canActivate:[TokenauthGuard], 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
