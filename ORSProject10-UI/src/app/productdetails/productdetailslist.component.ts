import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-productdetailslist',
  templateUrl: './productdetailslist.component.html',
  styleUrls: ['./productdetailslist.component.css']
})
export class ProductdetailslistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.productdetails  ,locator,route);
   }

}
