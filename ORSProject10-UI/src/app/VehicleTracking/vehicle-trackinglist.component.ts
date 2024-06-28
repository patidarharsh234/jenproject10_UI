import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-trackinglist',
  templateUrl: './vehicle-trackinglist.component.html',
  styleUrls: ['./vehicle-trackinglist.component.css']
})
export class VehicleTrackinglistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.VehicleTracking  ,locator,route);
   }

}


