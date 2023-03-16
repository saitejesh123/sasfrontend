import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
      
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
      
  user: User[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private userService: UserService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit() {
    this.userService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);

      this.user = data;
    })  
  }

  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.userService.delete(id).subscribe(res => {
         this.user = this.user.filter(user => user.stdid !== id);
         console.log('User deleted successfully!');
    })
  }
    
}