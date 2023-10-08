import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent {

  course:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.course = data;
    }) 
    

}
//cours() { alert('course is cofirmed')}
Buycourse(course: any) {
  const confirmation = confirm(`Do you want to buy the course "${course.coursename}" for ${course.coursefees}?`);

  if (confirmation) {
    alert(`You have successfully purchased the course "${course.coursename}"`);
    // You can add additional logic here for handling the purchase.
  } else {
    alert('Course purchase canceled.');
  }
}

}
