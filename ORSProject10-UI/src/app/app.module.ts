import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';



import { HttpServiceService } from './http-service.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataValidator } from './utility/data-validator';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent} from './user/user.component';

import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import {RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from "./timetable/timetable-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from "./loader/loader.component";
import { NavbarComponent } from './navbar/navbar.component';

import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import {MyprofileComponent} from './user/myprofile.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';
import { JobComponent } from './job/job.component';
import { JoblistComponent } from './job/joblist.component';
import { MaxLengthNumberDirective } from './max-length-number.directive';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShoppingcartlistComponent } from './shoppingcart/shoppingcartlist.component';
import { NoNumbersDirectiveDirective } from './no-numbers-directive.directive';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './client/clientlist.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclelistComponent } from './Vehicle/vehiclelist.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerlistComponent } from './Owner/ownerlist.component';
import { VehicleTrackingComponent } from './vehicle-tracking/vehicle-tracking.component';
import { VehicleTrackinglistComponent } from './VehicleTracking/vehicle-trackinglist.component';
import { RouteComponent } from './route/route.component';
import { RoutelistComponent } from './Route/routelist.component';
import { PatientComponent } from './patient/patient.component';
import { PatientlistComponent } from './patient/patientlist.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrescriptionlistComponent } from './prescription/prescriptionlist.component';
import { IssueComponent } from './issue/issue.component';
import { IssuelistComponent } from './issue/issuelist.component';
import { SalaryComponent } from './salary/salary.component';
import { SalarylistComponent } from './salary/salarylist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailslistComponent } from './productdetails/productdetailslist.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './order/orderlist.component';




// import { AuthService } from './auth.service';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MarksheetComponent,
    MarksheetListComponent,
    StudentComponent,
    StudentListComponent,
    CollegeComponent,
    CollegeListComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    MessageComponent,
    MessageListComponent,
    UserComponent,
    UserListComponent,
  
    RoleComponent,
    RoleListComponent,
    CourseComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,
    ChangepasswordComponent,
    LoaderComponent,
    FileComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    MyprofileComponent,
    JasperReportComponent,
    JobComponent,
    JoblistComponent,
    MaxLengthNumberDirective,
    ShoppingcartComponent,
    ShoppingcartlistComponent,
    NoNumbersDirectiveDirective,
    ClientComponent,
    ClientlistComponent,
    VehicleComponent,
    VehiclelistComponent,
    OwnerComponent,
    OwnerlistComponent,
    VehicleTrackingComponent,
    VehicleTrackinglistComponent,
    RouteComponent,
    RoutelistComponent,
    PatientComponent,
    PatientlistComponent,
    PrescriptionComponent,
    PrescriptionlistComponent,
    IssueComponent,
    IssuelistComponent,
    SalaryComponent,
    SalarylistComponent,
  ProductdetailsComponent,
  ProductdetailslistComponent,
  OrderComponent,
  OrderlistComponent,
 ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: myHttpLoader, 
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthService ,
     multi: true 
},
   HttpServiceService, 
    DataValidator,
    CookieService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}