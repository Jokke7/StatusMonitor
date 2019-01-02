import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../services/statusmonitor.service';

@Component({
  templateUrl: './customerassets.component.html'
})

export class CustomerAssetsComponent {
  public customerAssetList: CustomerAssetsData[];

  constructor(public http: HttpClient, private _router: Router, private _statusMonitorService: StatusMonitorService) {
    this.getCustomerAssets();
  }

  getCustomerAssets() {
    this._statusMonitorService.getCustomers()
      .subscribe((data: CustomerAssetsData[]) => this.customerAssetList = data);
  }
}

export interface CustomerAssetsData {
  statusId: number;
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
