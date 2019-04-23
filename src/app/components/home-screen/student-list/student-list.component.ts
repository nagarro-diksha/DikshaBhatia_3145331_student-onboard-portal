import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { IStudents } from 'src/app/models/student';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  
  public searchTerm: string;
  public filterCategory: string;
  public searchInput;

  dummyStudentData = [ { "name": "Sunita Williams", "password": "password", "category": "domestic", "documents": { "domicileCert": false, "birthCert": false, "markesheets": false, "policeClearance": false, "passport": false, "signedDecl": false }, "dob" :"13-04-1994", "motherName": "Sushmita Williams", "fatherName": "Suresh Willams", "lastScore" : "9.5 CGPA", "imgUrl" : "", "courseName": "BUSINESS STUDIES" }, { "name": "Abraham Lincon", "password": "password", "category": "international", "isInternationStudent": false, "documents": { "domicileCert": false, "birthCert": false, "markesheets": false, "policeClearance": false, "passport": false, "signedDecl": false }, "dob" :"13-04-1994", "motherName": "Sushmita Lincon", "fatherName": "Suresh Lincon", "lastScore" : "9.8 CGPA" , "imgUrl" : "", "courseName": "INFORMATION TECHNOLOGY" } ];

  @Input()
  public students: IStudents[] = [];

  @Input()
  public index:number;

  public studentList: IStudents[] = [];
  subscription: Subscription;
  
  constructor(private _studentService: StudentsService) { 
    //this.students = this._studentService.getListOfStudents();
    this.students = this._studentService.getStudentDataFromLocalStrage();
    console.log("student list component: list : " + this.students);
  }

  ngOnInit(): void {
    
  }

   


}
