import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },

  { path: 'home', component: HomeComponent },
  { path: 'student/:id', component: StudentComponent },

  {path:'**',component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
