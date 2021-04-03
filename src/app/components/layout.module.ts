import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HomeComponent,PageNotFoundComponent, StudentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    NgbPaginationModule,

  ],exports:[
  ]
})
export class LayoutModule { }
