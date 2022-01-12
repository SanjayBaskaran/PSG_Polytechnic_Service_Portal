import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TeacherLoginComponent } from './login/teacher-login/teacher-login.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path:'',component:LoginComponent},
  {path:'/login/student',component:StudentLoginComponent},
  {path:'/login/teacher',component:TeacherLoginComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
