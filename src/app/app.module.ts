import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentProfileComponent } from './Components/student-profile/student-profile.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { FormsModule } from '@angular/forms';
import { StudentsService } from './Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentProfileComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ErrorComponent,
    DeleteStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
