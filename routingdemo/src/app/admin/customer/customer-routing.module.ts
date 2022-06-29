import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CustomerComponent } from './customer.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
{path:'', component:CustomerComponent,  
children:[
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'list/:id', component:ListComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
