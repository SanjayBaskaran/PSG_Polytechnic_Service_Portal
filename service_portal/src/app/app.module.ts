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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    StudentNavComponent,
    StudentProfileComponent,
    BonafideComponent,
    ResponsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
