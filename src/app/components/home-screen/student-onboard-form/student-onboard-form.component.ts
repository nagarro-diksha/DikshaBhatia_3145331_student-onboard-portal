import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { IStudents } from 'src/app/models/student';
import { IDocuments } from 'src/app/models/documents';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-onboard-form',
  templateUrl: './student-onboard-form.component.html',
  styleUrls: ['./student-onboard-form.component.css']
})

@NgModule({
  imports: [FormsModule]
})
export class StudentOnboardFormComponent implements OnInit {

  public studentData: IStudents;
  public documentsData: IDocuments;
  public category;

  constructor(private _studentService: StudentsService, private _router: Router) { }

  ngOnInit() {
  }

  onBoardSubmit(studentOnboardFormData) {
    let data = JSON.parse(studentOnboardFormData);
    console.log(data.documents);
    let documents = data.documents;
    this.documentsData = new IDocuments(false, true, true, true, true, true);
    let x: IDocuments = new IDocuments(documents.domicile, documents.birthCert, documents.marksheets, documents.policeClearance, documents.passport, documents.declaration);
    //this.documentsData = new IDocuments(documents.domicile,documents.birthCert,documents.marksheets,documents.policeClearance,documents.passport,documents.declaration);
    this.studentData = new IStudents(data.name, "password", data.category, this.documentsData, data.dob, data.motherName, data.fatherName, data.lastScore, "https://cdn.mos.cms.futurecdn.net/VTha9donMfgC5gbE2z4FKG-1200-80.jpg", data.courseName, 1);
    console.log(this.studentData);
    //this._studentService.addNewOnboardStudent(this.studentData);
    this._studentService.saveStudentDataToLocalStorage(this.studentData);
    this._router.navigate(["/studentList"]);

  }

}

