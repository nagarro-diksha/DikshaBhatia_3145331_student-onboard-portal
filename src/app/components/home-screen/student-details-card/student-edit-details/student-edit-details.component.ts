import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StudentsService } from 'src/app/services/students.service';
import { IStudents } from 'src/app/models/student';
import { IDocuments } from 'src/app/models/documents';

@Component({
  selector: 'app-student-edit-details',
  templateUrl: './student-edit-details.component.html',
  styleUrls: ['./student-edit-details.component.css']
})
export class StudentEditDetailsComponent implements OnInit {

  public student : IStudents;
  public index :string;
  public studentData: IStudents;
  public documentsData: IDocuments;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public studentService: StudentsService
  ) {}

  ngOnInit() {
    let student = this.route.snapshot.paramMap.get('student');
    console.log("student: " + JSON.parse(student));
    this.student = JSON.parse(student);
  }

  
  goToStudentListPage(){
    this.router.navigate(['/studentList']);
  }


  onBoardUpdate(studentOnboardFormData) {
    let data = JSON.parse(studentOnboardFormData);
    console.log(data.documents);
    let documents = data.documents;
    this.documentsData = new IDocuments(false, true, true, true, true, true);
    let x: IDocuments = new IDocuments(documents.domicile, documents.birthCert, documents.marksheets, documents.policeClearance, documents.passport, documents.declaration);
    //this.documentsData = new IDocuments(documents.domicile,documents.birthCert,documents.marksheets,documents.policeClearance,documents.passport,documents.declaration);
    this.studentData = new IStudents(data.name, "password", data.category, this.documentsData, data.dob, data.motherName, data.fatherName, data.lastScore, "https://cdn.mos.cms.futurecdn.net/VTha9donMfgC5gbE2z4FKG-1200-80.jpg", data.courseName, 1);
    console.log(this.studentData);
    //this._studentService.addNewOnboardStudent(this.studentData);
    this.studentService.updateStudentDataInLocalStorage(this.studentData,1);
    this.router.navigate(["/studentList"]);

  }

}
