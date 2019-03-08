
import {throwError as observableThrowError,  Observable} from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http' 
import { Router } from '@angular/router'; 
 
 
 
import { StatusMonitorData } from '../installationstatuses/showstatuses.component';
import { CustomerAssetsData, Customer } from '../customerassets/customerassets.component';
import { SeverityLevel, CcrCardModel, CcrType } from '../ccrcardmodels/ccr-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';
import { Formatter } from '../helpers/formatter';
import { Util } from '../helpers/util';
   
@Injectable() 
export class StatusMonitorService { 
    private appUrl: string = "";
   
    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
      this.appUrl = baseUrl;
    }

    getAllStatuses() : Observable<StatusMonitorData[]>{
      try {
        return this._http.get<StatusMonitorData[]>(this.appUrl + 'api/Installations/Status/All');
      }
      catch (e) {
        console.log(e.message);
        return Observable.throw(e.message);
      } 
    }

    getCustomerAssets(): Observable<CustomerAssetsData[]>{
      try {
        return this._http.get<CustomerAssetsData[]>(this.appUrl + 'api/Installations/All');
      }
      catch (e) {
        console.log(e.message);
        return Observable.throw(e.message);
      } 
    }

    getCustomers(): Observable<Customer[]> {
      try {
        return this._http.get<Customer[]>(this.appUrl + 'api/Customer/All');
      }
      catch (e) {
        console.log(e.message);
        return Observable.throw(e.message);
      } 
    }

    getCustomerById(id: number): Observable<Customer> {
      try {
        return this._http.get<Customer>(this.appUrl + "api/Customer/" + id);
      }
      catch (e) {
        console.log(e.message);
        return Observable.throw(e.message);
      }
     
    }
   
    getInstallationAssetsByCustId(id: number) : Observable<CustomerAssetsData>{
      return this._http.get<CustomerAssetsData>(this.appUrl + "api/Installations/" + id);
    }

    getInstallationAssetByCustomerAndAppName(id: number, appName: string): Observable<CustomerAssetsData> {
      return this._http.get<CustomerAssetsData>(this.appUrl + "api/Installations/" + id +"/" + appName);
    }
   
    updateEmployee(customer) { 
      return this._http.put(this.appUrl + 'api/Customer/Edit', customer);
            //.map((response: Response) => response.json()) 
            //.catch(this.errorHandler); 
    } 
   
    deleteEmployee(id) { 
      return this._http.delete(this.appUrl + "api/Customer/Delete/" + id);
            //.map((response: Response) => response.json()) 
            //.catch(this.errorHandler); 
    } 
   
    errorHandler(error: Response) { 
        console.log(error); 
        return observableThrowError(error); 
    }

  getCcrStatusSeverity(cards: Array<CcrCardModel>) {
      for (let card of cards) {
        switch (card.CcrType) {
          case CcrType.AppService:
            this.getAppServiceCardSeverity(<ApplicationProps> card);
            break;
          case CcrType.Certificate:
            this.getCertificateCardSeverity(<CertificateProps> card);
            break;
          case CcrType.Customer:
            this.getCustomerCardSeverity(<CustomerProps> card);
            break;
          case CcrType.Storage:
            this.getStorageCardSeverity(<StorageProps> card);
            break;
          case CcrType.Database:
            this.getDatabaseCardSeverity(<DatabaseProps> card);
            break;
          case CcrType.Misc:
            this.getMiscCardSeverity(<MiscProps>card);
            break;
          default:
            break;
        }
      }
    return cards;
    }

  private getAppServiceCardSeverity(card: ApplicationProps): ApplicationProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.ApplicationInfo) ||
      Util.empty(card.ApplicationName) ||
      Util.empty(card.ApplicationServiceHealth) ||
      Util.empty(card.ApplicationVersion) ||
      Util.empty(card.LicenceExpiryDate) ||
      Util.empty(card.LicenceSerial) ||
      Util.empty(card.LicenceServer)) {
      msgs.push("Empty properties for App");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    if (card.E2eTestResponse !== '200') {
      msgs.push("End to end test missing or has no response. Errorcode: " + card.E2eTestResponse);
      card.SeverityLevel = SeverityLevel.Alert;
    }
    
    card.Message = Formatter.toolTipNotification(msgs.reverse());
    return card;
  }

  private getCertificateCardSeverity(card: CertificateProps): CertificateProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    const warningDaysTH = 30;
    const immidiateDaysTH = 14;
    const alertDaysTH = 7;

    var exp = new Date(Date.parse(card.SslExpiryDate.toString()));
    var now = new Date();

    var diff = (now.getTime() > exp.getTime()) ? now.getTime() - exp.getTime() : exp.getTime() - now.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
   
    if (Util.empty(card.SslExpiryDate) ||
        Util.empty(card.SslName) ||
        Util.empty(card.SslStatus)) {
      msgs.push("Empty properties set for Certificates");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    if (diffDays < warningDaysTH) {
      card.SeverityLevel = SeverityLevel.Alert;
      console.log("DIFF " + diffDays);
      if (diffDays < 0) {
        msgs.push("SSL-certificate expired " + diffDays + " ago.")
      }
      else {
        msgs.push("Days until expiry " + diffDays);
      }
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());
    return card;
  }

  private getCustomerCardSeverity(card: CustomerProps): CustomerProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.Description) ||
        Util.empty(card.Description) ||
        Util.empty(card.Environment) ||
        Util.empty(card.LastUpdate) ||
        Util.empty(card.LicenceExpiryDate) ||
        Util.empty(card.PlantName)){
      msgs.push("Empty properties set for Customer");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    if (Util.empty(card.E2eTestUri)) {
      card.E2eTestUri = "No response from application";
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());
    return card;
  }

  private getDatabaseCardSeverity(card: DatabaseProps): DatabaseProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.DatabaseName) ||
        Util.empty(card.DatabaseServer) ||
        Util.empty(card.DatabaseServiceLevel) ||
        Util.empty(card.DatabaseSize) ||
        Util.empty(card.DatabaseTemplate) ||
        Util.empty(card.DatabaseVersion)){
      msgs.push("Empty properties set for Database");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());

    return card;
  }

  private getStorageCardSeverity(card: StorageProps): StorageProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.StorageServiceLevel) ||
        Util.empty(card.StorageBlobNFiles)) {
      msgs.push("Empty properties set for Storage");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());
    return card;
  }

  private getMiscCardSeverity(card: MiscProps): MiscProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.Enabled3dViewer) || Util.empty(card.EnabledPdfTron)) {
      msgs.push("Empty properties set for Other Assets");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());

    return card;
  }

  //private sortCcrCards(cards: Array<CcrCardModel>): Array<CcrCardModel> {
  //  let sorted = {} as Array<CcrCardModel>;
  //  let arr = {} as Array<CcrCardModel>;
  //  let tempTupleArray: Array<[SeverityLevel, Array<CcrCardModel>]>;
  //  let i, all = cards.length, chunk = 6;
  //  for (i = 0; i < all; i += chunk) {
  //    let tempArray: Array<CcrCardModel> = cards.slice(i, i + chunk);
  //    var rowSever = SeverityLevel.Informational;
  //    for (let c of tempArray) {
  //      var sever = c.SeverityLevel;
  //      if (sever == SeverityLevel.Alert) {
  //        rowSever = sever;
  //        break;
  //      }
  //      else if (sever == SeverityLevel.Immediate) {
  //        rowSever = sever;
  //      }
  //      else if (sever == SeverityLevel.Warning && rowSever != SeverityLevel.Immediate) {
  //        rowSever = sever;
  //      }
  //    }
  //    tempTupleArray.push([sever, tempArray]);
  //    //tempTupleArray[i][0] = sever;
  //    //tempTupleArray[i][1] = tempArray;
  //  }
  //  for (let chunk of tempTupleArray) {
  //    for (let _arr of chunk[1]) {
  //      console.log(_arr);
  //    }
  //  }
  //  return sorted;
  //}
  
}
