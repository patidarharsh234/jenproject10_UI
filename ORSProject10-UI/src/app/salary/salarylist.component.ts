import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salarylist',
  templateUrl: './salarylist.component.html',
  styleUrls: ['./salarylist.component.css']
})
export class SalarylistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.salary  ,locator,route);
   }


}
