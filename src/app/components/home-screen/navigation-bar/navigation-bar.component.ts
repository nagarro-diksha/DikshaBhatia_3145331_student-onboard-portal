import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@NgModule({
 imports: [
    RouterModule
 ]
})

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

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
