import { Component,OnInit } from '@angular/core';
import { Post } from '../post/post';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { PostService } from '../post/post.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent {
  form!: FormGroup;
  post!: Post;
  posts: Post[] = [];
  flag:boolean = false;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public cartService: CartService,
    public postService: PostService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      stdid: new FormControl('', [Validators.required]),
      courseid: new FormControl('', [Validators.required]),
     // coursename: new FormControl('', [Validators.required]),
     coursefees:new FormControl('', [Validators.required]),
      //stdname: new FormControl('', [Validators.required]),
      //phoneno: new FormControl('', [Validators.required]),
      
    });
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.posts.forEach(x => {
      if(x.courseid == this.form.value.courseid){
        this.flag = true;
        return;
      }
    });

    if(!this.flag){
      alert("Sorry, No courses exists with this id");
      this.form.reset();
    }

    this.postService.find(this.form.value.courseid).subscribe((data: Post)=>{
      console.log(data);
      this.post = data;
    });

    if(window.confirm("Your course is confirmed" )){
      this.cartService.create(this.form.value).subscribe((res:any) => {
        alert("Your booking has been successful.");
        console.log('Booking added successfully!');
        this.router.navigateByUrl('/studentDashboard');
      })
     }else{
      alert("You have not made the payment.");
     } 
  } 

}
