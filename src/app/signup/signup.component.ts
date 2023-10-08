/* import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      stdname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneno: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);

    // Check if any of the required fields are empty
    if (
      !this.form.value.stdname ||
      !this.form.value.address ||
      !this.form.value.phoneno ||
      !this.form.value.email ||
      !this.form.value.password ||
      !this.form.value.confirm_password ||
      !this.form.value.usertype
    ) {
      alert('Please enter all required details.');
      return;
    }

    if (this.form.value.password != this.form.value.confirm_password) {
      alert('Password and Confirm Password must be the same.');
      return;
    }

    this.userService.create(this.form.value).subscribe((res: any) => {
      console.log('Account signed successfully!');
      this.router.navigateByUrl('login');
    });
  }
}
 */



/* import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      stdname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneno: new FormControl('', [Validators.required, phoneNoValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      usertype: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);

    if (this.form.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    if (this.form.value.password != this.form.value.confirm_password) {
      alert('Password and Confirm Password must be the same.');
      return;
    }

    this.userService.create(this.form.value).subscribe((res: any) => {
      console.log('Account signed up successfully!');
      this.router.navigateByUrl('login');
    });
  }
}

function phoneNoValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const phoneNumber = control.value;
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  if (cleanedPhoneNumber.length !== 10) {
    return { 'invalidPhoneNumber': true };
  }

  return null;
} */


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router // Inject Router
  ) {
    this.form = this.formBuilder.group({
      stdname: ['', Validators.required],
      address: ['', Validators.required],
      phoneno: ['', [Validators.required, this.phoneNoValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      usertype: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    if (this.form.value.password !== this.form.value.confirm_password) {
      alert('Password and Confirm Password must be the same.');
      return;
    }

    this.http.post('http://localhost:5180/api/stdinfo', this.form.value).subscribe(
      (res: any) => {
        console.log('Account signed up successfully!');
        alert("Account signed up sucessfully!");

        this.router.navigate(['/login']);
        // Redirect to login or another page here
      },
      (error) => {
        console.error('Error signing up:', error);
        // Handle error, display appropriate message
      }
    );
  }

  phoneNoValidator(control: any): { [key: string]: boolean } | null {
    const phoneNumber = control.value;
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedPhoneNumber.length !== 10) {
      return { 'invalidPhoneNumber': true };
    }

    return null;
  }
}

