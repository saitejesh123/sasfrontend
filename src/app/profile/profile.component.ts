import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  stdid!:number;
  user !: User;
  id !:number;
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(public userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.stdid = this.route.snapshot.params['stdid'];
    console.log(this.stdid);
this.userService.find(this.stdid).subscribe((data: User)=>{
  console.log(data);
  this.user = data;
  });
 }  
}
