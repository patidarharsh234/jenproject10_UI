import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-ownerlist',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./ownerlist.component.css']
})
export class OwnerlistComponent extends BaseListCtl{

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.Owner  ,locator,route);
   }

}
