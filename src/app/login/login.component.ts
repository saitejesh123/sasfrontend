import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='Email';
  password:string='pwd';
  

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }
  Login(Email:string,PWD:string):any  {
   
   
    var param = {email:Email,pwd:PWD}; 
    //console.log(param);
    
    this.http.get<any>('http://localhost:36744/api/stdinfoes/'+Email+'/'+PWD).subscribe(data => {
       
    
     console.log(data);
     
      if(data.Status=='Error') { alert(data.Message);}
        else{
          localStorage.setItem("User",JSON.stringify(data));
          //console.log(data.userName=='Admin');return;
          
          
       if(data.value.usertype == 'admin')
       {
        window.location.href="/AdminDashboard";
       }
      else{
        window.location.href="/StudentDashboard";
         
       }



         //window.location.href="stdinfo";
          
        }
        
        
      });
 return false;

  }

}
function go(arg0: string) {
  throw new Error('Function not implemented.');
}

