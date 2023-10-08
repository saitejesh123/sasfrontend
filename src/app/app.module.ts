import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { PostModule } from './post/post.module';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AdminComponent } from './Admin/Admin.component';
import { FormsModule } from '@angular/forms';
import { OtherpageComponent } from './otherpage/otherpage.component';






@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    AdminComponent,
    OtherpageComponent,
   
    NavbarComponent,
   
    ProfileComponent,
        SignupComponent,
        StudentDashboardComponent,
        AdminDashboardComponent,
        ViewcoursesComponent,
        UserComponent,
        CourseComponent,
        EditUserComponent,
        AboutComponent,
        ContactComponent,
        AddcartComponent,
        ViewcartComponent
  ],
  imports: [
    BrowserModule,PostModule,FormsModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
