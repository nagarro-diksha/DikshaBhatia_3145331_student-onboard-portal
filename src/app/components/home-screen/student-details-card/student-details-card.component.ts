import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { IStudents } from 'src/app/models/student';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-student-details-card',
  templateUrl: './student-details-card.component.html',
  styleUrls: ['./student-details-card.component.css']
})
export class StudentDetailsCardComponent implements OnInit {

  @Input() public student: IStudents;

  @Input() public index:number;
  
  constructor(private _router : Router,private _studentService : StudentsService) {
  }

  editStudentDetails(studentData : IStudents){
  //  this._router.navigate(['/student/edit/',{id: this.index , student: JSON.stringify(this.student)}]);
    this._router.navigate(['/student/edit/', JSON.stringify(this.student)]);
 }

  viewStudentDetails(students : IStudents){
    this._router.navigate(['/student/view/',JSON.stringify(this.student)]);
  }

  deleteStudentData(indexToBeDeleted:number){
      console.log("indexToBeDeleted: " + indexToBeDeleted);
      if(confirm("Are you sure you want to delete "+ this.student.name +"'s student data?")){
        this._studentService.deleteStudentData(indexToBeDeleted);
      }
  }

  ngOnInit(){

  }

}
