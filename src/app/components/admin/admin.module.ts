import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { ProoductListComponent } from './products/prooduct-list/prooduct-list.component';
import { ProoductFormComponent } from './products/prooduct-form/prooduct-form.component';
import { UnsavedChangesGuard } from './unsaved-change.guard';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    ProoductListComponent,
    ProoductFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers:[AuthGuard,UnsavedChangesGuard]
})
export class AdminModule { }
