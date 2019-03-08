import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CcrCardModel, CcrType, SeverityLevel } from '../ccrcardmodels/ccr-card-model';
import { Util } from '../helpers/util';


@Component({
  selector: 'app-ccr-card',
  templateUrl: './ccr-card.component.html',
  styleUrls: ['./ccr-card.component.css']
})
export class CcrCardComponent implements OnInit {
  public severityLevel: SeverityLevel;

  public ccrType: CcrType;
  @Input() ccr: CcrCardModel;

  public showCard: boolean;
  public fieldIconUri: string;
  public ntfIconUri: string;
  //public azureIconUri: string;

  public azurePortalLink: string;

  contentViewLimit: number;
  

  static readonly assetIconPath : string = "../../assets/icons/"

  constructor() {

    this.fieldIconUri = "";
    this.ntfIconUri = "";
    //this.azureIconUri = CcrCardComponent.assetIconPath + "to-azure.svg"
    this.showCard = true;
    this.contentViewLimit = 50;
  }

  ngOnInit() {
    this.ccrType = this.ccr.CcrType;
    this.severityLevel = this.ccr.SeverityLevel;
    this.setCcrField();
    this.setNtfIcon();
    this.azurePortalLink = Util.AzureRmLink(this.ccr);
  }


  setFieldStyle()
  {
    return {
      field: true,
      warning: this.severityLevel === SeverityLevel.Warning,
      immediate: this.severityLevel === SeverityLevel.Immediate,
      alert1: this.severityLevel === SeverityLevel.Alert,
      hidden: this.ccrType !== CcrType.Customer
    }
  }

  private setCcrField() {
    var path = CcrCardComponent.assetIconPath;
    var file = "ssl.svg"
    switch (this.ccrType) {
      case CcrType.AppService:
        file = "web-app.svg";
        break;
      case CcrType.Certificate:
        file = "ssl.svg";
        break;
      case CcrType.Customer:
        file = "customer.svg";
        break;
      case CcrType.Storage:
        file = "storage.svg";
        break;
      case CcrType.Database:
        file = "database.svg"
        break;
      default:
        file = "other-assets.svg";
        break;
    }
    this.fieldIconUri = path.concat(file);
  }

  private setNtfIcon() {
    if (this.severityLevel === SeverityLevel.Warning) { this.ntfIconUri = CcrCardComponent.assetIconPath + "ntf-warn.svg"; }
    else if (this.severityLevel === SeverityLevel.Immediate) { this.ntfIconUri = CcrCardComponent.assetIconPath + "ntf-imdt.svg"; }
    else if (this.severityLevel === SeverityLevel.Alert) { this.ntfIconUri = CcrCardComponent.assetIconPath + "ntf-alert.svg"; }
    else { this.ntfIconUri = CcrCardComponent.assetIconPath + "ntf-info.svg" }
  }
}
