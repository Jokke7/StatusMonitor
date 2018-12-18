"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
//@Injectable() 
//export class StatusMonitorService { 
//    appUrl: string = ""; 
//    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) { 
//        this.appUrl = baseUrl; 
//    } 
//    getAllStatuses() { 
//      return this._http.get(this.appUrl + 'api/Installation/Status/All') 
//            .map(res => res.json()) 
//            .catch(this.errorHandler); 
//    } 
//    getCustomers() { 
//      return this._http.get(this.appUrl + 'api/Customer/All') 
//            .map((response: Response) => response.json()) 
//            .catch(this.errorHandler); 
//    } 
//    getCustomerById(id: number) { 
//      return this._http.get(this.appUrl + "api/Customer/" + id) 
//            .map((response: Response) => response.json()) 
//            .catch(this.errorHandler) 
//    } 
//    saveCustomer(customer) { 
//        return this._http.post(this.appUrl + 'api/Employee/Create', employee) 
//            .map((response: Response) => response.json()) 
//            .catch(this.errorHandler) 
//    } 
//    updateEmployee(employee) { 
//        return this._http.put(this.appUrl + 'api/Employee/Edit', employee) 
//            .map((response: Response) => response.json()) 
//            .catch(this.errorHandler); 
//    } 
//    deleteEmployee(id) { 
//        return this._http.delete(this.appUrl + "api/Employee/Delete/" + id) 
//            .map((response: Response) => response.json()) 
//            .catch(this.errorHandler); 
//    } 
//    errorHandler(error: Response) { 
//        console.log(error); 
//        return Observable.throw(error); 
//    } 
//}
//# sourceMappingURL=statusmonitor.service.js.map