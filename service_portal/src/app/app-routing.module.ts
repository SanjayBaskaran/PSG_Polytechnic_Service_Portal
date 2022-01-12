import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TeacherLoginComponent } from './login/teacher-login/teacher-login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path:'login',component:LoginComponent,children:[
      { path:'',component:StudentLoginComponent},
      { path:'teacher',component:TeacherLoginComponent}
    ]
  },
  {
    path: 'student',component:StudentComponent
  },
  {
    path:'teacher',component:TeacherComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
