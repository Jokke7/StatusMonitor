
import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../services/statusmonitor.service';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { CcrCardModel, CcrType } from '../ccrcardmodels/ccr-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { CustomerAssetsData } from '../customerassets/customerassets.component';

export interface StatusMonitorData {
  StatusId: string;
  PlantName: string;
  LastUpdate: Date;
  CustomerId: number;
  Description: string;
  Environment: string;
  ApplicationName: string;
  ApplicationInfo: string;
  ApplicationVersion: string;
  LicenceExpiryDate: Date;
  ApplicationServiceHealth: string;
  SslFriendlyName: string;
  SslExpiryDate: Date;
  SslStatus: string;
  StorageBlobNFiles: number;
  StorageBlobSizeMb: number;
  StorageServiceLevel: string;
  StorageServiceHealth: string;
  DatabaseName: string;
  DatabaseServer: string;
  DatabaseVersion: string;
  DatabaseTemplate: string;
  DatabaseSizeMb: number;
  DatabaseServiceLevel: string;
  DatabaseServiceHealth: string;
}

@Component({
  templateUrl: './showstatuses.component.html',
  styleUrls: ['./showstatuses.component.css']
})

export class ShowStatusesComponent implements OnInit{
  public statuses: StatusMonitorData[];
  public assets: CustomerAssetsData[];
  public statusCards: Array<CcrCardModel>;


  constructor(public http: HttpClient, private _router: Router, private _statusMonitorService: StatusMonitorService) {
    this.statusCards = new Array<CcrCardModel>();
  }

  ngOnInit() {
    this.getStatuses();

  }

  getStatuses() {
    this._statusMonitorService.getAllStatuses()
      .subscribe((data: StatusMonitorData[]) => {
        this.statuses = data;
        this.getAssets();
        this.setCcrCards();

      })
  }

  getAssets() {
    this._statusMonitorService.getCustomerAssets()
      .subscribe((data: CustomerAssetsData[]) => {
        this.assets = data;
      })
  }

  private setCcrCards() {
    for (let status of this.statuses) {
      var customerCard = {} as CustomerProps;
      var applicationCard = {} as ApplicationProps;
      var databaseCard = {} as DatabaseProps;
      var certificatesCard = {} as CertificateProps;
      var storageCard = {} as StorageProps;
      var miscCard = {} as MiscProps;
  

      //customerCard.CustomerId = status.CustomerId;
      customerCard.Description = status.Description;
      customerCard.Environment = status.Environment;
      customerCard.LastUpdate = status.LastUpdate;
      customerCard.PlantName = status.PlantName;
      customerCard.LicenceExpiryDate = status.LicenceExpiryDate;
      customerCard.CcrType = CcrType.Customer;


      applicationCard.ApplicationName = status.ApplicationName;
      applicationCard.ApplicationInfo = status.ApplicationInfo;
      applicationCard.ApplicationVersion = status.ApplicationVersion;
      applicationCard.LicenceExpiryDate = status.LicenceExpiryDate;
      applicationCard.ApplicationServiceLevel = "s1"
      applicationCard.ApplicationServiceHealth = status.ApplicationServiceHealth;
      applicationCard.CcrType = CcrType.AppService;

      databaseCard.DatabaseName = status.DatabaseName;
      databaseCard.DatabaseServer = status.DatabaseServer;
      console.log("Server:" + databaseCard.DatabaseServer);
      databaseCard.DatabaseServiceLevel = status.DatabaseServiceLevel;
      databaseCard.DatabaseSize = status.DatabaseSizeMb;
      databaseCard.DatabaseTemplate = status.DatabaseTemplate;
      databaseCard.DatabaseVersion = status.DatabaseVersion;
      databaseCard.CcrType = CcrType.Database;


      certificatesCard.SslName = status.SslFriendlyName;
      certificatesCard.SslExpiryDate = status.SslExpiryDate;
      certificatesCard.SslStatus = status.SslStatus;
      certificatesCard.CcrType = CcrType.Certificate;


      storageCard.StorageBlobNFiles = status.StorageBlobNFiles;
      storageCard.StorageBlobSizeMb = status.StorageBlobSizeMb;
      storageCard.StorageServiceLevel = status.StorageServiceLevel;
      storageCard.StorageServiceHealth = status.StorageServiceHealth;
      storageCard.CcrType = CcrType.Storage;

      

      miscCard.CcrType = CcrType.Misc;
      
      this.statusCards.push(customerCard);
      this.statusCards.push(applicationCard);
      this.statusCards.push(databaseCard);
      this.statusCards.push(certificatesCard);
      this.statusCards.push(storageCard);
      this.statusCards.push(miscCard);
    }
    this._statusMonitorService.getCcrStatusSeverity(this.statusCards);
  }

  getCcrCards(): Array<CcrCardModel> {
    return this.statusCards;
  }
}


