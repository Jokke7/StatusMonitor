import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../services/statusmonitor.service';
import { CcrCardComponent } from '../ccr-card/ccr-card.component';
import { DatabaseProps } from '../CcrCardModels/database-card-model';
import { CcrCardModel, CcrType, SeverityLevel } from '../CcrCardModels/ccr-card-model';
import { MiscProps } from '../CcrCardModels/misc-card-model';
import { ApplicationProps } from '../CcrCardModels/application-card-model';
import { CertificateProps } from '../CcrCardModels/certificate-card-model';
import { StorageProps } from '../CcrCardModels/storage-card-model';
import { CustomerProps } from '../CcrCardModels/customer-card-model';

export interface StatusMonitorData {
  StatusId: string;
  PlantName: string;
  LastUpdate: Date;
  //CustomerId: number;
  Description: string;
  Environment: string;
  ApplicationName: string;
  ApplicationInfo: string;
  ApplicationVersion: string;
  LicenceExpiryDate: Date;
  ApplicationServiceHealth: string;
  SslName: string;
  SslExpiryDate: Date;
  SslStatus: string;
  StorageBlobNFiles: number;
  StorageBlobSizeMb: number;
  StorageSL: string;
  StorageSH: string;
  DatabaseName: string;
  DatabaseServer: string;
  DatabaseVersion: string;
  DatabaseTemplate: string;
  DatabaseSizeMb: number;
  DatabaseServiceLevel: string;
  DatabaseSH: string;
}

@Component({
  templateUrl: './showstatuses.component.html'
})

export class ShowStatusesComponent implements OnInit{
  public statuses: StatusMonitorData[];
  public databaseCcr;
  public customerCcr;
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
        this.setCcrCards();
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
      customerCard.ccrType = CcrType.Customer;
      customerCard.severityLevel = SeverityLevel.Immediate;

      applicationCard.ApplicationName = status.ApplicationName;
      applicationCard.ApplicationInfo = status.ApplicationInfo;
      applicationCard.ApplicationVersion = status.ApplicationVersion;
      applicationCard.ApplicationServiceLevel = "s1";
      applicationCard.ApplicationServiceHealth = status.ApplicationServiceHealth;
      applicationCard.ccrType = CcrType.AppService;
      applicationCard.severityLevel = SeverityLevel.Immediate;

      databaseCard.DatabaseName = status.DatabaseName;
      databaseCard.DatabaseServer = status.DatabaseServer;
      databaseCard.DatabaseServiceLevel = status.DatabaseServiceLevel;
      databaseCard.DatabaseSize = status.DatabaseSizeMb;
      databaseCard.DatabaseTemplate = status.DatabaseTemplate;
      databaseCard.DatabaseVersion = status.DatabaseVersion;
      databaseCard.ccrType = CcrType.Database;
      databaseCard.severityLevel = SeverityLevel.Alert;

      certificatesCard.SslName = status.SslName;
      certificatesCard.SslExpiryDate = status.SslExpiryDate;
      certificatesCard.SslStatus = status.SslStatus;
      certificatesCard.ccrType = CcrType.Certificate;
      certificatesCard.severityLevel = SeverityLevel.Warning;

      storageCard.StorageBlobNFiles = status.StorageBlobNFiles;
      storageCard.StorageBlobSizeMb = status.StorageBlobSizeMb;
      storageCard.StorageServiceLevel = status.StorageSL;
      storageCard.StorageServiceHealth = status.StorageSH;
      storageCard.ccrType = CcrType.Storage;
      storageCard.severityLevel = SeverityLevel.Informational;

      //miscCard.
      miscCard.ccrType = CcrType.Misc;
      this.statusCards.push(customerCard);
      this.statusCards.push(applicationCard);
      this.statusCards.push(databaseCard);
      this.statusCards.push(certificatesCard);
      this.statusCards.push(storageCard);
      this.statusCards.push(miscCard);
    }
    
  }

  getCcrCards(): Array<CcrCardModel> {
    return this.statusCards;
  }
}


