import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AdminComponent } from './Admin/Admin.component';
import { OtherpageComponent } from './otherpage/otherpage.component';



const routes: Routes = [

  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"profile/:stdid",component:ProfileComponent},
  {path:"signup",component:SignupComponent},
  {path:"AdminDashboard",component:AdminDashboardComponent},
  {path:"StudentDashboard",component:StudentDashboardComponent},
  {path: "viewcourses",component:ViewcoursesComponent},
  {path : "user",component:UserComponent},
  {path : "course",component:CourseComponent},
  {path:"editUser",component:EditUserComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"addcart",component:AddcartComponent},
  {path:"viewcart",component:ViewcartComponent},
  {path:"Admin",component:AdminComponent},
  {path:"otherpage",component:OtherpageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
