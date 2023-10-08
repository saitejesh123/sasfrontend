import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  courseid!:number;
  id!: number;
  post!: Post;
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.courseid = this.route.snapshot.params['postId'];
    console.log(this.courseid);
    this.postService.find(this.courseid).subscribe((data: Post)=>{
      console.log(data);
      this.post = data;
    }); 
      
    this.form = new FormGroup({
      coursename: new FormControl('', Validators.required),
      coursefees: new FormControl('', Validators.required),
      coursedescription: new FormControl('', Validators.required),
      courselink: new FormControl('', Validators.required)
    });
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
    this.postService.update(this.courseid, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
   
}

