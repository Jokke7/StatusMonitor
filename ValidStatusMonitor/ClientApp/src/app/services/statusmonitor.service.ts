
import {throwError as observableThrowError,  Observable, throwError} from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http' 
import { Router } from '@angular/router'; 
 
 
 
import { CustomerAssetsData, Customer, StatusMonitorData } from '../ccrtypes/interfaces';
import { SeverityLevel, CcrCardModel, CcrType } from '../ccrcardmodels/ccr-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';
import { Formatter } from '../helpers/formatter';
import { Util } from '../helpers/util';
import { SummaryProps } from '../ccrcardmodels/summary-card-model';
   
@Injectable() 
export class StatusMonitorService { 
  private appUrl: string = "";
  private static taskList: string[] = [];
  private static aggregatedSeverity: SeverityLevel = SeverityLevel.Informational;
   
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

  getStatusById(uid: string): Observable<StatusMonitorData> {
    try {
      return this._http.get<StatusMonitorData>(this.appUrl + "api/Installations/Status/" + uid);
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

  updateStatusOnDemand(statusId: string): Observable<any> {
    //const headers = new HttpHeaders({
    //  'key1': 'value1',
    //  'key2': 'value2',
    //  // the rest ..
    //});

    //const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json'
    //  })
    //};
    try {
      console.log("update pressed");

      return this._http.post(this.appUrl + 'api/Installations/Refresh/' + statusId, true);
      //return this._http.post('lol', true);

    }
    catch (e) {
      console.log(e.message);
      return Observable.throw(e.message);
    }
  }

  getCustomerAssetById(uid: string): Observable<CustomerAssetsData> {
    try {
      return this._http.get<CustomerAssetsData>(this.appUrl + 'api/Installations/' + uid);
    }
    catch (e) {
      console.log(e.message);
      return Observable.throw(e.message);
    }
  }

  addAsset(asset: CustomerAssetsData): Observable<CustomerAssetsData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
      try {
        return this._http.post<CustomerAssetsData>('api/Installations/Post', asset, httpOptions);
      }
      catch (e) {
        console.log(e.message);
        return Observable.throw(e.message);
      } 
  }

  addCustomer(cust: Customer): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    try {
      return this._http.post<Customer>('api/Customer/Post', cust, httpOptions);
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
  
    updateCustomer(customer) { 
      return this._http.put(this.appUrl + 'api/Customer/Edit', customer);
            //.map((response: Response) => response.json()) 
            //.catch(this.errorHandler); 
    } 
   
    deleteCustomer(id) { 
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
          case CcrType.Summary:
            this.getSummaryCardSeverity(<SummaryProps>card);
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

    const warningDaysTH = 30;
    const immidiateDaysTH = 14;
    const alertDaysTH = 7;

    var exp = new Date(Date.parse(card.LicenceExpiryDate.toString()));
    var now = new Date();

    var diff = (now.getTime() > exp.getTime()) ? now.getTime() - exp.getTime() : exp.getTime() - now.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (Util.empty(card.ApplicationInfo) ||
      Util.empty(card.ApplicationName) ||
      Util.empty(card.ApplicationServiceHealth) ||
      Util.empty(card.ApplicationVersion) ||
      Util.empty(card.LicenceExpiryDate) ||
      Util.empty(card.LicenceSerial) ||
      Util.empty(card.LicenceServer)) {
      msgs.push("Empty properties for App");
      StatusMonitorService.taskList.push("Check missing properties for App Service: " + card.ApplicationName);
      card.SeverityLevel = SeverityLevel.Warning;
    }

    if (diffDays < warningDaysTH) {
      card.SeverityLevel = SeverityLevel.Warning;
      card.SeverityLevel = (diffDays < immidiateDaysTH ?
        (diffDays <= alertDaysTH ? SeverityLevel.Alert : SeverityLevel.Immediate) : SeverityLevel.Warning);
      if (diffDays < 0) {
        msgs.push("App-certificate expired " + diffDays + " ago.")
      }
      else {
        msgs.push("License expires in " + diffDays + " days.");
        StatusMonitorService.taskList.push("Renew application licence for " + card.ApplicationName + ".");
      }
    }

    if (card.E2eTestResponse !== '200') {
      msgs.push("End to end test missing or has no response. Errorcode: " + card.E2eTestResponse);
      StatusMonitorService.taskList.push("Application is unresponsive(ErrCode: " + card.E2eTestResponse + "). Check " + card.ApplicationName + ".");
      card.SeverityLevel = SeverityLevel.Alert;
    }
    
    card.Message = Formatter.toolTipNotification(msgs.reverse());
    this.setAggregatedSeverity(card.SeverityLevel);

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
      StatusMonitorService.taskList.push("Check missing properties for SSL-certificates " + card.SslName);
      card.SeverityLevel = SeverityLevel.Warning;
    }

    if (diffDays < warningDaysTH) {
      card.SeverityLevel = SeverityLevel.Warning;
      card.SeverityLevel = (diffDays < immidiateDaysTH ?
        (diffDays <= alertDaysTH ? SeverityLevel.Alert : SeverityLevel.Immediate) : SeverityLevel.Informational);
      if (diffDays < 0) {
        msgs.push("SSL-certificate expired " + diffDays + "ago.")
        StatusMonitorService.taskList.push("SSL-certificate " + card.SslName + " expired " + diffDays + " ago.");
      }
      else {
        msgs.push("SSL-certificate expires in " + diffDays + " days.");
        StatusMonitorService.taskList.push("Renew SSL- certificate " + card.SslName);
      }
    }
    card.Message = Formatter.toolTipNotification(msgs.reverse());
    this.setAggregatedSeverity(card.SeverityLevel);

    return card;
  }

  private getCustomerCardSeverity(card: CustomerProps): CustomerProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.Description) ||
        Util.empty(card.E2eTestUri) ||
        Util.empty(card.Environment) ||
        Util.empty(card.LastUpdate) ||
        Util.empty(card.LicenceExpiryDate) ||
        Util.empty(card.PlantName)){
      msgs.push("Empty properties set for Customer");
      StatusMonitorService.taskList.push("Check missing properties for Customer " + card.CustomerId);

      card.SeverityLevel = SeverityLevel.Warning;
    }

    if (Util.empty(card.E2eTestUri)) {
      card.E2eTestUri = "No response from application";
    }
    card.Message = Formatter.toolTipNotification(msgs.reverse());
    this.setAggregatedSeverity(card.SeverityLevel);

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
      StatusMonitorService.taskList.push("Check missing properties for Database " + card.DatabaseName);

      card.SeverityLevel = SeverityLevel.Warning;
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());
    this.setAggregatedSeverity(card.SeverityLevel);

    return card;
  }

  private getStorageCardSeverity(card: StorageProps): StorageProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];

    if (Util.empty(card.StorageServiceLevel) ||
        Util.empty(card.StorageBlobNFiles) ||
        Util.empty(card.StorageBlobSizeMb)){
      msgs.push("Empty properties set for Storage");
      StatusMonitorService.taskList.push("Check emtpy properties of Storage.");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    card.Message = Formatter.toolTipNotification(msgs.reverse());
    this.setAggregatedSeverity(card.SeverityLevel);
    return card;
  }

  private getMiscCardSeverity(card: MiscProps): MiscProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];


    if (Util.empty(card.Enabled3dViewer) || Util.empty(card.EnabledPdfTron)) {
      msgs.push("Empty properties set for Other Assets");
      StatusMonitorService.taskList.push("Check missing properties for 'Other Assets'");
      card.SeverityLevel = SeverityLevel.Warning;
    }

    //if (card.EnabledPdfTron) {
    //  const warningDaysTH = 30;
    //  const immidiateDaysTH = 14;
    //  const alertDaysTH = 7;
    //  var exp = new Date(Date.parse(card.PdfTronLicenceExpiryDate.toString()));
    //  var now = new Date();

    //  var diff = (now.getTime() > exp.getTime()) ? now.getTime() - exp.getTime() : exp.getTime() - now.getTime();
    //  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    //  if (diffDays < warningDaysTH) {
    //    card.SeverityLevel = SeverityLevel.Warning;
    //    card.SeverityLevel = (diffDays < immidiateDaysTH ?
    //      (diffDays <= alertDaysTH ? SeverityLevel.Alert : SeverityLevel.Immediate) : SeverityLevel.Informational);
    //    if (diffDays < 0) {
    //      msgs.push("PdfTron licence expired " + diffDays + "ago.")
    //      StatusMonitorService.taskList.push("PdfTron licence  expired " + diffDays + " ago.");
    //    }
    //    else {
    //      msgs.push("PdfTron licence expires in " + diffDays + " days.");
    //      StatusMonitorService.taskList.push("Renew PdfTron licence");
    //    }
    //  }
    //}
    

    card.Message = Formatter.toolTipNotification(msgs.reverse());
    this.setAggregatedSeverity(card.SeverityLevel);
    return card;
  }

  private getSummaryCardSeverity(card: SummaryProps): SummaryProps {
    card.SeverityLevel = SeverityLevel.Informational;
    var msgs: string[] = [];
    if (Util.empty(StatusMonitorService.taskList)) {
      msgs.push("No upcoming maintenance tasks! &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp")
    }
    else {
      msgs = StatusMonitorService.taskList;
    }
    card.Message = Formatter.toolTipNotification(msgs.reverse());
    StatusMonitorService.taskList = [];

    card.SeverityLevel = StatusMonitorService.aggregatedSeverity;
    StatusMonitorService.aggregatedSeverity = SeverityLevel.Informational;
    return card;
  }

  public setAggregatedSeverity(sever: SeverityLevel) {
    if (sever == SeverityLevel.Alert) {
      StatusMonitorService.aggregatedSeverity = sever;
      return;
    }
    else if (sever == SeverityLevel.Immediate) {
      StatusMonitorService.aggregatedSeverity = sever;
      return;
    }
    else if (sever == SeverityLevel.Warning) {
      StatusMonitorService.aggregatedSeverity = sever;
      return;
    }
  }

  //private handleError(error: HttpErrorResponse) {
  //  if (error.error instanceof ErrorEvent) {
  //    // A client-side or network error occurred. Handle it accordingly.
  //    console.error('An error occurred:', error.error.message);
  //  } else {
  //    // The backend returned an unsuccessful response code.
  //    // The response body may contain clues as to what went wrong,
  //    console.error(
  //      `Backend returned code ${error.status}, ` +
  //      `body was: ${error.error}`);
  //  }
  //  // return an observable with a user-facing error message
  //  return throwError(
  //    'Something bad happened; please try again later.');
  //};

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
