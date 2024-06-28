import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-vehicle-tracking',
  templateUrl: './vehicle-tracking.component.html',
  styleUrls: ['./vehicle-tracking.component.css']
})
export class VehicleTrackingComponent extends BaseCtl{

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute,public http:HttpClient) {
    super(locator.endpoints.VehicleTracking,locator,route);
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


  //	2. lat (double)
//	3. longs (double)
//	4. VehicleID (Preload)
//	5. date

  populateForm(form, data) {
    form.id = data.id;
    form.lat=data.lat; 
   
     form.longs=data.longs; 

     form.date=data.date; 

     form.vehicleId = data.vehicleId;
     form.vehicleID=data.vehicleID;
     
    
  }

  //use that when devloper using Date type attribute in Form class of backend.
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
