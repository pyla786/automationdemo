import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {UsersComponent} from './users/users.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users',component:UsersComponent , data: { breadcrumb: 'Users' }},
  { path: 'settings', component: SettingsComponent,  data: { breadcrumb: 'Settings' } },
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule,ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule,FormsModule,ReactiveFormsModule,TableModule,
    SharedModule
  ], providers: [DragulaService],
  declarations: [UsersComponent, SettingsComponent, ],

})
export class UserModule { }
