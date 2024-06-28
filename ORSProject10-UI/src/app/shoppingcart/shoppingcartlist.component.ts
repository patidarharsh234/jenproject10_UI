import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoppingcartlist',
  templateUrl: './shoppingcartlist.component.html',
  styleUrls: ['./shoppingcartlist.component.css']
})
export class ShoppingcartlistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.Shoppingcart  ,locator,route);
   }

  //  trimName() {
  //   this.form.data.name = this.form.data.name.trim();
  // }

}
