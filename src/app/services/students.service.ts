import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';
import { IStudents } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public initialStudentData = [{ "name": "Sunita Williams", "password": "password", "category": "domestic", "isInternationStudent": true, "documents": { "domicileCert": false, "birthCert": false, "markesheets": false, "policeClearance": false, "passport": false, "signedDecl": false }, "dob": "13-04-1994", "motherName": "Sushmita Williams", "fatherName": "Suresh Willams", "lastScore": "9.5 CGPA", "imgUrl": "", "courseName": "BUSINESS STUDIES" }, { "name": "Abraham Lincon", "password": "password", "category": "international", "isInternationStudent": false, "documents": { "domicileCert": false, "birthCert": false, "markesheets": false, "policeClearance": false, "passport": false, "signedDecl": false }, "dob": "13-04-1994", "motherName": "Sushmita Lincon", "fatherName": "Suresh Lincon", "lastScore": "9.8 CGPA", "imgUrl": "", "courseName": "INFORMATION TECHNOLOGY" }];

  public student$: BehaviorSubject<IStudents[]> = new BehaviorSubject([]);
  private _url: string = '/assets/data/students/students.json';

  constructor(private _http: HttpClient) {
    this.student$.next(JSON.parse(localStorage.getItem("onboardedStudents")));
  }

  getStudentDataFromLocalStrage(): any {
    return this.student$.getValue();
  };

  saveStudentDataToLocalStorage(student: IStudents) {
    if (null === this.student$.getValue()) {
      localStorage.setItem("onboardedStudents", JSON.stringify(this.initialStudentData));
      this.student$.next([]);
    }
    var updatedStudentData = [...this.student$.getValue(), student];
    this.student$.next(updatedStudentData);
    localStorage.setItem("onboardedStudents", JSON.stringify(updatedStudentData));
  }

  updateStudentDataInLocalStorage(student: IStudents, index: number) {
    var listOfStudents = this.getStudentDataFromLocalStrage();
    listOfStudents.splice(index, 1, student);
    console.log("spliced list " + listOfStudents);
    this.student$.next(listOfStudents);
    localStorage.setItem("onboardedStudents", JSON.stringify(listOfStudents));
  }

  deleteStudentData(index: number) {
    var listOfStudents = this.getStudentDataFromLocalStrage();
    listOfStudents.splice(index, 1);
    console.log("spliced list " + listOfStudents);
    this.student$.next(listOfStudents);
    localStorage.setItem("onboardedStudents", JSON.stringify(listOfStudents));
  }

  saveInitialLocalStorageData() {
    console.log(JSON.stringify(this.initialStudentData));
    localStorage.setItem("onboardedStudents", JSON.stringify(this.initialStudentData));
  } 

}
