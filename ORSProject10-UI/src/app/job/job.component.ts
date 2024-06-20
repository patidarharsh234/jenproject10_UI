import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.JOB,locator,route);
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


  populateForm(form, data) {
    form.id = data.id;
   
     form .title=data.title; 
     form.dateOfOpening = data.dateOfOpening;
     form.experience=data.experience;
     form.statusId = data.statusId;
     form.status=data.status;
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
