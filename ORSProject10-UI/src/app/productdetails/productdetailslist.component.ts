import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetailslist',
  templateUrl: './productdetailslist.component.html',
  styleUrls: ['./productdetailslist.component.css']
})
export class ProductdetailslistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.ProductDetails,locator,route);
   }




   //number-->type=number
  //mobileNo-->type=number /appmaxlength 10
  //name--->appNonumber
  //Email-->bana he
  //date of burth
  //address


}
