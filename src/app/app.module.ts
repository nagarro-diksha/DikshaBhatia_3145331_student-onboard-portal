import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/home-screen/navigation-bar/navigation-bar.component';
import { StudentDetailsCardComponent } from './components/home-screen/student-details-card/student-details-card.component';
import { UsersService} from './services/users.service';
import { StudentsService} from './services/students.service';
import { StudentNameFilterPipe } from './pipes/student-name-filter.pipe';
import { StudentCategoryFilterPipe } from './pipes/student-category-filter.pipe';
import { NavigationBarOuterComponent } from './components/navigation-bar-outer/navigation-bar-outer.component';
import { PageFooterComponent } from './components/home-screen/page-footer/page-footer.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { StudentViewDetailsComponent } from './components/home-screen/student-details-card/student-view-details/student-view-details.component';
import { StudentEditDetailsComponent } from './components/home-screen/student-details-card/student-edit-details/student-edit-details.component';
import { LoginAuthenticationGuard } from './gaurds/login-authentication.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    NavigationBarComponent,
    StudentDetailsCardComponent,
    StudentNameFilterPipe,
    StudentCategoryFilterPipe,
    routingComponents,
    NavigationBarOuterComponent,
    PageFooterComponent,
    StudentViewDetailsComponent,
    StudentEditDetailsComponent,
  ],
  entryComponents:[
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    NgbModule.forRoot()
  ],
  providers: [UsersService,StudentsService,LoginAuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
