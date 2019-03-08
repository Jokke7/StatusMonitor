import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMonitorService } from '../services/statusmonitor.service';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { CcrCardModel, CcrType, SeverityLevel } from '../ccrcardmodels/ccr-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { CustomerAssetsData, Customer } from '../customerassets/customerassets.component';

export interface StatusMonitorData {
  Id: string;
  PlantName: string;
  LastUpdate: Date;
  CustomerId: number;
  Description: string;
  Environment: string;
  ApplicationName: string;
  ApplicationInfo: string;
  ApplicationVersion: string;
  LicenceExpiryDate: Date;
  LicenceServer: string;
  LicenceNumber: string;
  ApplicationServiceHealth: string;
  SslFriendlyName: string;
  SslExpiryDate: Date;
  SslStatus: string;
  StorageBlobNfiles: number;
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
  EnabledPdfTron: boolean;
  Enabled3dViewer: boolean;
  E2eTestUri: string;
  HttpResponseE2eTest: string;
  Customer: Object;
}

@Component({
  selector: 'list-statuses',
  templateUrl: './showstatuses.component.html',
  styleUrls: ['./showstatuses.component.css']
})

export class ShowStatusesComponent implements OnInit{
  public statuses: StatusMonitorData[];
  public customers: Customer[];


  static readonly cardsPerRow: number = 6;
  public toDetailsIcon: string;

  public statusCards: Array<CcrCardModel>;


  constructor(public http: HttpClient, private _statusMonitorService: StatusMonitorService) {
    this.statusCards = new Array<CcrCardModel>();
    this.toDetailsIcon = "../../assets/icons/to-detail-page.svg"
  }

  ngOnInit() {
    this.getStatuses();
  }

  getStatuses() {
    this._statusMonitorService.getAllStatuses()
      .subscribe((data: StatusMonitorData[]) => {
        this.statuses = data;
        this.getCustomers();
      })
  }

  getCustomers() {
    this._statusMonitorService.getCustomers()
      .subscribe((data: Customer[]) => {
        this.customers = data;
        this.setCcrCards();
      })
  }

  toggleRow(firstCardInRow: CcrCardModel) {
    var first: number = this.statusCards.indexOf(firstCardInRow);
    var last: number = first + ShowStatusesComponent.cardsPerRow;
    for (let card of this.statusCards) {
      var currentIndex = this.statusCards.indexOf(card);
      if ((currentIndex >= first) && (currentIndex < last)) {
        card.ShowCard = !card.ShowCard;
      }
    }
  }

  setRowStyle(firstCardInRow: CcrCardModel) {
    var first: number = this.statusCards.indexOf(firstCardInRow);
    var last: number = first + ShowStatusesComponent.cardsPerRow;
    var row: Array<CcrCardModel> = this.statusCards.slice(first, last);
    var sever = SeverityLevel.Informational;
    for (let card of row) {
      var iSever = card.SeverityLevel;
      if (iSever == SeverityLevel.Alert) {
        sever = iSever;
        break;
      }
      else if (iSever == SeverityLevel.Immediate) {
        sever = iSever;
      }
      else if (iSever == SeverityLevel.Warning) {
        sever = iSever;
      }
    }
    //if (sever == SeverityLevel.Alert) { this.toggleRow(firstCardInRow);}
    return {
      warning: sever == SeverityLevel.Warning,
      immediate: sever == SeverityLevel.Immediate,
      alert1: sever == SeverityLevel.Alert
    }

  }

  private setCcrCards() {

    for (let status of this.statuses) {
      var customerCard = {} as CustomerProps;
      var applicationCard = {} as ApplicationProps;
      var databaseCard = {} as DatabaseProps;
      var certificatesCard = {} as CertificateProps;
      var storageCard = {} as StorageProps;
      var miscCard = {} as MiscProps;
  

      customerCard.CustomerId = status.CustomerId;
      customerCard.StatusId = status.Id;
      customerCard.Name = this.customers.find(cust => cust.Id === customerCard.CustomerId).Name;
      customerCard.Description = status.Description;
      customerCard.Environment = status.Environment;
      customerCard.LastUpdate = status.LastUpdate;
      customerCard.PlantName = status.PlantName;
      customerCard.LicenceExpiryDate = status.LicenceExpiryDate;
      customerCard.E2eTestUri = status.E2eTestUri;
      customerCard.AppLink = "http://" + status.E2eTestUri;
      customerCard.CcrType = CcrType.Customer;


      applicationCard.ApplicationName = status.ApplicationName;
      applicationCard.ApplicationInfo = status.ApplicationInfo;
      applicationCard.ApplicationVersion = status.ApplicationVersion;
      applicationCard.LicenceExpiryDate = status.LicenceExpiryDate;
      applicationCard.LicenceSerial = status.LicenceNumber;
      applicationCard.LicenceServer = status.LicenceServer;
      applicationCard.ApplicationServiceLevel = status.DatabaseServiceLevel;
      applicationCard.ApplicationServiceHealth = status.ApplicationServiceHealth;
      applicationCard.E2eTestResponse = status.HttpResponseE2eTest;
      applicationCard.CcrType = CcrType.AppService;

      databaseCard.DatabaseName = status.DatabaseName;
      databaseCard.DatabaseServer = status.DatabaseServer;
      databaseCard.DatabaseServiceLevel = status.DatabaseServiceLevel;
      databaseCard.DatabaseSize = status.DatabaseSizeMb;
      databaseCard.DatabaseTemplate = status.DatabaseTemplate;
      databaseCard.DatabaseVersion = status.DatabaseVersion;
      databaseCard.CcrType = CcrType.Database;

      certificatesCard.SslName = status.SslFriendlyName;
      certificatesCard.SslExpiryDate = status.SslExpiryDate;
      certificatesCard.SslStatus = status.SslStatus;
      certificatesCard.CcrType = CcrType.Certificate;

      storageCard.StorageBlobNFiles = status.StorageBlobNfiles;
      storageCard.StorageBlobSizeMb = status.StorageBlobSizeMb;
      storageCard.StorageServiceLevel = status.StorageServiceLevel;
      storageCard.StorageServiceHealth = status.StorageServiceHealth;
      storageCard.CcrType = CcrType.Storage;

      miscCard.CcrType = CcrType.Misc;
      miscCard.Enabled3dViewer = status.Enabled3dViewer;
      miscCard.EnabledPdfTron = status.EnabledPdfTron;
      
      this.statusCards.push(customerCard);
      this.statusCards.push(applicationCard);
      this.statusCards.push(databaseCard);
      this.statusCards.push(certificatesCard);
      this.statusCards.push(storageCard);
      this.statusCards.push(miscCard);
    }
    this._statusMonitorService.getCcrStatusSeverity(this.statusCards);
  }

  
}


