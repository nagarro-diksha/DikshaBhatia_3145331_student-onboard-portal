import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar-outer',
  templateUrl: './navigation-bar-outer.component.html',
  styleUrls: ['./navigation-bar-outer.component.css']
})
export class NavigationBarOuterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToOnBoard(){
    this.router.navigate(["/onboardForm"]);
  }

  goToStudentList(){
    this.router.navigate(["/studentList"]);
  }

  goToHomePage(){
    this.router.navigate(["/home"]);
  }

}
