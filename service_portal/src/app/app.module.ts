import { TokenHeaderInterceptorService } from './token-header-interceptor.service';
import { BonafideService } from "./bonafide.service";
import { UserDataService } from './user-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TeacherLoginComponent } from './login/teacher-login/teacher-login.component';
import { StudentNavComponent } from './student/student-nav/student-nav.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { BonafideComponent } from './student/bonafide/bonafide.component';
import { ResponsesComponent } from './student/responses/responses.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherNavComponent } from './teacher/teacher-nav/teacher-nav.component';
import { RequestComponent } from './teacher/request/request.component';
import { PendingComponent } from './teacher/request/pending/pending.component';
import { HistoryComponent } from './teacher/request/history/history.component';
import { StudentBioComponent } from './teacher/student-bio/student-bio.component';
import { StudentDetailsComponent } from './teacher/student_bio/student-details/student-details.component';

import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    StudentNavComponent,
    StudentProfileComponent,
    BonafideComponent,
    ResponsesComponent,
    TeacherComponent,
    TeacherNavComponent,
    RequestComponent,
    PendingComponent,
    HistoryComponent,
    StudentBioComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes)
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserDataService,{provide:HTTP_INTERCEPTORS,useClass:TokenHeaderInterceptorService,multi:true},BonafideService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
