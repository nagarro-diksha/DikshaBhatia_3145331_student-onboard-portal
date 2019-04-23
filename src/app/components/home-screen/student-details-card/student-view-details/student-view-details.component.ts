import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StudentsService } from 'src/app/services/students.service';
import { IStudents } from 'src/app/models/student';

@Component({
  selector: 'app-student-view-details',
  templateUrl: './student-view-details.component.html',
  styleUrls: ['./student-view-details.component.css']
})
export class StudentViewDetailsComponent implements OnInit {

  public student : IStudents;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentsService
  ) {}

  goToStudentListPage(){
    this.router.navigate(['/studentList']);
  }
  
  ngOnInit() {
    let student = this.route.snapshot.paramMap.get('student');
    console.log("student: " + JSON.parse(student));
    this.student = JSON.parse(student);
  }

}
