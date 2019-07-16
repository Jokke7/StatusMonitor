import { Component, OnInit, Input } from '@angular/core';
import { Customer, CustomerAssetsData } from '../ccrtypes/interfaces';
import { StatusMonitorService } from '../services/statusmonitor.service';
import { MessageService } from 'primeng/api';
import { Util } from '../helpers/util';



@Component({
  selector: 'app-add-installation-panel',
  templateUrl: './add-installation-panel.component.html',
  styleUrls: ['./add-installation-panel.component.css']
})
export class AddInstallationPanelComponent implements OnInit {

  @Input() customerSelectList: Customer[];
  addIcon: string;

  installation: CustomerAssetsData;
  selectedCustomer: Customer;
  _addCustomer: Customer;
  appE2eUrl: string;
  active: boolean;

  addCust: string;
  addEmail: string;
  addDesc: string;
  active2: boolean;

  constructor(private _statusMonitorService: StatusMonitorService, private _messageService: MessageService) {
    this.selectedCustomer = null;
    this.appE2eUrl = "";
    this.addIcon = "../../assets/icons/add-plus.svg";
    this.installation = this.installation || { CustomerId: 0, EndpointTestUri: "valid.example.com" };
    this.active = false;

    this._addCustomer = this._addCustomer || { Name: "", Description: "", Email: ""};
    this.addCust = null;
    this.addEmail = null;
    this.addDesc = null;
    this.active2 = false;
  }

  ngOnInit() {
  }

  addInstallation() {
    this.installation.CustomerId = this.selectedCustomer.Id;
    this.installation.EndpointTestUri = this.appE2eUrl;
    this._statusMonitorService.addAsset(this.installation).subscribe(res => res);
    this._messageService.add({ key: 'addInstKey', severity: 'success', summary: 'New installation added on ' + this.appE2eUrl, detail: 'For customer: ' + this.selectedCustomer.Name });

  }

  addCustomer() {
    if (!Util.empty(this.addCust)) {
      this._addCustomer.Name = this.addCust;
      this._addCustomer.Description = this.addDesc;
      this._addCustomer.Email = this.addEmail;
      this._statusMonitorService.addCustomer(this._addCustomer).subscribe(res => res);
      this.customerSelectList.push(this._addCustomer);
      this._messageService.add({ key: 'addCustKey', severity: 'success', summary: 'Customer Added:', detail: this.addCust});
    }
    else { console.log("Error in input for new Customer"); }
  }


}
