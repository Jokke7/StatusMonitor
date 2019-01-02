
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http' 
import { Router } from '@angular/router'; 
 
 
 
import { StatusMonitorData } from '../installationstatuses/showstatuses.component';
import { CustomerAssetsData } from '../customerassets/customerassets.component';
   
@Injectable() 
export class StatusMonitorService { 
    appUrl: string = ""; 
   
    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
        this.appUrl = baseUrl; 
    } 
   
    getAllStatuses() { 
      return this._http.get<StatusMonitorData[]>(this.appUrl + 'api/Installations/Status/All')
    } 

    getCustomers() {
      return this._http.get<CustomerAssetsData[]>(this.appUrl + 'api/Customer/All')
  }  
   
    getCustomerById(id: number) { 
      return this._http.get(this.appUrl + "api/Customer/" + id).pipe( 
            map((response: Response) => response.json()), 
            catchError(this.errorHandler),) 
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
}
