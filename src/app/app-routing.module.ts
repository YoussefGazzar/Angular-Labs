import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';

const routes: Routes = [
  {path:"", component:StudentsComponent},
  {path:"student/:id/update", component:UpdateStudentComponent},
  {path:"add", component:AddStudentComponent},
  {path:"delete/:id", component:DeleteStudentComponent},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
