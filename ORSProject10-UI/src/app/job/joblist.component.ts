import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent extends BaseListCtl {
  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.JOB,locator,route);
   }

}
