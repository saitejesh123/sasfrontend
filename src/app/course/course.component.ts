import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Post } from '../post/post';
import { PostService } from '../post/post.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  posts: Post[] = [];
  course:any;

  constructor(private dataService: DataService,public postService: PostService ) { }

  

  ngOnInit(): void {
    // Fetch data from both services in a single ngOnInit method.
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });

    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.course = data;
    });
  }




}
