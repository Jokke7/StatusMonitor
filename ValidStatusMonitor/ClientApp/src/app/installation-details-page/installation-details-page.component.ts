import { Component, OnInit } from '@angular/core';
import { StatusMonitorData } from '../installationstatuses/showstatuses.component';
import { Customer } from '../customerassets/customerassets.component';
import { StatusMonitorService } from '../services/statusmonitor.service';
import { HttpClient } from '@angular/common/http';
import { CcrCardModel, CcrType } from '../ccrcardmodels/ccr-card-model';
import { ActivatedRoute } from '@angular/router';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';

@Component({
  selector: 'app-installation-details-page',
  templateUrl: './installation-details-page.component.html',
  styleUrls: ['./installation-details-page.component.css']
})
export class InstallationDetailsPageComponent implements OnInit {

  private plantImageUrl: string;
  //data: any;
  private statusId: string;
  private plantName: string;
  private custId: number;
  private customerName: string;
  private customerDesc: string;
  private customer: Customer;
  private statusRow: StatusMonitorData;
  private appName: string;
  public statusCards: Array<CcrCardModel>;
  //private statusCards: Array<CcrCardModel>;
  private sub: any;

  constructor(public http: HttpClient, private route: ActivatedRoute, private _statusMonitorService: StatusMonitorService) {
    this.route.params.subscribe(params => console.log(params));
    //this.data = {
    //  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    //  datasets: [
    //    {
    //      label: 'First Dataset',
    //      data: [65, 59, 80, 81, 56, 55, 40],
    //      fill: false,
    //      borderColor: '#4bc0c0'
    //    },
    //    {
    //      label: 'Second Dataset',
    //      data: [28, 48, 40, 19, 86, 27, 90],
    //      fill: false,
    //      borderColor: '#565656'
    //    }
    //  ]
    //}
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.custId = +params['cust'];
      this.statusId = params['statusid'];
    });

    this.getStatus();
    this.getCustomer();
  }

  getStatus() {
    this._statusMonitorService.getStatusById(this.statusId)
      .subscribe((data: StatusMonitorData) => {
        this.statusRow = data;
        this.plantName = this.statusRow.PlantName;
        this.setCcrCards();
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
  }

  private setCcrCards() {
    var cards = new Array<CcrCardModel>();
    var customerCard;
    var applicationCard;
    var databaseCard;
    var certificatesCard;
    var storageCard;
    var miscCard;
    if (this.statusCards === undefined || this.statusCards.length == 0) {
      customerCard = {} as CustomerProps;
      applicationCard = {} as ApplicationProps;
      databaseCard = {} as DatabaseProps;
      certificatesCard = {} as CertificateProps;
      storageCard = {} as StorageProps;
      miscCard = {} as MiscProps;
    }
    else {
      customerCard = this.statusCards[0];
      applicationCard = this.statusCards[1];
      databaseCard = this.statusCards[2];
      certificatesCard = this.statusCards[3];
      storageCard = this.statusCards[4];
      miscCard = this.statusCards[5];
    }

    customerCard.CustomerId = this.statusRow.CustomerId
    customerCard.StatusId = this.statusRow.Id;
    //customerCard.Name = this.customers.find(cust => cust.Id === customerCard.CustomerId).Name;
    customerCard.Description = this.statusRow.Description;
    customerCard.LastUpdate = this.statusRow.LastUpdate;
    customerCard.Environment = this.statusRow.Environment;
    customerCard.PlantName = this.statusRow.PlantName;
    customerCard.LicenceExpiryDate = this.statusRow.LicenceExpiryDate;
    customerCard.E2eTestUri = this.statusRow.E2eTestUri;
    customerCard.AppLink = "http://" + this.statusRow.E2eTestUri;
    customerCard.CcrType = CcrType.Customer;

    applicationCard.ApplicationName = this.statusRow.ApplicationName;
    applicationCard.ApplicationInfo = this.statusRow.ApplicationInfo;
    applicationCard.ApplicationVersion = this.statusRow.ApplicationVersion;
    applicationCard.LicenceExpiryDate = this.statusRow.LicenceExpiryDate;
    applicationCard.LicenceSerial = this.statusRow.LicenceNumber;
    applicationCard.LicenceServer = this.statusRow.LicenceServer;
    applicationCard.ApplicationServiceLevel = this.statusRow.DatabaseServiceLevel;
    applicationCard.ApplicationServiceHealth = this.statusRow.ApplicationServiceHealth;
    applicationCard.E2eTestResponse = this.statusRow.HttpResponseE2eTest;
    applicationCard.CcrType = CcrType.AppService;

    databaseCard.DatabaseName = this.statusRow.DatabaseName;
    databaseCard.DatabaseServer = this.statusRow.DatabaseServer;
    databaseCard.DatabaseServiceLevel = this.statusRow.DatabaseServiceLevel;
    databaseCard.DatabaseSize = this.statusRow.DatabaseSizeMb;
    databaseCard.DatabaseTemplate = this.statusRow.DatabaseTemplate;
    databaseCard.DatabaseVersion = this.statusRow.DatabaseVersion;
    databaseCard.CcrType = CcrType.Database;

    certificatesCard.SslName = this.statusRow.SslFriendlyName;
    certificatesCard.SslExpiryDate = this.statusRow.SslExpiryDate;
    certificatesCard.SslStatus = this.statusRow.SslStatus;
    certificatesCard.CcrType = CcrType.Certificate;

    storageCard.StorageBlobNFiles = this.statusRow.StorageBlobNfiles;
    storageCard.StorageBlobSizeMb = this.statusRow.StorageBlobSizeMb;
    storageCard.StorageServiceLevel = this.statusRow.StorageServiceLevel;
    storageCard.StorageServiceHealth = this.statusRow.StorageServiceHealth;
    storageCard.CcrType = CcrType.Storage;

    miscCard.CcrType = CcrType.Misc;
    miscCard.Enabled3dViewer = this.statusRow.Enabled3dViewer;
    miscCard.EnabledPdfTron = this.statusRow.EnabledPdfTron;

    cards.push(customerCard);
    cards.push(applicationCard);
    cards.push(databaseCard);
    cards.push(certificatesCard);
    cards.push(storageCard);
    cards.push(miscCard);
    
    this.statusCards = cards;
    this._statusMonitorService.getCcrStatusSeverity(this.statusCards);
  }
}
