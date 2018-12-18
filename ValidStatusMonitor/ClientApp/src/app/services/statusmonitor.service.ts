import { Injectable, Inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'; 
import { Router } from '@angular/router'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 
import { StatusMonitorData } from '../installationstatuses/showstatuses.component';
   
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
      return this._http.get(this.appUrl + 'api/Customer/All') 
            .map((response: Response) => response.json()) 
            .catch(this.errorHandler);
    } 
   
    getCustomerById(id: number) { 
      return this._http.get(this.appUrl + "api/Customer/" + id) 
            .map((response: Response) => response.json()) 
            .catch(this.errorHandler) 
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
        return Observable.throw(error); 
    } 
}
