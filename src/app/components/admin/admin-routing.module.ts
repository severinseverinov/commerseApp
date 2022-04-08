import { ProoductFormComponent } from './products/prooduct-form/prooduct-form.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProoductListComponent } from './products/prooduct-list/prooduct-list.component';
import { UnsavedChangesGuard } from './unsaved-change.guard';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  {path:'adminMain',component:AdminComponent,canActivate:[AuthGuard],
  children:[
    {path:"products/:mode/:id",component:ProoductFormComponent},
    {path:"products/:mode",component:ProoductFormComponent,canDeactivate: [UnsavedChangesGuard]},
    {path:"products",component:ProoductListComponent},
  ]},
  {path:'**',component:AuthComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


// ,canDeactivate: [UnsavedChangesGuard]
