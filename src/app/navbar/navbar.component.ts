import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  IsLoggedIn:boolean=false
  IsAdmin:boolean=false
  IsStudent:boolean=false
  users : User[] =[];
  id!: number;

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    
    this.IsLoggedIn=localStorage.getItem("User")!=null ;
    var x = localStorage.getItem("User");
   if(x){
    this.IsAdmin=JSON.parse(x).userName=='admin';
    this.IsStudent = JSON.parse(x).value.username == 'student';
    this.id == JSON.parse(x).value.stdid;
    console.log(this.id);
    

 }
//  this.load();
this.userService.getAll().subscribe((data : User[])=>
{
  this.users =data;
  console.log(this.users);
})

}  



 Logout(){

   localStorage.removeItem("User");
   location.href = "/login";
   
 }

}
