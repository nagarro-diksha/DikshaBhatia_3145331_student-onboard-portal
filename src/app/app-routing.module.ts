import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent} from './components/home-screen/home-screen.component';
import { StudentOnboardFormComponent} from './components/home-screen/student-onboard-form/student-onboard-form.component';
import { StudentListComponent} from './components/home-screen/student-list/student-list.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { StudentViewDetailsComponent } from './components/home-screen/student-details-card/student-view-details/student-view-details.component';
import { StudentEditDetailsComponent } from './components/home-screen/student-details-card/student-edit-details/student-edit-details.component';
import { LoginAuthenticationGuard } from './gaurds/login-authentication.guard';


const routes: Routes = [
    {path : '' , component: LoginPageComponent },
    {path : 'login' , component: LoginPageComponent },
    { path : 'onboardForm/:category' , component: StudentOnboardFormComponent },
    { path : 'home' ,canActivate :[LoginAuthenticationGuard] , component: HomeScreenComponent },
    { path : 'onboardForm' , component: StudentOnboardFormComponent },
    { path : 'studentList' , component: StudentListComponent },
    { path : 'student/view/:student', component: StudentViewDetailsComponent},
    { path : 'student/edit/:student', component: StudentEditDetailsComponent}
 ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeScreenComponent, StudentOnboardFormComponent, StudentListComponent,StudentViewDetailsComponent];