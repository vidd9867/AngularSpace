import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component'
import { StatusComponent } from './status/status/status.component';
import { TaskComponent } from './task/task/task.component';
import { DetailComponent } from './detail/detail.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { NameTitlePipe } from './pipes/name-title.pipe';
import { ServicesService } from './services/services.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    TaskComponent,
    DetailComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    NameTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
