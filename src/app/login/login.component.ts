/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup ({
  //email: string = 'Email';
  //password: string = 'pwd';
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),

  });

  hasValidationErrors: boolean = false;
  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  //Login(Email: string, PWD: string): any {
  //  if (!Email || !PWD) {
  //    alert('Please enter both email and password.');
  //    return;
  //  }

    //var param = { email: Email, pwd: PWD };

   // this.http.get<any>('http://localhost:5142/api/stdinfo/' + Email + '/' + PWD).subscribe(data => {
     // console.log(data);

      //if (data.Status == 'Error') {
        //alert(data.Message);
      //} else {
        //localStorage.setItem("User", JSON.stringify(data));

        //if (data.value && data.value.userType == 'admin') {
          //window.location.href = "/AdminDashboard";
        //} else {
          //window.location.href = "/StudentDashboard";
        //}
      //}
//    });

  //  return false;
  //}

  get f() {
    return this.form.controls;
  }

  Login(): void {
    // Check if the form is valid
    if (this.form.invalid) {
      // If the form is invalid, do not proceed with login
      this.hasValidationErrors = true;
      return;
    }

    const email = this.form.value.email;
    const password = this.form.value.password;

    const param = { email, pwd: password };

    this.http.get<any>('http://localhost:5142/api/stdinfo/' + email + '/' + password).subscribe(data => {
      console.log(data);

      if (data.Status === 'Error') {
        alert(data.Message);
      } else {
        localStorage.setItem('User', JSON.stringify(data));

        if (data.value && data.value.userType === 'admin') {
          window.location.href = '/AdminDashboard';
        } else {
          window.location.href = '/StudentDashboard';
        }
      }
    });
  }

}
 */

/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  hasValidationErrors: boolean = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  get f() {
    return this.form.controls;
  }

  Login(): void {
    // Check if the form is valid
    if (this.form.invalid) {
      // If the form is invalid, show an alert message
      alert('Please enter both email and password.');
      return;
    }

    const email = this.form.value.email;
    const password = this.form.value.password;

    const param = { email, pwd: password };

    this.http.get<any>('http://localhost:5142/api/stdinfo/' + email + '/' + password).subscribe(data => {
      console.log(data);

      if (data.Status === 'Error') {
        alert(data.Message);
      } else {
        localStorage.setItem('User', JSON.stringify(data));

        if (data.value && data.value.userType === 'admin') {
          window.location.href = '/AdminDashboard';
        } else {
          window.location.href = '/StudentDashboard';
        }
      }
    });
  }
}
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  loginError: string = ''; // Variable to store login error messages

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  get f() {
    return this.form.controls;
  }

  Login(): void {
    const email = this.form.value.email;
    const password = this.form.value.password;

    // Check if the form is valid
    if (!email || !password) {
      // If the form is invalid, set the login error message
      this.loginError = 'Please enter both email and password.';
      return;
    }

    const param = { email, pwd: password };

    this.http.get<any>('http://localhost:5180/api/stdinfo/' + email + '/' + password).subscribe(data => {
      console.log(data);

      if (data.Status === 'Error') {
        if (data.Message === 'Invalid password') {
          this.loginError = 'Please enter the correct password.';
        } else {
          this.loginError = data.Message;
        }
      } else {
        localStorage.setItem('User', JSON.stringify(data));

        if (data.value && data.value.userType === 'admin') {
          window.location.href = '/AdminDashboard';
        } else {
          window.location.href = '/StudentDashboard';
        }
      }
    },
    (error) => {
      // Handle HTTP request error here
      console.error('HTTP request error:', error);
      this.loginError = 'Please enter the correct password.';
    }
  );
}
}