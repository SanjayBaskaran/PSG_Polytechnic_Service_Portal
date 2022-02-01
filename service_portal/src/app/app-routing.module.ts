import { TeacherAuthGuard } from './teacher-auth.guard';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TeacherLoginComponent } from './login/teacher-login/teacher-login.component';
import { BonafideComponent } from './student/bonafide/bonafide.component';
import { ResponsesComponent } from './student/responses/responses.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentComponent } from './student/student.component';
import { HistoryComponent } from './teacher/request/history/history.component';
import { PendingComponent } from './teacher/request/pending/pending.component';
import { RequestComponent } from './teacher/request/request.component';
import { StudentBioComponent } from './teacher/student-bio/student-bio.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path:'login',component:LoginComponent,children:[
      { path:'',component:StudentLoginComponent},
      { path:'teacher',component:TeacherLoginComponent}
    ]
  },
  {
    path: 'student',component:StudentComponent,
    canActivate:[AuthGuard],
    // canActivateChild:[AuthGuard],
    children:[
      {path:'',component:StudentProfileComponent},
      {
        path:'bonafide',component:BonafideComponent,canActivate:[AuthGuard]
      },
      {
        path:'responses',component:ResponsesComponent,canActivate:[AuthGuard]
      },
    ]
  },
  {
    path:'teacher',component:TeacherComponent, canActivate:[TeacherAuthGuard],children:[
      {path:'',component:RequestComponent ,canActivate:[TeacherAuthGuard],children:[
        {path:'',component:PendingComponent,canActivate:[TeacherAuthGuard]},
        {path:'history',component:HistoryComponent,canActivate:[TeacherAuthGuard]} ]
      },
      {path:'studentbio',component:StudentBioComponent,canActivate:[TeacherAuthGuard] }
    ]
  },
  {
    path:"**",redirectTo:"/login"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
