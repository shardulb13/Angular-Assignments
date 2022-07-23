import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'', component:AdminComponent, children:[
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
