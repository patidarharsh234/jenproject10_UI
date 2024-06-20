import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.client  ,locator,route);
   }

}
