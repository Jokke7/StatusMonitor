import { Component, OnInit } from '@angular/core';
import { StatusMonitorData } from '../installationstatuses/showstatuses.component';
import { Customer } from '../customerassets/customerassets.component';
import { StatusMonitorService } from '../services/statusmonitor.service';
import { HttpClient } from '@angular/common/http';
import { CcrCardModel } from '../ccrcardmodels/ccr-card-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-installation-details-page',
  templateUrl: './installation-details-page.component.html',
  styleUrls: ['./installation-details-page.component.css']
})
export class InstallationDetailsPageComponent implements OnInit {

  private plantImageUrl: string;
  data: any;
  private statusId: string;
  private plantName: string;
  private custId: number;
  private customerName: string;
  private customerDesc: string;
  private statuses: StatusMonitorData[];
  private customer: Customer;
  private statusRow: StatusMonitorData;
  private appName: string;
  //private statusCards: Array<CcrCardModel>;
  private sub: any;

  constructor(public http: HttpClient, private route: ActivatedRoute, private _statusMonitorService: StatusMonitorService, /*private messageService: MessageService*/) {
    //this.route.params.subscribe(params => console.log(params));
    this.data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.custId = +params['cust'];
      this.statusId = params['statusid'];
      //this.plantName = params['instcode'];
      
    });

    ////this.plantName = this.route.params.subscribe;
    this.getStatuses();
  }

  getStatuses() {
    this._statusMonitorService.getAllStatuses()
      .subscribe((data: StatusMonitorData[]) => {
        this.statuses = data;
        this.getCustomer();
      })
  }

  getCustomer() {
    this._statusMonitorService.getCustomerById(this.custId)
      .subscribe((data: Customer) => {
        this.customer = data;
        this.setCustomerData();
      })
  }

  setCustomerData() {
    this.customerName = this.customer.Name;
    this.customerDesc = this.customer.Description;
    this.setStatusData();
  }

  setStatusData() {
    this.statusRow = this.statuses.find(s => s.Id == this.statusId);
    this.appName = this.statusRow.ApplicationName;
  }

  getStatusInstance() {
    return this.statusRow;
  }

}
