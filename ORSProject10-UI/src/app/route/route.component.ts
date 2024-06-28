import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute,public http:HttpClient) {
    super(locator.endpoints.Route,locator,route);
   }


    

   onUpload() {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

   


   
  //user Add-Update;
  submit() {
    var _self = this;
 
    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {

      _self.form.message = '';
      _self.form.inputerror={};

      _self.form.error=!res.success;

  
      if (res.success) { 
        _self.form.data.id = res.result.data;



        console.log(_self.form.data.id);
        console.log("----------Harsh----------.");

      } 
      if(res.result.message){
        _self.form.message = res.result.message;
      }
      if (res.result.inputerror) {
        _self.form.inputerror = res.result.inputerror;
      }
     

      console.log('FORM', _self.form);
    });
  }
//	Usecase#4: Route
//	Fields:
//	1. id (on business primary key),
//	2. name,
//	3. startdate,
//	4. allowdSpeed (number)
//	5. Vehicle ID (preload)

  populateForm(form, data) {
    form.id = data.id;
    form.name=data.name; 
   
     form.startdate=data.startdate; 

     form.allowdSpeed=data.allowdSpeed; 

     form.vehicleID =data.vehicleID;

     form.vehicleId = data.vehicleId;
     
    
  }






  
  //use that when devloper using Date type attribute in Form class of backend.
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }


}
