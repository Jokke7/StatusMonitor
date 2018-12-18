import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../services/statusmonitor.service';

@Component({
  templateUrl: './showstatuses.component.html'
})

export class ShowStatusesComponent {
  public statusList: StatusMonitorData[];

  constructor(public http: HttpClient, private _router: Router, private _statusMonitorService: StatusMonitorService) {
    this.getStatuses();
  }

  getStatuses() {
    this._statusMonitorService.getAllStatuses()
      .subscribe((data: StatusMonitorData[]) => this.statusList = data);
  }
}

export interface StatusMonitorData {
  statusId: string;
  plantName: string;
  lastUpdate: Date;
  customerId: number;
  description: string;
  environment: string;
  applicationName: string;
  applicationInfo: string;
  applicationVersion: string;
  licenceExpiryDate: string;
  applicationSH: string;
  sslName: string;
  sslExpiryDate: Date;
  sslStatus: string;
  storageBlobNFiles: number;
  storageBlobSizeMb: number;
  storageSL: string;
  storageSH: string;
  databaseName: string;
  databaseServer: string;
  databaseVersion: string;
  databaseTemplate: string;
  databaseSizeMb: number;
  databaseSL: string;
  databaseSH: string;
}
