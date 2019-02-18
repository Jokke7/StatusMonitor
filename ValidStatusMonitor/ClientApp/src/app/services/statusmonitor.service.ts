
import {throwError as observableThrowError,  Observable} from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http' 
import { Router } from '@angular/router'; 
 
 
 
import { StatusMonitorData } from '../installationstatuses/showstatuses.component';
import { CustomerAssetsData } from '../customerassets/customerassets.component';
import { SeverityLevel, CcrCardModel, CcrType } from '../ccrcardmodels/ccr-card-model';
import { ApplicationProps } from '../ccrcardmodels/application-card-model';
import { CertificateProps } from '../ccrcardmodels/certificate-card-model';
import { CustomerProps } from '../ccrcardmodels/customer-card-model';
import { StorageProps } from '../ccrcardmodels/storage-card-model';
import { DatabaseProps } from '../ccrcardmodels/database-card-model';
import { MiscProps } from '../ccrcardmodels/misc-card-model';
import { Formatter } from '../helpers/formatter';
   
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

  getCustomerAssets() {
    try {
      return this._http.get<CustomerAssetsData[]>(this.appUrl + 'api/Installations/All');
    }
    catch (e) {
      console.log(e.message);
      return Observable.throw(e.message);
    } 
    }  
   
    getCustomerById(id: number) { 
      return this._http.get(this.appUrl + "api/Customer/" + id).pipe( 
            map((response: Response) => response.json()), 
            catchError(this.errorHandler),) 
    }

    getInstallationAssetsByCustId(id: number) : Observable<CustomerAssetsData[]>{
      return this._http.get<CustomerAssetsData[]>(this.appUrl + "api/Installations/" + id);
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
    card.Message = "AppTest"
    return card;
  }

  private getCertificateCardSeverity(card: CertificateProps): CertificateProps {
    card.SeverityLevel = SeverityLevel.Informational;
    card.Message = "Certtest"
    return card;

  }

  private getCustomerCardSeverity(card: CustomerProps): CustomerProps {
    card.SeverityLevel = SeverityLevel.Informational;
    card.Message = "Custtest"

    return card;

  }

  private getDatabaseCardSeverity(card: DatabaseProps): DatabaseProps {
    card.SeverityLevel = SeverityLevel.Informational;
    card.Message = "DBtest"

    return card;

  }

  private getStorageCardSeverity(card: StorageProps): StorageProps {
    card.SeverityLevel = SeverityLevel.Informational;

    if (card.StorageBlobSizeMb != 212) {
      card.SeverityLevel = SeverityLevel.Warning;
      var msgs: string[] = [];
      msgs.push("Number of files not set");
      msgs.push("Dsc for size not found");
      card.Message = Formatter.toolTipNotification(msgs);
    }

    return card;

  }

  private getMiscCardSeverity(card: MiscProps): MiscProps {
    card.SeverityLevel = SeverityLevel.Informational;

    card.Message = "Misctest"

    return card;

  }
}
