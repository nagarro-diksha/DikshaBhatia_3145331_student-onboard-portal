import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public users = [  
    {  
       "name":"admin",
       "password":"password"
    },
    {  
       "name":"admin1",
       "password":"password"
    }
 ];
  public userName: string ="";
  public password: string="";

  constructor(private _userService: UsersService, private _router: Router) { }

  ngOnInit() {
  }

  resetUserData(){
    this.userName = null;
    this.password = null;
   }

  loginUser() {
  
    // this._userService.getListOfUsers().subscribe(data => this.users = data);
    for (var i = 0;i < this.users.length; i++) {
      if (this.users[i].name === this.userName && this.users[i].password === this.password){
        console.log("LOGIN SUCCESSFUL");
        localStorage.setItem('isUserLoggedIn',"true");
        localStorage.setItem('userName',this.userName);
        
        this.resetUserData();
        this._router.navigate(["/home"]);
        return true;
      }
      console.log("LOGIN FAILED");
      this.resetUserData();
      return false;
    }

  }

}
