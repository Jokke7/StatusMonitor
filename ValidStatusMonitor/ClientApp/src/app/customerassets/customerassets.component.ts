import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../services/statusmonitor.service';

@Component({
  selector: 'customer-assets',
  templateUrl: './customerassets.component.html'
})

export class CustomerAssetsComponent {
  public customerAssetList: CustomerAssetsData[];

  constructor(public http: HttpClient, private _router: Router, private _statusMonitorService: StatusMonitorService) {
    this.getCustomerAssets();
  }

  getCustomerAssets() {
    this._statusMonitorService.getCustomerAssets()
      .subscribe((data: CustomerAssetsData[]) => this.customerAssetList = data);
  }
}

export interface CustomerAssetsData {
  Id: string;
  CustomerId: number;
  DatabaseName: string;
  DatabaseServer: string;
  DatabaseResourceGroup: string;
  ApplicationName: string;
  ApplicationResourceGroup;
  ApplicationLicenceId: string;
  CustomDomainName: string;
  EndpointTestUri: string;
  SslThumbPrint: string;
  StorageAccountKey: string;
  EnabledPdftron: boolean;
  Enabled3d: boolean;
  InstCode: string;
  PlantName: string;
  Customer: Object;
}

export interface Customer {
  Id: number;
  Name: string;
  CreatedDate: Date;
  Email: string; 
  Description: string;
}
