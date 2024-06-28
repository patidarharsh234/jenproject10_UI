import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute,public http:HttpClient) {
    super(locator.endpoints.Shoppingcart,locator,route);
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
//Usecase #2: ShoppingCart
//Fields:

//2. name,
//3. product (Preload)
//4. date,
//5. quantity

  populateForm(form, data) {
    form.id = data.id;
   
     form .name=data.name;

     form.dates = data.dates;

     form.quantity=data.quantity;

     form.productId = data.productId;
    
     
    
  }

  //use that when devloper using Date type attribute in Form class of backend.
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }


}
