import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [HomeComponent,PageNotFoundComponent, StudentComponent,LoginComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],exports:[
  ]
})
export class LayoutModule { }
