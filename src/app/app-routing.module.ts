import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { HomeComponent } from './home/home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TaskComponent } from './task/task/task.component';
import { StatusComponent } from './status/status/status.component';


const routes: Routes = [
  { path: 'list', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'detail', component: DetailComponent},
  { path: 'task', component: TaskComponent},
  { path: 'status', component: StatusComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
